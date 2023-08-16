import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { userId } = await readBody(event);

  const userCartProducts = await prisma.Carts.findFirst({
    where: {
      user_id: userId,
    },
  });

  return userCartProducts;
});
