import prisma from "@/lib/db";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("fetching", "1s");
    await step.sleep("transcribing", "2s");
    await step.sleep("processing", "3s");
    await step.run("create-workflow", () => {
      return prisma.workflow.create({
        data: {
          name: "workflow-from-innest",
        },
      });
    });
  }
);
