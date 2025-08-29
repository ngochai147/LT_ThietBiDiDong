function filterNumbers(arr: number[]) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr.filter((num) => num % 2 === 0));
    }, 1000);
  });
}


export default filterNumbers

