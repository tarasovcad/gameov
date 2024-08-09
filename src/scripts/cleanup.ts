import {PrismaClient} from "@prisma/client";
import cron from "node-cron";
const prisma = new PrismaClient();

async function cleanupExpiredUsers() {
  const now = new Date();
  try {
    const result = await prisma.tempUser.deleteMany({
      where: {
        expires: {
          lt: now,
        },
      },
    });
    console.log(`${result.count} expired users deleted successfully`);
  } catch (error) {
    console.error("Error deleting expired users:");
    console.error("Stack trace:");
  }
}

// Schedule the cleanup to run every hour
cron.schedule("* * * * *", cleanupExpiredUsers);

async function main() {
  try {
    await prisma.$connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

main();
