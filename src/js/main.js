import { park, parkInfoLinks} from "./parkService.mjs";
import { introTemplate, mediaCardTemplate} from "./templete.mjs";
import {setHeaderInfo, setfooterInfo} from "./setHeaderFooter.mjs";

setHeaderInfo(park);

function setIntroInfo(data){
    const introElement = document.querySelector('.intro');
    const introHtml = introTemplate(data);
    introElement.innerHTML = introHtml;
}
setIntroInfo(park);

function setmediaCardInfo(parklinkList) {
    const cardElement = document.querySelector('.info');
    const cardHtml = parklinkList.map(mediaCardTemplate).join('');
    cardElement.innerHTML = cardHtml;
}
setmediaCardInfo(parkInfoLinks);

setfooterInfo(park);
