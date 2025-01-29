-- CreateTable
CREATE TABLE "users" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "cpf" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("name")
);
