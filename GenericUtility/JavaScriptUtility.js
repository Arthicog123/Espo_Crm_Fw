export function getRandomNumber() {
  const num = Math.floor(Math.random() * 10000);
  return num
}

export function getFutureDate(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);

  return date.toLocaleDateString('en-GB'); // DD/MM/YYYY
}