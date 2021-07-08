<<<<<<< HEAD:src/scripts/map.js
let myMap;

const init = () => {
 myMap = new ymaps.Map("map", {
  center: [55.76, 37.64],
  zoom: 11,
  controls: []
 });

 const coords = [
    [55.743123, 37.569944],
    [55.755838, 37.563644],
    [55.759650, 37.594839],
    [55.747260, 37.605245]
 ];

 const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "/src/img/icon/marker.svg",
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
 })

 coords.forEach(cord => {
  myCollection.add(new ymaps.Placemark(cord));
 });

 myMap.geoObjects.add(myCollection);

 myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);
=======
let myMap;

const init = () => {
 myMap = new ymaps.Map("map", {
  center: [55.76, 37.64],
  zoom: 11,
  controls: []
 });

 const coords = [
    [55.743123, 37.569944],
    [55.755838, 37.563644],
    [55.759650, 37.594839],
    [55.747260, 37.605245]
 ];

 const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "../../img/icon/marker.svg",
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
 })

 coords.forEach(cord => {
  myCollection.add(new ymaps.Placemark(cord));
 });

 myMap.geoObjects.add(myCollection);

 myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);
>>>>>>> b1cf5e6ffc7e9cb5e7a12485c7d106aa668d2fdd:docs/js/map.js
