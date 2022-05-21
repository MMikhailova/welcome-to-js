"use strict";
let letters='a.b.c.d'
let index=0;
while(index<letters.length){
  letters=letters.replaceAll(".","");
  console.log(letters[index]);
  index=index+1;
}
