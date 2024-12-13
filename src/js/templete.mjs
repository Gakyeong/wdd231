function introTemplate(info) {
  return `
    <h1 class ="introtitle">${info.fullName} </h1>
    <p class ="introdescript">${info.description} </p>
`;
}

function mediaCardTemplate(info) {
  return `
        <div class="infocontent">
        <a href= ${info.link}>
        <img src=${info.image} alt="parkCode${info.name}" />
        </a>
        <a href= ${info.link}> 
            <h2 class= infoTitle> ${info.name} </h2>
        </a>
        <p class= infodescript>${info.description} </p>
        </div>
    `;
}

export function listTemplate(data, contentTemplate) {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

export function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}

export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}

export function vcTitleTemplate(text) {
  return `${iconTemplate("ranger-station")} ${text}`;
}

export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
  return `<details name="vc-details" id="${elementId}">
          <summary>
            ${iconTemplate(iconId)}
            ${summaryText}
          </summary>
          ${content}
        </details>`;
}
export function iconTemplate(iconId) {
  return `<svg class="icon" role="presentation" focusable="false">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/images/sprite.symbol.svg#${iconId}"
            ></use>
          </svg>`;
}

export function vcInfoTemplate(data) {
  const image = data.images[0];
  return `<figure>
          <img src="${image.url}" alt="${image.altText}" />
          <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
        </figure>
        <p>${data.description}</p>`;
}

function vcAddressTemplate(data) {
  return `<section>
            <h3>${data.type} Address</h3>
            <address>
              ${data.line1}<br />
              ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>
          </section>`;
}

export function vcAddressesListTemplate(data) {
  const physical = data.find((address) => address.type === "Physical");
  const mailing = data.find((address) => address.type === "Mailing");

  let html = vcAddressTemplate(physical);
  if (mailing) {
    html += vcAddressTemplate(mailing);
  }
  return html;
}

export function vcDirectionsTemplate(data) {
  return `<p>${data}</p>`;
}
export function vcContactsTemplate(data) {
  return `<section class="vc-contact__email">
            <h3>Email Address</h3>
            <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
          </section>
          <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
          </section>`;
}

export { introTemplate, mediaCardTemplate };
