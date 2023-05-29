import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  let { userId, cart } = body;

  //database event

  const checkCart = await prisma.Carts.findFirst({
    where: {
      user_id: userId,
    },
  });

  if (!checkCart) {
    const createTheCart = await prisma.Carts.create({
      data: {
        user_id: userId,
        cart: cart,
      },
    });
  } else {
    const addToCart = await prisma.Carts.update({
      where: {
        user_id: userId,
      },
      data: {
        cart: cart,
      },
    });
  }

  return checkCart;
});
