const helloAsync = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello Async");
  }, 2000);
});

export default helloAsync;
