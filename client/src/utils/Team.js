

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
        "name": "Doug Funnie",
        "image": "https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",
        "role": "Student",
        "city": "Bluffington",
        "email": "dogs12@gmail.com"
      },
      {
        "id": 7,
        "name": "Bugs Bunny",
        "image": "https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",
        "role": "Looney Toon",
        "city": "A Rabbit Burrow",
        "email": "dogs12@gmail.com"
      },
      {
        "id": 8,
        "name": "Johnny Bravo",
        "image": "http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",
        "role": "Ladies Man",
        "city": "Aron City",
        "email": "dogs12@gmail.com"
      },
      {
        "id": 9,
        "name": "Tommy Pickles",
        "image": "https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",
        "role": "Adventurer",
        "city": "California",
        "email": "dogs12@gmail.com"
      },
      {
        "id": 10,
        "name": "Rocko",
        "image": "http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",
        "role": "Cashier",
        "city": "O-Town, California",
        "email": "dogs12@gmail.com"
      }
  ])},100)
  })
  
}}
