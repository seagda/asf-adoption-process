

export default {getTeam() {
  console.log("hello")
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
    resolve([
      {
        "id": 1,
        "name": "SpongeBob",
        "image": "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
        "role": "Fry Cook",
        "city": "A Pineapple Under the Sea",
        "email": "dogs12@gmail.com"
      },
      {
        "id": 2,
        "name": "Mr. Krabs",
        "image": "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
        "role": "Restaurant Owner",
        "city": "A Giant Anchor",
        "email": "dogs12@gmail.com"
      },
      {
        "id": 3,
        "name": "Squidward",
        "image": "https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",
        "role": "Cashier",
        "city": "An Easter Island Head",
        "email": "dogs12@gmail.com"
      },
      {
        "id": 4,
        "name": "Dexter",
        "image": "https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",
        "role": "Boy Genius",
        "city": "A Secret Laboratory",
        "email": "dogs12@gmail.com"
      },
      {
        "id": 5,
        "name": "Courage",
        "image": "https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",
        "role": "A Cowardly Dog",
        "city": "Nowhere, Kansas",
        "email": "dogs12@gmail.com"
      },
      {
        "id": 6,
        "name": "Bugs Bunny",
        "image": "https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",
        "role": "Looney Toon",
        "city": "A Rabbit Burrow",
        "email": "dogs12@gmail.com"
      }
  ])},100)
  })
  
}}
