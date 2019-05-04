//Define list of emojis
let emoji = []
emoji = JSON.parse(JSON.stringify(EmojiListJson))
const emojiLenght = Object.keys(emoji).length

let nicknames = ["lad", "bloke", "man", "guy", "boy", "hung", "slut", "bitch", "whore", "angel", "brit", "slave", "daddy", "asian", "american", "bubble", "Honey", "otter", "dad", "twink", "bear", "hun", "chub", "jock", "chaser", "qween", "queen"]
let adj = ["fuzzy", "hairy", "discret", "dirty", "clean", "adventurous", "caring", "shaven", "smooth", "thicc", "thick", "slim", "sugar", "filthy", "bored", "horny", "flexible", "skinny"]
let time = ["TODAY", "TONIGHT", "THIS EVENING", "Meet later", "Right now"]
let topBottom = ["top", "tp", "4top", "bottom", "bttm", "4bttm"]
let hey = ["hey", "heya", "hello", "hi", "Yas"]
let initials = ["G", "F", "T", "M", "H"]
let locations = ["new to the area", "local"]
let accom = ["can accom", "can accomodate", "cant accom", "cant accomodate", "ACCOM", "NO ACCOM"]
let preMade = ["mouth 4 use", "HnH", "Head", "BDSM", "Maso", "Use me", "Masc", "masc4masc", "Femme", "Femm", "Pop me", "Huge", "Anyone", "Hi hun", "Honey", "Guy next door", "Boy next door"]
let signs = ["!", "?"]

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
myArray[4] = myFunction(adj)
myArray[5] = myFunction(time)
myArray[6] = myFunction(topBottom)
myArray[7] = myFunction(hey)
myArray[8] = myFunction(initials)
myArray[9] = myFunction(locations)
myArray[10] = myFunction(preMade)
myArray[11] = myFunction(signs)

//Remove undefined values
function removeEmpty(obj) {
      Object.keys(obj).forEach(function (key) {
         (obj[key] && typeof obj[key] === 'object') && removeEmpty(obj[key]) ||
            (obj[key] === undefined || obj[key] === null) && delete obj[key]
      });
      return obj;
}

function checkArray(a) {
   for (i = 0; i <= a.lenght; i++) {
      removeEmpty(a[i])
      if (a[i] == undefined) {
         removeEmpty(a[i])
      }
   } 
}

checkArray(myArray)

var printThis = "Hello World"

//Logic
function hello(a) {
   var random_boolean = Math.random() >= 0.5;
   var val1 = a[Math.floor(Math.random() * Math.floor(a.length))]
   var val2 = a[Math.floor(Math.random() * Math.floor(a.length))] + " " + a[Math.floor(Math.random() * Math.floor(a.length))]
   if (random_boolean && val1 !== undefined) {
      checkArray(val1)
      return printThis = val1
   } else if (random_boolean !== true && val2 !== undefined) {
      checkArray(val2)
      return printThis = val2
   }
}

console.log(hello(myArray))

//Display output on page

if (hello) {
   var msg = printThis.replace(/undefined/g, "");
   document.getElementById("scriptOutput").innerHTML = msg
}