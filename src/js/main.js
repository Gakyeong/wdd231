// import { park, parkInfoLinks} from "./parkService.mjs";
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

function setmediaCardInfo(data) {
    const cardElement = document.querySelector('.info');
    // const cardHtml = parklinkList.map(mediaCardTemplate).join('');
    const cardHtml = mediaCardTemplate(data);
    cardElement.innerHTML = cardHtml;
}
// setmediaCardInfo(parkData);

// setfooterInfo(parkData);

async function init() {
    const parkData = await getParkData();
    setHeaderInfo(parkData);
    setIntroInfo(parkData);
    setmediaCardInfo(parkData);
    setfooterInfo(parkData);
  }
init();
