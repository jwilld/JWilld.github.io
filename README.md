Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
# Hangman
#Purpose
The purpose of this game is to guess a word or phrase letter by letter. If guessed wrong a 
consequence occurs against the character. If all characters are guessed right, the player wins. 

#Gameplay
The player eneters a word to guess. Once the word is submitted, underlines load for the amount of letters and
spaces load for the amount of spaces. The max combination of spaces and letters is thirteen. The losing condition 
set for the game is when the player chooses six incorrect letters. To win, the player has to guess all the 
chraracters correctly without getting six incorrect. Each time a letteris guessed incorrectly, the animation will progress
towards its end result of falling flat. When the player wins or loses a prompt appears asking for the player to play again.
If play again is clicked, all parts of the game reset. 



#Requirements/installation
This game uses jQuery to toggle the menu to hide/show. It also uses fontawesome for icons and local images for animations. 
JQuery and fontawesome are the only parts that require an internet connection or they wont load. The browswer used to make 
this game was Safari, but it still works in Google Chrome. It hasn't been tested in any other browsers than the ones mentioned.
 The img folder has to be downloaded for the game animations to show. The index.html, style.css, script.js and img folder 
 all have to be in the same folder. 

# Issues
Being able to click 'play again' has a inconsistent delay. It either takes over a few seconds to be able to click or is 
instantly able to click. 

# Approach 
For now, everything loads on one page. Some features were avoided because I would rather havee them load on different pages. 
Functions are the only thing used and there is no object orientated programming involved. 




 


