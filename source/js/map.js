ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
          center: [59.938635, 30.323118],
          zoom: 17,
          behaviors: ["drag"]
      }, {
          searchControlProvider: 'yandex#search'
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(59.938635, 30.323118), {
          balloonContentHeader: "Приглашаем к сотрудничеству дилеров!",
          balloonContentBody: "г. Санкт-Петербургб ул. Большая Конюшенная, д. 19/8",
      }, {
          iconLayout: 'default#image',
          iconImageHref: "img/map-pin.png",
          iconImageSize: [124, 106],
          iconImageOffset: [-55, -100]
      });

  myMap.geoObjects.add(myPlacemark);
});
