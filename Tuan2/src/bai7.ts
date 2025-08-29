function simulateTask(time:number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task done in ${time}`);
    }, time);
  });
}

function promiseRunRace(promise1:number,promise2:number,promise3:number){
    return Promise.race([
        simulateTask(promise1),
        simulateTask(promise2),
        simulateTask(promise3)
    ])
}

export default promiseRunRace