import { park, parkInfoLinks} from "./parkService.mjs";
import { getParkData } from './parkService.mjs';

import { introTemplate, mediaCardTemplate} from "./templete.mjs";
import {setHeaderInfo, setfooterInfo} from "./setHeaderFooter.mjs";

// setHeaderInfo(parkData);

function setIntroInfo(data){
    const introElement = document.querySelector('.intro');
    const introHtml = introTemplate(data);
    introElement.innerHTML = introHtml;
}
// setIntroInfo(parkData);

function getmediacardLinks(data) {
    const withUpdatedImages = parkInfoLinks.map((item, index) => {
        item.image = data[index + 2].url;
        return item;
      });
    return withUpdatedImages;
  }

function setmediaCardInfo(parklinkList) {
    const cardElement = document.querySelector('.info');
    const cardHtml = parklinkList.map(mediaCardTemplate).join('');
    // const cardHtml = mediaCardTemplate(parklinkList);
    cardElement.innerHTML = cardHtml;
}
// setmediaCardInfo(parkData);

// setfooterInfo(parkData);

async function init() {
    const parkData = await getParkData();
    const links = getmediacardLinks(parkData.images);

    setHeaderInfo(parkData);
    setIntroInfo(parkData);
    setmediaCardInfo(links);
    setfooterInfo(parkData);
  }
init();

