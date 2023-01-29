export let photoURL;
export let childimge;

export function dragAndDrop(contenaire, inputElement) {
  contenaire.addEventListener('dragover', event => {
    event.preventDefault()
    contenaire.classList.add('active')
  })

  contenaire.addEventListener('dragleave', () => {
    contenaire.classList.remove('active')
  })

  contenaire.addEventListener('drop', event => {
    event.preventDefault()
    let file = event.dataTransfer.files[0]
    traitement(file)
  })

  inputElement.addEventListener("change", (e) => {
    let file = e.target.files[0]
    traitement(file)
  })

 function traitement(file) {
  if (file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024 ) {
    let reader = new FileReader()

    contenaire.innerHTML = '' 

    reader.addEventListener("load", () => {
      let imageURL = reader.result;
      photoURL = imageURL
      let img = document.createElement("img")
      childimge = img
      img.classList.add('imgTag')
      img.src = imageURL
      img.alt = "Dropped Image"
      contenaire.appendChild(img)
    })

    reader.readAsDataURL(file)
  } else {
    // const span = document.createElement('span')
     let span = "Seulement les images sont acceptées avec une taille maximale de 5 Mo."
   contenaire.nextElementSibling.innerHTML = span

   
  }
}

}
