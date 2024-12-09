import { parkInfoLinks, park } from "./parkService.mjs";
import { getParkData } from "./parkService.mjs";

import { introTemplate, mediaCardTemplate } from "./templete.mjs";
import {
  setHeaderInfo,
  setfooterInfo,
  enableNavigation,
} from "./setHeaderFooter.mjs";

function setIntroInfo(data) {
  const introElement = document.querySelector(".introcontainer");
  if (introElement) {
    const introHtml = introTemplate(data);
    introElement.innerHTML = introHtml;
  } else {
    console.log("no introElement");
  }
}

function getmediacardLinks(data) {
  const withUpdatedImages = parkInfoLinks.map((item, index) => {
    item.image = data[index + 2].url;
    return item;
  });
  return withUpdatedImages;
}

function setmediaCardInfo(parklinkList) {
  const cardElement = document.querySelector(".info");
  if (cardElement) {
    const cardHtml = parklinkList.map(mediaCardTemplate).join("");
    cardElement.innerHTML = cardHtml;
  } else {
    console.log("no introElement");
  }
}

async function init() {
  const parkData = await getParkData();
  const links = getmediacardLinks(parkData.images);

  setHeaderInfo(parkData);
  setIntroInfo(parkData);
  setmediaCardInfo(links);
  setfooterInfo(parkData);
  enableNavigation();
}
init();

export { init, setIntroInfo, getmediacardLinks, setmediaCardInfo };
