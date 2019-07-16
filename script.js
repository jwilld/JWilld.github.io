// the start page will have the word hangman center displayed
// on click it will prompt the user for their desired word
// the text will be hidden and when enter is pressed, the game starts
let hangman = document.querySelector('.title h1')

hangman.addEventListener('click',moveTitle)

function moveTitle(){
    let divClass = document.querySelector('.title')
    divClass.removeAttribute('class')
    divClass.classList.add('title-two')
}


//take a user inpiut for desired word



// create elements based on whatever input the user gives for their term
//display it in a specficic area on the page(grid row/column)

