function rejectMessage() {
  return new Promise((resolve,rejects) => {
    setTimeout(() => {
      rejects("Something went wrong");
    }, 1000);
  });
}

export default rejectMessage