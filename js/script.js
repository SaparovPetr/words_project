  function getRandomElement(arr) { 
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  } //объявляется функция getRandomElement, которая возвращает рандомный объект из массива
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () { //клик и запуск кода из функции ниже
    let randomElement = getRandomElement(phrases); //в переменную randomElement записывается результат выполения функции getRandomElement  (другими словами: рандомный возвращенный элемент массива записывается в переменную RandomElement)
    smoothly(phrase, 'textContent', randomElement.text);//плавно проявляется на экране текст из переменной randomElement (точнее производится замена на экране захваченного элемента phrase - его свойство textContent меняется на текст из переменной randomElement)
    smoothly(image, 'src', randomElement.image); //плавно проявляется на экране картинка из переменной randomElement (указазывается подлежащий изменению элемент страницы, свойство элемента, новое значение свойства) 
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  
  for (let i = 0; i <= 2; i = i + 1) { 
    smoothly(phrase, 'textContent', phrases[i].text); 
    smoothly(image, 'src',  phrases[i].image);
  }
  
  