export function render(tab) {
    const panels = tab.map((element, index) => `
        <div class="element flex gapsmall margin flex_ai brdr">
            <div class="img">
                <img src="/ressources/portrait5.jpg" alt="portrait5" class="imgRaduis" />
            </div>
            <div class="contenue flex flex_dc gapsmall">
                <p>${element.prenom} ${element.nom} - ${element.groupe}</p>
                <p>${element.telephone}</p>
                <p>What is Lorsimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
            </div>
            <div class="icon flex">
                <button class="modifie flex bg_fff" onclick= modifyElement(${index})><i class="fa-solid fa-user-pen bg_brown"></i></button>
                <button class="deleteMe flex bg_fff bg_fff" onclick="deleteElement(${index})"><i class="fa-regular fa-trash-can bgc_red"></i></button>
            </div>
        </div>
    `).join('')
    document.querySelector('li').innerHTML = panels
}
window.deleteElement = function (index) {tab.splice(index, 1);render()}
function modifyElement(index) {modifyIndex = index;isModifying = true
    for(const field in tab[modifyIndex])form[field].value = tab[modifyIndex][field]}

