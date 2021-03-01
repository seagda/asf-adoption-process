

export default {getDogs() {

  return new Promise( (resolve, reject) => {
    setTimeout( () => {
    resolve([
      {
        "id": 1,
        "name": "Bruce",
        "image": "https://place-puppy.com/300x300",
        "dossierLink": "link",
        "assessmentLink": "link"
      },
      {
        "id": 2,
        "name": "Sweet Dog",
        "image": "https://dog.ceo/api/breeds/image/random",
        "dossierLink": "/dogView",
        "assessmentLink": "/dogEdit"
      },
      {
        "id": 3,
        "name": "Cody",
        "image": "https://dog.ceo/api/breeds/image/random",
        "dossierLink": "link",
        "assessmentLink": "link"
      },
      {
        "id": 4,
        "name": "Dexter",
        "image": "https://dog.ceo/api/breeds/image/random",
        "dossierLink": "link",
        "assessmentLink": "link"
      },
      {
        "id": 5,
        "name": "Courage",
        "image": "https://dog.ceo/api/breeds/image/random",
        "dossierLink": "link",
        "assessmentLink": "link"
      },
      {
        "id": 6,
        "name": "Doug Funnie",
        "image": "https://dog.ceo/api/breeds/image/random",
        "dossierLink": "link",
        "assessmentLink": "link"
      }
  ])},100)
  })
  
}}
