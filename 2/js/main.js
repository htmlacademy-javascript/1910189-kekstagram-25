//ссылка https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random//

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandom(2,5);

function isLessThenMaxLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }

  return false;
}
isLessThenMaxLength('Привет', 10);

