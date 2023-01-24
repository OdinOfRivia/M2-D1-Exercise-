/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)

*/
const characters = document.querySelector("p")
characters.innerHTML=characters.innerText
.split(' ')
.map(word => word.length >8 ? `<span style="background-color: yellow"> ${word}</span>"` :word)
.join(' ');


/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const link = document.querySelector("a")
link.innerText = 'Text something something';
document.body.appendChild(link);



/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/


// :{


/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const count = paragraph.innerHTML.split(' ').length;

// :{

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

// :{