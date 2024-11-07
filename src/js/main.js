import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const getTitle = document.querySelector("title");
getTitle.innerHTML = parkData.fullName;

const disclaimer = document.querySelector(".disclaimer a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
    return `
    <img src=${info.images[0].url} alt="" />
            <div class="hero-banner__content">
            <a href="#" class="hero-banner__title">${info.name}</a>
            <p class="hero-banner__subtitle">
                <span>${info.designation}</span>
                <span>${info.states}</span>
            </p>`;
  }

const parkElement = document.querySelector('.hero-banner');
const parkHtml = parkInfoTemplate(parkData);
parkElement.innerHTML = parkHtml;