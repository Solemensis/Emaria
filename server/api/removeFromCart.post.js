import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { newCart, userId } = body;

  // db event
  const deleteFromCart = await prisma.Carts.update({
    where: {
      user_id: userId,
    },
    data: {
      cart: newCart,
    },
  });

  return deleteFromCart;
});
