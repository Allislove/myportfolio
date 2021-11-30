import React from 'react';

let hour = new Date().getHours();
let greeting = "";

// Puedo determinar y conocer el pais del usuario con la función getCountry()
// https://developer.mozilla.org/es/docs/Web/API/NavigatorLanguage/getCountry
let country = navigator.language.split("-")[1];
console.log(country);
