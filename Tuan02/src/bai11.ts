import helloAsync from "./bai1";

export async function runTask() {
    const result = await helloAsync;
    console.log("Bai 11: "+result);
}