var myString = 'I\'m a "fun ninja" string';

if (myString.indexOf("ninja") === -1) {
    console.log("the word ninja is not in the string");
} else {
    console.log("the word ninja starts at position " + myString.indexOf("ninja"));
}

var string1 = "Abc"; 
var string2 = "Bcd"; 

console.log(string1.toLowerCase() === string2.toLowerCase());

console.log(string1 < string2);