//your JS code here. If required.
// Helper function to return a promise with delay
function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

document.getElementById("btn").onclick = function () {
  const inputVal = Number(document.getElementById("ip").value);
  const output = document.getElementById("output");

  output.textContent = ""; // clear previous output

  // 1st Promise – show input value (2 seconds)
  delayedPromise(inputVal, 2000)
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return delayedPromise(num, 2000); // 2nd Promise – pass same number after 2s
    })
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return delayedPromise(num * 2, 1000); // multiply by 2 (1s)
    })
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return delayedPromise(num - 3, 1000); // subtract 3 (1s)
    })
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return delayedPromise(num / 2, 1000); // divide by 2 (1s)
    })
    .then((num) => {
      output.textContent = `Result: ${num}`;
      return delayedPromise(num + 10, 1000); // add 10 (1s)
    })
    .then((finalNum) => {
      output.textContent = `Final Result: ${finalNum}`;
    })
    .catch((err) => {
      output.textContent = `Error: ${err}`;
    });
};
