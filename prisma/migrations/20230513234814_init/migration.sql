-- CreateTable
CREATE TABLE "Carts" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "cart" JSONB NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Carts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carts_user_id_key" ON "Carts"("user_id");
