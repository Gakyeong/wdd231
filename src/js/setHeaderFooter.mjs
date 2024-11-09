
function parkInfoTemplate(info) {
    return `
    <img src=${info.images[0].url} alt="" />
            <div class="hero-banner__content">
            <a href="#" class="hero-banner__title">${info.name}</a>
            <p class="hero-banner__subtitle">
                <span>${info.designation}</span></br>
                <span>${info.states}</span>
            </p>`;
  }


function setHeaderInfo(data) {
    const getTitle = document.querySelector("title");
    getTitle.innerHTML = data.fullName;

    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
        
    const parkElement = document.querySelector('.hero-banner');
    const parkHtml = parkInfoTemplate(data);
    parkElement.innerHTML = parkHtml;
  }

function getMailingAddress(addresses) {
const mailing = addresses.find((address) => address.type === "Mailing");
return mailing;
}

function getVoicePhone(phoneNumbers) {
    const voice = phoneNumbers.find((phoneNumber) => phoneNumber.type === "Voice");
    return voice.phoneNumber;
}

function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);

    return ` 
    <section class= 'contact'>
        <h3> CONTACT INFO </h3>
        <h4 class= "contactinfo">Mailing Address: </h4>
        <div>
        <p> ${mailing.line1} </p>
        <p> ${mailing.city}, ${mailing.stateCode} ${mailing.postalCode} </p>
        </div>
        <h4 class= "contactinfo">Phone: </h4>
        <p> ${voice} </p>
    </section>`
}

function setfooterInfo(data){
    const footerElement = document.querySelector('#park-footer');
    const footerHtml = footerTemplate(data);
    footerElement.innerHTML = footerHtml;
}

export {setHeaderInfo, setfooterInfo};