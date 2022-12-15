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
const different_words = ["FIELD", "BEGIN","SOLVE","LANDS","STICK"];
const words_level = 0;
var correct_position = []
var correct_letter = []
var array_of_words;
var in_level = 1;
//5 Sessions
for(var k in different_words)
sessionStorage.setItem(different_words[k-1], k);



//Words
// fetch('')
try{jQuery.get('https://raw.githubusercontent.com/charlesreid1/five-letter-words/master/sgb-words.txt', function(data) {
    array_of_words= JSON.stringify(data).replace(/"/g, '').replaceAll('\\n', ' ').split(/\s+/);
    });
  }
catch(error){
    console.log("there was an error!");
    console.error(error);
  };

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
var mywords = [];
//Fill out the boxes with letters
document.addEventListener('keyup', function (event) {

    var s = event.key;
    var key = event.keyCode || event.charCode;
    
    //input from keyboards
    for (var i = 0; i < rows[0].children.length; i++) {

        if (rows[in_row].children[i].firstElementChild.value == '' && String.fromCharCode(event.keyCode).match(/(\w|\s)/g)
            && key != 9 && key != 13) {
            rows[in_row].children[i].firstElementChild.value = s.toUpperCase();
            mywords[in_row] += s.toLowerCase();
            mywords[in_row] = mywords[in_row].replace("undefined", "");
            break;
        }
    }
    //Backspace
    if (key == 8 || key == 46) {
        // if()
        for (var j = 4; j >= 0; j--)
            if (rows[in_row].children[j].firstElementChild.value != '') {
                rows[in_row].children[j].firstElementChild.value = '';
                mywords[in_row] = mywords[in_row].replace(mywords[in_row][j],'');
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
                var checkable_word = String(mywords[in_row]).substring(0,5);
                if(array_of_words.includes(checkable_word)){
                    for (var i = 0; i < rows[in_row].children.length; i++) {
                        words[in_row] += rows[in_row].children[i].firstElementChild.value;
                    }
                    checkTheWord();
                }
                else{
                    mywords[in_row] = '';
                    swal({
                        title: "Wrong word!",
                        text: "This word doesn't exsist, try another one!",
                        icon: "warning",
                        dangerMode: true,
                    });
                }

               


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
    var copy_of_guess = [...different_words[0]];
    var guessed_correctly = 0;

    //mark correct guesses and take the letter out of   
    for (var k in copy_of_guess)
        if (copy_of_guess[k] == words[in_row][k]) {
            correct_position[k] = 1;
            different_words[0][k] = '';
            rows[in_row].children[k].setAttribute('id', 'position_guessed_correctly');
            guessed_correctly++;

            // if all letters are marked remove event listeners and show modal

            setTimeout(() => {if (correct_position.filter(x => x == 1).length == 5) {

                swal({
                    title: "You've Won!",
                    text: "You have found the word!",
                    icon: "success",
                });
                document.removeEventListener('keyup');
                document.removeEventListener('keydown');
            }
                
            }, 300); 
        }

    // Check if there are anymore letters guessed in wrong position 
    for (var k in different_words[0])
        if (!correct_position[k]) {
            if (different_words[0].includes(words[in_row][k])) {
                rows[in_row].children[k].setAttribute('id', 'letter_guessed_correctly');
            }
            else { console.log('letter is wrong!') }
        }

    // Don't go over 5 rows
    if (in_row == 5) alert('game over');
    else in_row++;

    different_words[0] = [...copy_of_guess];

}
// Restart the game
function restart_the_game() {
    game_containter.reset();
}
