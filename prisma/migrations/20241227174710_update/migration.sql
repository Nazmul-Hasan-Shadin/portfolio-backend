-- CreateTable
CREATE TABLE "AddProject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "projectLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AddProject_pkey" PRIMARY KEY ("id")
);
