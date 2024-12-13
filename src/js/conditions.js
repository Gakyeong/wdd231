import {
  setHeaderInfo,
  setfooterInfo,
  enableNavigation,
} from "./setHeaderFooter.mjs";
import {
  getParkData,
  getAlertData,
  getVisitorCenterData,
} from "./parkService.mjs";
import spritePath from "../images/sprite.symbol.svg";

async function getData() {
  const parkData = await getParkData();
  const AlertData = await getAlertData();
  const visitorData = await getVisitorCenterData();
  // console.log(visitorData);

  setHeaderInfo(parkData);
  setfooterInfo(parkData);
  setAlertinfo(AlertData);

  enableNavigation();

  function getAlertCategory(category) {
    let alerttype = "";

    if (category === "Park Closure") {
      alerttype = "closure";
    } else {
      alerttype = category.toLowerCase();
    }
    return alerttype;
  }

  function alertsTemplate(alert) {
    return `
        <li class="alert">
            <svg class="icon" focusable="false" aria-hidden="true"><use xlink:href="${spritePath}#alert-${getAlertCategory(
      alert.category
    )}"></use></svg>
            <div>
                <h3>${alert.title}</h3> 
                <p>${alert.description}</p>
            </div>
        </li>
    `;
  }

  function setAlertinfo(alertinfolist) {
    const alertElement = document.querySelector(".alertscontent > ul");
    if (alertElement) {
      const alertHtml = alertinfolist.map(alertsTemplate).join("");
      alertElement.innerHTML = alertHtml;
    } else {
      console.log("no alertelement");
    }
  }

  function visitorTemplate(info) {
    return `
        <div class="center">
            <h3>${info.name} </h3>
            <h4><a href="visitor-center.html?id=${info.parkCode}">${info.name}</a></h4>
            <p class="visitordescritp">${info.description}</p>
            <p class="visitordirect">${info.directionsInfo}</p>    
        </div>
    `;
  }
  function setvisitor(event) {
    if (event.target.open) {
      const visitorElement = document.querySelector(
        '.visitorcontent > details[name="visitor"] > ul'
      );
      if (visitorElement) {
        const visitorHtml = visitorData.map(visitorTemplate).join("");
        visitorElement.innerHTML = visitorHtml;
      } else {
        console.log("No visitorElement found");
      }
    }
  }

  document
    .querySelector('details[name="visitor"]')
    .addEventListener("toggle", setvisitor);

  function ActivitiesTemplate(info) {
    return `
        <li>${info.name}</li>
    `;
  }
  function setActivity(event) {
    if (event.target.open) {
      const activityElement = document.querySelector(
        '.activitiescontent > details[name="activity"] > ul'
      );
      if (activityElement) {
        const activityHtml = parkData.activities
          .map(ActivitiesTemplate)
          .join("");
        activityElement.innerHTML = activityHtml;
      } else {
        console.log("No activityElement found");
      }
    }
  }

  document
    .querySelector('details[name="activity"]')
    .addEventListener("toggle", setActivity);
}
getData();
