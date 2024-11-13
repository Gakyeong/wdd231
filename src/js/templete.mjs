import {getmediacardList} from "./main.js"

function introTemplate(info){
return `
    <h1 class ="introtitle">${info.fullName} </h1>
    <p class ="introdescript">${info.description} </p>
`
}

function mediaCardTemplate(info) {
    return `
        <div class="infocontent">
        <a href= ${info.link}>
        <img src=${getmediacardList(info.image)} alt="${info.name}" />
        </a>
        <a href= ${info.link}> 
            <h2 class= infoTitle> ${info.name} </h2>
        </a>
        <p class= infodescript>${info.description} </p>
        </div>
    `
}



export {introTemplate, mediaCardTemplate};