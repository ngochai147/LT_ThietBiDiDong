function simulateTask(time:number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task done in ${time}`);
    }, time);
  });
}

function promiseRunAll(promise1:number,promise2:number,promise3:number){
    return Promise.all([
        simulateTask(promise1),
        simulateTask(promise2),
        simulateTask(promise3)
    ])
}

export default promiseRunAll