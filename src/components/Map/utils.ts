import { Coords } from "@main-types/list";

function mapInit(ymaps: any, coords: Coords) {
  ymaps.ready(function () {
    const myMap = new ymaps.Map(
      "map",
      {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 10,
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    coords.forEach((item) => {
      myMap.geoObjects.add(
        new ymaps.GeoObject({
          // Описание геометрии.
          geometry: {
            type: "Point",
            coordinates: [item[0], item[1]],
          },
        })
      );
    });

    const btns = document.querySelectorAll(".coord-js");

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const latitude = btn.getAttribute("data-latitude");
        const longitude = btn.getAttribute("data-longitude");

        myMap.setCenter([latitude, longitude], 18);
      });
    });
  });
}

export default mapInit;
