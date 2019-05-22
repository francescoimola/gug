//Define list of emojis
let emoji = []
emoji = JSON.parse(JSON.stringify(EmojiListJson))
const emojiLenght = Object.keys(emoji).length

var emojiConv = new EmojiConvertor();

let nicknames = ["lad", "bloke", "man", "guy", "boy", "hung", "slut", "bitch", "whore", "angel", "brit", "slave", "daddy", "asian", "american", "bubble", "Honey", "otter", "dad", "twink", "bear", "hun", "chub", "jock", "chaser", "qween", "queen", "chef", "HUNGG", "babby", "babes", "artist", "mediterranean food"]
let adj = ["fuzzy", "hairy", "discret", "dirty", "clean", "adventurous", "caring", "shaven", "smooth", "thicc", "thick", "slim", "sugar", "filthy", "bored", "horny", "flexible", "skinny", "XL", "XXL", "little", "long", "jckd", "tall", "married", "sexy", "sex"]
let time = ["Today", "Tonight", "This eve", "This evening", "Meet later", "Right now", "now", "anytime", "best be quick", "When are we gonna see each other?"]
let topBottom = ["top", "tp", "4top", "bottom", "bttm", "4bttm"]
let hey = ["hey", "heya", "hello", "hi", "Yas", "hon", "hun", "hunny", "YESS", "yes", "yass"]
let locations = ["new to the area", "local", "right here", "just round the corner", "up the road", "down the high street"]
let accom = ["can accom", "can accomodate", "can't accom", "can't accomodate", "ACCOM", "NO ACCOM", "host", "at mine", "@ mine", "at yours", "@ yours", "no guests", "b my guest", "be my guest"]
let preMade = ["mouth 4 use", "HnH", "Head", "BDSM", "Maso", "Use me", "Masc", "masc4masc", "Femme", "Femm", "Pop me", "Huge", "Anyone", "Hi hun", "Honey", "Guy next door", "Boy next door", "looking to fuck", "looking to suck", "owned", "back rub", "cuddle", "cuddles", "fun", "looking", "2 suk u", "suk me", "unexpected", "marry", "sex me", "get me outta here", "add me", "take off your masc", "INTO you"]
let signs = ["!", "?", "!?", ">>", "()!()", "$", "$$", "@"]

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
myArray[0] = emojiConv.replace_unified(myFunction(emoji));
myArray[1] = myFunction(accom)
myArray[2] = myFunction(nicknames)
myArray[3] = myFunction(adj)
myArray[4] = myFunction(time)
myArray[5] = myFunction(topBottom)
myArray[6] = myFunction(hey)
myArray[7] = myFunction(signs)
myArray[8] = myFunction(locations)
myArray[9] = myFunction(preMade)

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

var printThis = ""

//Logic
function hello(a) {
   checkArray(a)
   var random_boolean = Math.random() > 0.5;
   var val1 = a[Math.floor(Math.random() * Math.floor(a.length))] + " " + a[0]
   var val2 = a[Math.floor(Math.random() * Math.floor(a.length))] + " " + a[Math.floor(Math.random() * Math.floor(a.length))] + " " + a[0]
   if (random_boolean && val1 !== undefined) {
      checkArray(val1)
      return printThis = val1.replace(/undefined/g, "hey")
   } else if (random_boolean !== true && val2 !== undefined) {
      checkArray(val2)
      return printThis = val2.replace(/undefined/g, "hello")
   } else {
      hello(a)
   }
}

hello(myArray)

//Display output on page

if (hello) {
   document.getElementById("scriptOutput").innerHTML = printThis;
   setTimeout(function () {
      window.location.reload(1);
   }, 2010);
}
