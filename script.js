import { dragAndDrop,  photoURL, childimge } from './js.js'
import { render } from './module/generateurElement.js'

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

// function render() {
//     const panels = tab.map((element, index) => `
//         <div class="element flex gapsmall margin flex_ai brdr">
//             <div class="img">
//                 <img src="${element.photo} " alt="tu as oubelié l'image profile" class="imgRaduis" />
//             </div>
//             <div class="contenue flex flex_dc gapsmall">
//                 <p>${element.prenom} ${element.nom} - ${element.groupe}</p>
//                 <p>${element.telephone}</p>
//                 <p>
//                     What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                 </p>
//             </div>
//             <div class="icon flex">
//                 <button class="modifie flex bg_fff" onclick= "modifyElement(${index} )">
//                     <i class="fa-solid fa-user-pen bg_brown"></i>
//                 </button>
//                 <button class="deleteMe flex bg_fff bg_fff" onclick="deleteElement(${index})">
//                     <i class="fa-regular fa-trash-can bgc_red"></i>
//                 </button>
//             </div>
//         </div>
//     `).join('')
//     document.querySelector('li').innerHTML = panels
// }

// window.deleteElement = function (index) {
//     tab.splice(index, 1)
//     render()
// }

// window.modifyElement = function (index) {
//     modifyIndex = index;
//     isModifying = true
//     for(const field in tab[modifyIndex])form[field].value = tab[modifyIndex][field]}
