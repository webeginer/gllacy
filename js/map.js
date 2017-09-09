ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [59.939014, 30.326412], // Санкт-Петербург
      zoom: 17
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(),

    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      hintContent: 'Вкусное мороженое здесь'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/pin.svg',
      // Размеры метки.
      iconImageSize: [80, 140],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-40, -140],
      // Добавление тени.
      iconShadow: true,
      // Ссылка на изображение тени.
      iconShadowImageHref: 'img/shadow.png',
      // Размеры тени.
      iconShadowImageSize: [182, 110],
      // Смещение левого верхнего угла тени относительно
      // её "ножки" (точки привязки).
      iconShadowImageOffset: [0, -110]
    });

  myMap.geoObjects
    .add(myPlacemark);
});
