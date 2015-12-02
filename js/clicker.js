'use strict';

var NUM_CATS = 7;
var body = document.getElementsByTagName("body")[0];
var docFrag = document.createDocumentFragment();
var catNames = [
  "Reginald",
  "Charles",
  "Jameson",
  "Rupert",
  "McGibbles",
  "Sprinkles",
  "Harvey",
  "Clarence",
  "Oswald",
  "Florence",
  "Katerine",
  "Arthur",
  "Ernest",
  "Lillian",
  "Ethel",
  "Gertrude",
  "Mildred",
  "Eugene",
  "Lawrence"
]

function catName() {
  var nameIndex = Math.floor(Math.random() * catNames.length);
  return catNames.splice(nameIndex,1);
}

function createCat() {

  var cat = document.createElement("div");
  cat.className = "cat";
  cat.clicks = 0;
  var name = document.createElement("p");
  cat.appendChild(name);
  name.innerHTML = catName();
  var image = document.createElement("img");
  image.setAttribute("src","http://placekitten.com/250/300");
  var counter = document.createElement("p");
  var text = document.createTextNode("Number of Clicks: " + cat.clicks);
  counter.appendChild(text);
  cat.appendChild(image);
  cat.appendChild(counter);
  image.addEventListener("click",function(){
    cat.clicks++;
    counter.innerHTML = "Number of Clicks: " + cat.clicks;
  }, false);
  return cat;

}

function createCatEntry(cat) {
  var name = cat.firstChild.innerHTML;
  var kitty = document.createElement("p");
  kitty.innerHTML = name;
  kitty.addEventListener("click", (function(){
    var cats = document.getElementsByClassName("cat");
    for (var i = 0; i < cats.length; i++) {
      cats[i].style.display = "none";
    }
    cat.style.display = "";
    //toggle all others to 'none'
  }), false);
  return kitty;
}

var catList = document.createDocumentFragment();

for (var i = 0; i<NUM_CATS; i++) {
  var cat = createCat();
  docFrag.appendChild(cat);
  catList.appendChild(createCatEntry(cat));
  cat.style.display = "none";
};

body.appendChild(catList);
body.appendChild(docFrag);





// Har be dead code, maties!
// var counters = document.getElementsByTagName("p");
// console.log(counters);
// console.log(counters[0]);
// var clicks = [];
// for (var i = 0; i < NUM_CATS; i++) {
//   clicks.push(0);
// };

// for (var i = 0; i < NUM_CATS; i++) {
//   console.log("this is iteration " + i);
//   var click = clicks[i];
//   var counter = counters[i];
//   var image = images[i];
//   image.addEventListener("click", function(){
//     //do stuff with the click here
//     click++;
//     counter.innerHTML = "Number of Clicks: " + click;
//   }, false);
// };
//

// document.getElementsByTagName("img").addEventListener("click",function(){
//   clicks[]
//
// }, false)
