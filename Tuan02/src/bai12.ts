import simulateTask from './bai5';

export async function callTask() {
    var simuTask=await simulateTask(2000)
    console.log("Bai 12: "+simuTask)
}