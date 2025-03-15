const boxes = document.querySelector(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


//lets create a function to initiate the game

function initGame(){
    currentPlayer ="X";
    gameGrid=["","","","","","","","",""];
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player -${currentPlayer}`;
}
initGame();
// jai shree ram
function swapTurn() {
    if(currentPlayer === "X"){
        currentPlayer = "0";
    }
    //ui update
    gameInfo.innerText = `Current Player -${currentPlayer}`;
}

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerText =currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        //swap karo turn ko
        swapTurn();
        //check koi jeet toh nhi gya
        checkGameOver();
    }
}

boxes.forEach((box,index) => {
    box.addEventListener("click",()=>{
        handleClick(index);
    })
});