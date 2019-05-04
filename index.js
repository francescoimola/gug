data-gramm="false"

//Define list of emojis
let emoji = []
emoji = JSON.parse(JSON.stringify(EmojiListJson))
const emojiLenght = Object.keys(emoji).length

let nicknames = ["lad", "bloke", "man", "guy", "boy", "hung", "slut", "bitch", "whore", "angel", "brit", "slave", "daddy", "asian", "american", "bubble", "Honey", "otter", "dad", "twink", "bear", "hun", "chub", "jock", "chaser"]
let adj = ["fuzzy", "hairy", "discret", "dirty", "clean", "adventurous", "caring", "shaven", "smooth", "thicc", "thick", "slim", "sugar", "filthy", "bored", "horny", "flexible"]
let time = ["TODAY", "TONIGHT", "THIS EVENING", "Meet later", "Right now"]
let topBottom = ["top", "tp", "4top", "bottom", "bttm", "4bttm"]
let hey = ["hey", "heya", "hello", "hi", "Yas"]
let initials = ["G", "F", "T", "M", "H"]
let locations = ["New to the area", "local"]
let accom = ["can accom", "can accomodate", "cant accom", "cant accomodate", "ACCOM", "NO ACCOM"]
let preMade = ["mouth 4 use", "HnH", "Head", "BDSM", "Maso", "Use me", "Masc", "masc4masc", "Femme", "Femm", "Pop me", "Huge", "Anyone", "Hi hun", "Honey", "Guy next door", "Boy next door"]
let signs = ["!", "?"]

//Divide Emojis for Category
// const smileysEmotion = emoji.slice(0, 150)
// const peopleBodies = emoji.slice(150, 461)
// const animalsNature = emoji.slice(465, 592)
// const foodDrink = emoji.slice(592, 713)
// const travelPlaces = emoji.slice(713, 922)
// const activities = emoji.slice(922, 1002)
// const objects = emoji.slice(1002, 1235)
// const symbols = emoji.slice(1235, 1452)
// const flags = emoji.slice(1452, 1720)


function myFunction(a) {

   function randomFromArray(b) {
      var b = Object.keys(b).length
      if (b !== undefined && b < 9007199254740992) {
         return Math.floor(Math.random() * b)
      }
   }

   function makeRandom(i) {
      if (i != undefined) {
         return i[randomFromArray(i)]
      }
   }

   if (a == emoji && a !== undefined) {
      result = a[randomFromArray(a)].char
      if (result == undefined) {
         a[randomFromArray(a)].char
      } else {
         return result
      }
   } else if (a !== undefined) {
      result = makeRandom(a)
      if (result == undefined) {
         makeRandom(a)
      } else {
         return result
      }
   } else {
      console.log('Value in undefined')
   }
}

//Create matrix array
let myArray = []
myArray[0] = myFunction(emoji)
myArray[1] = myFunction(accom)
myArray[3] = myFunction(nicknames)
myArray[5] = myFunction(adj)
myArray[6] = myFunction(time)
myArray[7] = myFunction(topBottom)
myArray[8] = myFunction(hey)
myArray[9] = myFunction(initials)
myArray[10] = myFunction(locations)

//Remove undefined values
for (i = 0; i <= myArray.Lenght; i++){
   function removeEmpty(obj) {
      Object.keys(obj).forEach(function(key) {
        (obj[key] && typeof obj[key] === 'object') && removeEmpty(obj[key]) ||
        (obj[key] === undefined || obj[key] === null) && delete obj[key]
      });
      return obj;
   }
   removeEmpty(myArray[i])
   if (myArray[i] == undefined) {
      removeEmpty(myArray[i])
   }
}


console.log(myArray[0] + " " + myArray[6])

//Display output on page
// document.getElementById("scriptOutput").innerHTML = something