// Nika Gedenidze scripts

// constants and variables
const $ = document.querySelector.bind(document);
const open = document.getElementById("open");
const restart = document.getElementById("restart");
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const root = document.getElementById('root');
const game_containter = document.getElementById('game_container');
var WORD_TO_GUESS = "GUESS";
const words_level = 0;
var correct_position = []
var correct_letter = []

//MODALS
if (open || close) {
    open.addEventListener('click', () => {
        modal_container.classList.add('popup');
        root.classList.add('blured');
    });
    close.addEventListener('click', () => {
        modal_container.classList.remove('popup');
        root.classList.remove('blured');
    });
    open.addEventListener('keydown', (event) => {
        var key = event.key;
        if (key == "Escape") {
            modal_container.classList.remove('popup');
            root.classList.remove('blured');
            
        }
    });
};


//ROWS
var rows = game_containter.children;

var words = ['', '', '', '', '', ''];
var in_row = 0;

//Fill out the boxes with letters
document.addEventListener('keyup', function (event) {

    var s = event.key;
    var key = event.keyCode || event.charCode;

    //input from keyboards
    for (var i = 0; i < rows[0].children.length; i++) {

        if (rows[in_row].children[i].firstElementChild.value == '' && String.fromCharCode(event.keyCode).match(/(\w|\s)/g)
            && key != 9 && key != 13) {
            rows[in_row].children[i].firstElementChild.value = s.toUpperCase();
            break;
        }
    }
    //Backspace
    if (key == 8 || key == 46) {
        // if()
        for (var j = 4; j >= 0; j--)
            if (rows[in_row].children[j].firstElementChild.value != '') {
                rows[in_row].children[j].firstElementChild.value = '';
                break;
            }
    }


});


// Enter click actions
document.addEventListener(
    'keydown', (event) => {
        // if not 'enter key' just exit here
        if (event.which == 13) {
            if (rows[in_row].children[4].firstElementChild.value != '') {
                

                for (var i = 0; i < rows[in_row].children.length; i++) {
                    words[in_row] += rows[in_row].children[i].firstElementChild.value;
                }
                checkTheWord();


            }
            else {
                swal({
                    title: "Not enough letters!",
                    text: "You have to fill out the row!",
                    icon: "warning",
                    dangerMode: true,
                });
            }
        }
    });


// word checker function
function checkTheWord() {


    //save the word to overwrite on it
    var copy_of_guess = [...WORD_TO_GUESS];
    var guessed_correctly = 0;

    //mark correct guesses and take the letter out of WORD_TO_GUESS
    for (var k in copy_of_guess)
        if (copy_of_guess[k] == words[in_row][k]) {
            correct_position[k] = 1;
            WORD_TO_GUESS[k] = '';
            rows[in_row].children[k].setAttribute('id', 'position_guessed_correctly');
            guessed_correctly++;

            // if all letters are marked remove event listeners and show modal
            if (correct_position.filter(x => x == 1).length == 5) {
                swal({
                    title: "You Won!",
                    text: "You have found the word!",
                    icon: "success",
                });
                document.removeEventListener('keyup');
                document.removeEventListener('keydown');
            }
        }

    // Check if there are anymore letters guessed in wrong position 
    for (var k in WORD_TO_GUESS)
        if (!correct_position[k]) {
            if (WORD_TO_GUESS.includes(words[in_row][k])) {
                rows[in_row].children[k].setAttribute('id', 'letter_guessed_correctly');
            }
            else { console.log('letter is wrong!') }
        }

    // Don't go over 5 rows
    if (in_row == 5) alert('game over');
    else in_row++;

    WORD_TO_GUESS = [...copy_of_guess];

}
// Restart the game
function restart_the_game() {
    game_containter.reset();
}
