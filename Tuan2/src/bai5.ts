function simulateTask(time:number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task done");
    }, time);
  });
}

export default simulateTask