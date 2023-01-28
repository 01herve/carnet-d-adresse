import { render } from "./module/generateurElement.js";

const form = document.querySelector('form')
const tab = []
let isModifying = false;
let modifyIndex = -1

form.addEventListener('submit', event => {
    event.preventDefault()
    const obj_contact = Object.fromEntries(new FormData(form))
    if(!isModifying){
    tab.push(obj_contact)
    }else{tab[modifyIndex] = obj_contact;modifyIndex = -1;isModifying = false}
     render(tab)
})



