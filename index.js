var arrayTruth = [
  "What is a secret thing you do that you haven't told anyone?",
  "What is the deepest crush you've ever had, and just HOW deep?",
  "What is something that you are currently hiding from your parents?",
  "What are you secretly obsessed with?",
  "Choose one person in the room in which you marry... simply because you love them",

]

  var arrayDare = [
    "Show everyone a picture of your crush",
    "Show everyone an embarassing selfie of yourself",
    "Dance to Low",
    "Do the worm",
    "Sing any Disney song of your choice, the whole chorus",
  ]


 var truthButton = $('.truthbutton');
 truthButton.on('click', showTruth);
 var truthContainer = $('.truthcontainer')

 function showTruth() {

   truthContainer.text(arrayTruth[2]);
   truthContainer.append(`<h2>${arrayTruth[3]}</h2>`);

 }

var submit = $('.submit');

var secretContainer = $('.secretContainer');
var secretCode = $('.secretPasscode');
submit.on('click', checkCode);


function checkCode() {




  console.log(secretCode);
  if (secretCode.val() === "tech, sis"){

    secretContainer.append(`you have cracked the code!`);
    secretContainer.append(`<img src = "https://thumbs.gfycat.com/GreenAbsoluteBeagle-small.gif">`);
    secretContainer.append(`<img src = "https://thumbs.gfycat.com/GreenAbsoluteBeagle-small.gif">`);
    secretContainer.append(`<img src = "https://thumbs.gfycat.com/GreenAbsoluteBeagle-small.gif">`);
    secretContainer.append(`<img src = "https://thumbs.gfycat.com/GreenAbsoluteBeagle-small.gif">`);
    secretContainer.append(`<img src = "https://thumbs.gfycat.com/GreenAbsoluteBeagle-small.gif">`);
    secretContainer.append(`<img src = "https://thumbs.gfycat.com/GreenAbsoluteBeagle-small.gif">`);
    secretContainer.append(`<img src = "https://thumbs.gfycat.com/GreenAbsoluteBeagle-small.gif">`);
    secretContainer.append(`<img src = "https://thumbs.gfycat.com/GreenAbsoluteBeagle-small.gif">`);
    secretContainer.append(`<img src = "https://thumbs.gfycat.com/GreenAbsoluteBeagle-small.gif">`);
    secretContainer.append(`<img src = "https://thumbs.gfycat.com/GreenAbsoluteBeagle-small.gif">`);
    secretContainer.append(`<img src = "https://thumbs.gfycat.com/GreenAbsoluteBeagle-small.gif">`);



  }

else{
  secretContainer.append(`run away! computer will blow in 10!`)
  secretContainer.append(`<img src = "https://media3.giphy.com/media/XhjIRXAApI5jy/giphy.gif">`)
  secretContainer.append(`<img src = "https://media0.giphy.com/media/qIFJYOOi09bk4/giphy.gif?cid=790b76115d3b48f47965416d67a600b8&rid=giphy.gif">`)

}

}







 var dareButton = $('.darebutton');
 dareButton.on('click', showDare);
 var dareContainer = $('.darecontainer');

 function showDare() {
   console.log("Hello");
   dareContainer.text(arrayDare[4]);
   dareContainer.append(`<img src = "https://i.ytimg.com/vi/1SWqwG2HwkI/hqdefault.jpg">`);
 }
