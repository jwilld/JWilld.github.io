// get word input from user 
let wordSubmit = document.querySelector('.submit')
let wordForm = document.querySelector('.word-input')
wordSubmit.addEventListener('click',getInput)


//takes a user's input for desired word
let guessWord = null
function getInput(){
    let wordInput = document.querySelector('.text-input').value
    guessWord = Array.from(wordInput)
    wordForm.style.display='none'
    createUnderLines()
}

// creates elements based on whatever input the user gives for their term
// doesnt account for spaces
//displays it in a specficic area on the page(grid row/column) I used the css to accomplish this

let underLineContainer = document.querySelector('.under-line')
function createUnderLines(){
    guessWord.forEach( letter => {
        let hr = document.createElement('hr')
        underLineContainer.appendChild(hr)
    })
}

// allow the user to change the word
let newWord = document.querySelector('.new-word')

newWord.addEventListener('click',makeNewWord)

function makeNewWord(){
    // removes the hr items
    let hrList = document.querySelectorAll('.under-line hr')
    hrList.forEach( item => item.remove())
    wordForm.style.display = 'block'
}