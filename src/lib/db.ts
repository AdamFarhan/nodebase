import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = global as unknown as {
  primsa: PrismaClient;
};

const prisma = globalForPrisma.primsa || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.primsa = prisma;
}

export default prisma;
