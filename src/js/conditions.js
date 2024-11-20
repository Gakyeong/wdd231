import { setHeaderInfo, setfooterInfo } from "./setHeaderFooter.mjs";
import { park, parkInfoLinks, getParkData, getAlertData } from "./parkService.mjs";
import { introTemplate, mediaCardTemplate} from "./templete.mjs";
import { init, setIntroInfo, getmediacardLinks, setmediaCardInfo } from "./main";

const parkData = await getParkData();
const AlertData = await getAlertData();

setHeaderInfo(parkData);
setfooterInfo(parkData);

function alerttype(data) {
    return data.map(item => {
        let alerttype = '';

        if (item.category === 'Park Closure') {
            alerttype = 'closure';
        } 
        else {
            alerttype = item.category.toLowerCase();
        }
        return alerttype;
    });
}

function alertsTemplate(alert) {
    return `
        <ll class= "alert">
            <svg class="icon" focusable="false" aria-hidden="true"><use xlink:href="/images/sprite.symbol.svg#alert-${alerttype(alert.category)}"></use></svg>
            <div>
                <h3>${alert.title}</h3> 
                <p>${alert.description}</p>
            </div>
        </ll>
    `
}

function setAlertinfo(alertinfolist) {
    const alertElement = document.querySelector('.alert');
    const alertHtml = alertinfolist.map(alertsTemplate).join('');
    alertElement.innerHTML = alertHtml;
}   

setAlertinfo(AlertData);

// function visitorTemplate(info) {
//     return `
//         <div class="visitorcontent">
//         <h2 class= "visitorTitle">Visitor Service </h2>
//         <details name="visitor">
//             <summary>Visitor Centers</summary>
//             <ul></ul>
//          </details>  
//         </div>
//     `
// }
// function setvisitor(info) {
//     const visitorElement = document.querySelector('.visitorcontent');
//     const visitorHtml = visitorTemplate(info);
//     visitorElement.innerHTML = visitorHtml;
// }

// setvisitor(visitorData);
// document.querySelector('details').addEventListener('toggle',setvisitor);


// function ActivitiesTemplate(info) {
//     return `
//         <div class="activitiescontent">
//         <h2 class= "activitiesTitle">Activities </h2>
//         <details>
//             <summary>All Acitivities</summary>
//             Something small enough to escape casual notice.
//         </details>
        
//         </div>
//     `
// }