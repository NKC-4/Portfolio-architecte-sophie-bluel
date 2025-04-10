async function getworks() {
    const url = "http://localhost:5678/api/works";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);

      for(i=0; i<json.length; i++){
        setfigure(json)
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  
getworks()

const pictures__container = document.querySelector(".gallery")

function setfigure (data){
    const figure = document.createElement('figure')
    figure.innerHTML = `

    <img src= ${data[i].imageUrl} alt=${data[i].title}>
				<figcaption>${data[i].title}</figcaption>
    `
    pictures__container.appendChild(figure)
}

const projets__container = document.querySelector(".projets__lists")

async function getcategories() {
  const url = "http://localhost:5678/api/categories";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

    for(i=0; i<json.length; i++){
      getcategorie(json)
    }
  } catch (error) {
    console.error(error.message);
  }
}

getcategories()

function getcategorie (data){
    const categorie = document.createElement('li')
   categorie.innerHTML = `
   <a href="#" id ="${data[i].id}" class="projet__link">${data[i].name}</a>
    `
    categorie.classList.add("projet")
    projets__container.appendChild(categorie)
}


/*Je dois coder en sorte que si l'user appe sur un élément de la catégorie, les objets qui font partit du group doivent être filtré*/