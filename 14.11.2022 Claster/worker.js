process.on("message", (message) => {
  process.send(is_prime(message));
  setTimeout(process.exit, 5000);
});

function is_prime(number) {
  let factors = [];

  if (number < 1) return false;
  if (number === 1) return true;

  for (let index = 0; index < number; index++) {
    if (number % index === 0) {
      factors.push(index);
    }
  }

  return factors.length > 0 ? false : true;
}
