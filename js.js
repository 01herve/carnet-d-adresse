export function render() {
  const panel = document.createElement('div');
  panel.classList.add('[element]', 'flex', 'gapsmall', 'margin', 'flex_ai', 'brdr');

  for (const element of tab) {
    const img = document.createElement('img');
    img.src = '/ressources/portrait5.jpg';
    img.alt = 'portrait5';
    img.classList.add('imgRaduis');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img');
    imgContainer.appendChild(img);

    const name = document.createElement('p');
    name.textContent = `${element.prenom} ${element.nom} - ${element.groupe}`;

    const phone = document.createElement('p');
    phone.textContent = element.telephone;

    const dummyText = document.createElement('p');
    dummyText.textContent =
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

    const contenue = document.createElement('div');
    contenue.classList.add('contenue', 'flex', 'flex_dc', 'gapsmall');
    contenue.append(name, phone, dummyText);

    const modifyBtn = document.createElement('button');
    modifyBtn.classList.add('modifie', 'flex', 'bg_fff');
    modifyBtn.innerHTML = '<i class="fa-solid fa-user-pen bg_brown"></i>';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteMe', 'flex', 'bg_fff', 'bg_fff');
    deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can bgc_red"></i>';
    deleteBtn.addEventListener("click", () => deleteElement(tab.indexOf(element)));

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon', 'flex');
    iconContainer.append(modifyBtn, deleteBtn);

    panel.append(imgContainer, contenue, iconContainer);
  }
  document.querySelector('li').appendChild(panel);
}

