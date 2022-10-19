function getRandomNumber (min, max) {
  min = Math.ceil (min); //минимальное значение округленное до целого
  max = Math.floor (max); //максимальное значение округленное до целого
  return (max <= min || max < 0 || min < 0) ? NaN : Math.floor (Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomNumber(0, 100);

function lengthLessThan(str, limit) {
  return str.length < limit;
}

function lengthMoreThan(str, limit) {
  return str.length > limit;
}

function getLongString(str) {
  if (lengthLessThan(str, 20)) { // проверяем на длину строки
  //console.error('Комментарий должен быть длинее 20 символов');
    return false; // если < 20 возвращаем false
  }
  if (lengthMoreThan(str, 140)) { // проверяем на длину строки
    //console.error('Комментарий должен быть короче 140 символов');
    return false; //  если > 140 возвращаем false
  }
  return true; // если все условия соблюдены, то функция вернет true - строка str валидна
}
// eslint-disable-next-line no-console
console.log(
  getLongString('aaaaaaaaaaaaaaа'), // true
  getLongString('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'), // false

);
