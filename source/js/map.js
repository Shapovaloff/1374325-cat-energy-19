ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938635, 30.323118],
          zoom: 19,
          behaviors: ['drag']
      }, {
          searchControlProvider: 'yandex#search'
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(59.938635, 30.323118), {
          balloonContentHeader: 'Приглашаем к сотрудничеству дилеров!',
          balloonContentBody: 'г. Санкт-Петербург',
          balloonContentFooter: 'ул. Большая Конюшенная, д. 19/8',
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: "img/map-pin.png",
          // Размеры метки.
          iconImageSize: [55, 50],
          iconImageOffset: [-25, -50]
      });

  myMap.geoObjects.add(myPlacemark);
});
