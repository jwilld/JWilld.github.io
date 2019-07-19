// get word input from user 
let wordSubmit = document.querySelector('.submit')
let wordForm = document.querySelector('.word-input')
let layOutGrid = document.querySelector('.layout-grid')
let hangManSprite = document.querySelector('.hangman-sprite')
hangManSprite.style.display= 'none'
wordSubmit.addEventListener('click',getInput)


//takes a user's input for desired word
let guessWord = null
function getInput(){
    let wordInput = document.querySelector('.text-input').value.toLowerCase()
    guessWord = Array.from(wordInput)
    wordForm.style.display='none'
    let hangmanGif = document.querySelector('.hangman-gif')
    hangmanGif.style.display = 'none'
    hangManSprite.style.display = 'block'

    createUnderLines()
    createGuessBox()
    createSubmit()
}

// creates elements based on whatever input the user gives for their term
// doesnt account for spaces
//displays it in a specficic area on the page(grid row/column) I used the css to accomplish this

let underLineContainer = document.querySelector('.under-line')
function createUnderLines() {
    guessWord.forEach(letter => {
        let letterContainer = document.createElement('div')
        let letterSpot = document.createElement('h4')
        let hr = document.createElement('hr')
        underLineContainer.appendChild(letterContainer)
        if(letter != " "){
            letterContainer.appendChild(letterSpot)
            letterSpot.textContent = '.'
        }
        if (letter === " ") {
            hr.classList.add('white-space')
        }
        letterContainer.appendChild(hr)
    })
    removeSpaces()
}
function removeSpaces() {
    for (i = 0; i < guessWord.length; i++) {
        if (guessWord[i] === " ") {
            guessWord.splice(i, 1)
        }
    }
}
// allow the user to change the word
let newWord = document.querySelector('.new-word')

newWord.addEventListener('click',makeNewWord)

function makeNewWord(){
    // resets all of the game
    position = 0
    animateScript()
    wrongCount =0,
    guessWord = null
    wrong.textContent = null
    try{
        let resultContainer = document.querySelector('.result-container')
        resultContainer.remove()
    }
    catch(e){
        console.log(e)
    }
    let letterContainers = document.querySelectorAll('.under-line div')
    letterContainers.forEach(container => container.remove())
    let guessLetters = document.querySelectorAll('.under-line h4')
    guessLetters.forEach( letter => letter.remove())
    try{
        let guessBox = document.querySelector('.guess-box')
        guessBox.remove()
        let guessSubmit = document.querySelector('.guess-submit')
        guessSubmit.remove()
    }
    catch(e){
        console.log(e)
    }
    let hrList = document.querySelectorAll('.under-line hr')
    hrList.forEach( item => item.remove())
    let hangmanGif = document.querySelector('.hangman-gif')
    wordForm.style.display = 'block'
    hangmanGif.style.display = 'block'
    hangManSprite.style.display = 'none'
    
}

// click the carret down hides the menu
// there needs to be a toggle to hide and show
let carretDown = document.querySelector('.fas')
let menuContainer = document.querySelector('.menu-container')
carretDown.addEventListener('click',hideMenu)
function hideMenu(){
    $(carretDown).toggleClass("fa-angle-down")
    $(menuContainer).fadeToggle('slow');
}
// get rid of guess container elements on win or loss function
function removeGuessSubmits(){
    guessChildren = guessContainer.childNodes
    for(let i=0; i!=guessChildren.length;){
        guessChildren[i].remove()
    }
}

let guessContainer = document.querySelector('.guess-container')
// create a guess box
function createGuessBox(){
    let guessBox = document.createElement('input');
    guessBox.classList.add('guess-box')
    guessBox.setAttribute('type','text')
    guessBox.setAttribute('maxlength','1')
    guessBox.addEventListener('keyup',function(e){
        if(e.keyCode === 13){
            guessBoxCheck()
        }
    })
    guessContainer.appendChild(guessBox)
}
//create submit button/ change the case to lower case 
//get input letter as user submits it
// set a limit to the characters that can be input 
function createSubmit(){
    let guessSubmit = document.createElement('input')
    guessSubmit.classList.add('guess-submit')
    guessSubmit.setAttribute('type','submit')
    guessSubmit.setAttribute('value','Guess')
    guessContainer.appendChild(guessSubmit)
    guessSubmit.addEventListener('click',guessBoxCheck)

}
//checks guess box 
function guessBoxCheck(){
    let guessBox = document.querySelector('.guess-box')
    checkLetter()
    wrongCheck()
    winCheck()
    guessBox.value = ''
}
//checks letters against guessWord
winOrLose = null
let wrong = document.querySelector('.wrong')
let wrongCount = 0
function checkLetter() {
    let guessLetter = document.querySelector('.guess-box').value.toLowerCase()
    let guessLetterInput = document.querySelectorAll('.under-line h4')
    if (guessWord.includes(guessLetter) === false) {
        wrongCount++
        wrong.textContent+=` ${guessLetter}`
        console.log('wrong')
        animateScript()
    } else {
        for (let i = 0; i <= guessLetterInput.length; i++) {
            if (guessWord[i] === guessLetter) {
                guessLetterInput[i].textContent = guessLetter
            }
        }
    }
}
function wrongCheck(){
    if(wrongCount === 6){
       winOrLose = 'LOST!'
       removeGuessSubmits()
       tryAgain()
    }
}
// make a try again feautre with the condition of win or lose displayed above
function tryAgain(){
    let makeResultContainer = document.createElement('div')
    layOutGrid.appendChild(makeResultContainer)
    makeResultContainer.classList.add('result-container')
    let resultContainer = document.querySelector('.result-container')
    let playAgain = document.createElement('p')
    playAgain.classList.add('play-again')
    playAgain.textContent = 'PLAY AGAIN'
    let gameResult = document.createElement('h1')
    gameResult.classList.add('game-result')
    gameResult.textContent = `PLAYER ${winOrLose}`
    resultContainer.append(gameResult,playAgain)
    playAgain.addEventListener('click',makeNewWord)
}

// add player name entry
// check for winning condition 

function winCheck() {
    let currentChars = []
    let guessLetterInput = document.querySelectorAll('.under-line h4')
    guessLetterInput.forEach(letter => currentChars.push(letter.textContent))
    if(guessWord != null){
        if (currentChars.join() === guessWord.join()) {
            console.log('winner!')
            winOrLose = 'WON!'
            removeGuessSubmits()
            tryAgain()
        }
    }
}

//animation consequence
let position = 250
function animateScript(){
    let hangmanSprite = document.querySelector('.hangman-sprite')
    hangmanSprite.style.backgroundPosition = `-${position}px 0px`
    return position+= 250
}

// add event listener to how to play 
let box = document.querySelector('.box')
let howTo = document.querySelector('.how-to-play')
let boxText = document.querySelector('.text')
let boxContent = document.querySelector('.content')
howTo.addEventListener('click',function(){
    box.style.display = 'block '
    boxText.textContent ='Choose a word for the someone to guess. The person guessing has to guess the word letter by letter. If they guess six incorrect letters then they lose.'
    
})
//add event listener to box close
let closeBox = document.querySelector('.fa-times')
closeBox.addEventListener('click',exit)
function exit(){
    box.style.display = 'none'
}

// let playerName = document.querySelector('.player-name')
// playerName.addEventListener('click',function(){
//     box.style.display = 'block'
//     box
// })
// function getName(){
//         let nameInput = document.createElement('input')
//     }
    