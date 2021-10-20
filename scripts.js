let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var initbt = document.createElement('button');
initbt.innerText='Start Game';
document.getElementById('game-over-lbl').appendChild(initbt);
initbt.addEventListener('click',(initalEvent)=>{initalEvent.target.hidden=true});

// use the value stored in the nextPlayer variable to indicate who the next player is
let pval = document.querySelector('b');
let ptext = 'Next Player: ';
pval.innerText = ptext;


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    for(let i=0; i<9;i++){
    let id = 'c'+(i+1);
    var buttn= document.createElement('button');
    document.getElementById(id).appendChild(buttn);
    }
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   event.target.innerText = nextPlayer
   if(nextPlayer =='X')
   {
       nextPlayer='O';
   }
   else
   {
       if(nextPlayer=='O')
       {
           nextPlayer='X';
       }
   }

   let text = 'Next Player: ' + nextPlayer;
   pval.innerText=text;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    event.target.disabled='disabled';

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lable = document.getElementById('game-over-lbl')
        var headerNew = document.createElement('h1');
        headerNew.innerText= 'Game Over';
        lable.appendChild(headerNew);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   let butn2 = true;
   for(let i=0;i<btns.length;i++)
   {
       if(!btns[i].disabled)
       {
           butn2 = false;
       }
   }
   return butn2;
}
