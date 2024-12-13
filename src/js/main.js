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
  const parkCode = data.parkCode; // Extract parkCode
  console.log(parkCode);

  if (introElement) {
    const introHtml = introTemplate(data);
    introElement.innerHTML = introHtml;
  } else {
    console.log("no introElement");
  }
}

function getmediacardLinks(data, parkCode) {
  // console.log(data);
  console.log(parkCode);
  const withUpdatedImages = parkInfoLinks.map((item, index) => {
    item.image = data[index + 2].url;
    return item;
  });
  return withUpdatedImages;
}

function setmediaCardInfo(parklinkList) {
  // console.log(parklinkList);
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
  const parkCode = setIntroInfo(parkData);
  // console.log(parkData);
  const links = getmediacardLinks(parkData.images);

  setHeaderInfo(parkData);
  setIntroInfo(parkData);
  setmediaCardInfo(links);
  setfooterInfo(parkData);
  enableNavigation();
}
init();

export { init, setIntroInfo, getmediacardLinks, setmediaCardInfo };
