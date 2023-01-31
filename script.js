import { dragAndDrop,  photoURL, childimge } from './module/js.js'
import { render } from './module/generateurElement.js';
import { searchError } from './module/gestionErreur.js'
// import { catureImage } from './module/capture.js'

const form = document.querySelector('form')
const tab = []
let isModifying = false;
let modifyIndex = -1

form.addEventListener('submit', event => {
    event.preventDefault()
    const obj_contact = Object.fromEntries(new FormData(form))
    obj_contact.photo = photoURL
    if(!isModifying){
    tab.push(obj_contact)
    let span = 'mec'
    form.elements.prenom.nextSibling.innerHTML = span

    // document.querySelector(".image").value = ''
    }else{tab[modifyIndex] = obj_contact;modifyIndex = -1;isModifying = false}
     render(tab,modifyIndex,isModifying,form)
})
dragAndDrop(document.querySelector('.image'), document.querySelector('#file'))
searchError(form,document.querySelector('template'))
// catureImage(document.querySelector('.image'),document.querySelector('.bouttons'))

