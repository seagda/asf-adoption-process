

export default {getAlerts() {
 
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
    resolve([
      {
        "id": 1,
        "name": "Complete behvioral assessment",
        "image": "https://www.town.winthrop.ma.us/sites/g/files/vyhlif4061/f/styles/news_image/public/pages/alert.png?itok=E3AWz5Wm",
        "dueDate": "06/23/21",
        "dogId": 2,
        "dogName": "Bruce"
      },
      {
        "id": 2,
        "name": "Complete behvioral assessment",
        "image": "https://www.town.winthrop.ma.us/sites/g/files/vyhlif4061/f/styles/news_image/public/pages/alert.png?itok=E3AWz5Wm",
        "dueDate": "7/23/21",
        "dogId": 16,
        "dogName": "Cody"
      },
      {
        "id": 3,
        "name": "Meet and greet potential adopter",
        "image": "https://www.town.winthrop.ma.us/sites/g/files/vyhlif4061/f/styles/news_image/public/pages/alert.png?itok=E3AWz5Wm",
        "dueDate": "08/23/21",
        "dogId": 7,
        "dogName": "Shela"
      },
      {
        "id": 4,
        "name": "Complete medical assessment",
        "image": "https://www.town.winthrop.ma.us/sites/g/files/vyhlif4061/f/styles/news_image/public/pages/alert.png?itok=E3AWz5Wm",
        "dueDate": "06/10/21",
        "dogId": 2,
        "dogName": "Doggo"
      }
  ])},100)
  })
  
}}
