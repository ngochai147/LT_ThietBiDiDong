import simulateTask from "./bai5";

export async function runWithError() {
    try {
    const result = await simulateTask(500);
    console.log(result);
    throw new Error("Something went wrong!");
    } catch (err) {
      console.error("Caught error:", err);
    }
  }