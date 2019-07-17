// get word input from user 
let wordSubmit = document.querySelector('.submit')
let wordForm = document.querySelector('.word-input')
wordSubmit.addEventListener('click',getInput)


//take a user inpiut for desired word
let guessWord = null
function getInput(){
    let wordInput = document.querySelector('.text-input').value
    guessWord = Array.from(wordInput)
    wordForm.style.display='none'
    createSpaces()
}

// create elements based on whatever input the user gives for their term
// need to account for spaces
let layoutGrid = document.querySelector('.spaces')
function createSpaces(){
    guessWord.forEach( letter => {
        let hr = document.createElement('hr')
        layoutGrid.appendChild(hr)
    })
}


//display it in a specficic area on the page(grid row/column)

