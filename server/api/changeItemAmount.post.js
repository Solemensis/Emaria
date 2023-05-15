import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { newCart, userId } = body;

  // db event
  const changeAmount = await prisma.Carts.update({
    where: {
      user_id: userId,
    },
    data: {
      cart: newCart,
    },
  });

  return changeAmount;
});
