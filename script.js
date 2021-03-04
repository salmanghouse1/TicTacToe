var handle="";
var playerChoice="";
var computerChoice="";
let gameActive = true;
let currentPlayer="X";
var gameStatus=true;
const statusDisplay = document.querySelector('.game--status');
var gameStatus="";
var handle=document.getElementsByClassName("box");
var ComputerTurn="";
var gameState = ["","","","","","","","",""];
var o = "o";
var x = "x";
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
statusDisplay.innerHTML = currentPlayerTurn();

xCheckedMarks="";
oCheckedMarks="";


document.getElementById('gameRestart').addEventListener('click',function(){
    
    xCheckedMarks=document.getElementsByClassName('x');
    oCheckedMarks=document.getElementsByClassName('o');
   

    for(i=0;i<xCheckedMarks.length;i++){/*Convert length to number and subtract one to it*/

        
    xCheckedMarks[i].classList.remove('x');
    }
    
    for(i=0;i<oCheckedMarks.length;i++){/*Convert length to number and subtract one to it*/
         
    oCheckedMarks[i].classList.remove('o');
    }
    alert("Game Restarted");
    
    gameState = ["","","","","","","","",""];
    currentPlayer = "X";

})

const winningConditions = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];


document.querySelectorAll('.box').forEach(box => box.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);



function handleRestartGame(){

}


function handleCellClick(){

if(currentPlayer=="X"){
     
    currentPlayer = "X";
    
    document.getElementById('gameStatus').innerHTML='It is '+currentPlayer+"'s turn";


    this.classList.add('x');
    ClickedAttribute=this.getAttribute('data-cell-index');
    removeQuotes=parseInt(ClickedAttribute);
    
    gameState[removeQuotes]=currentPlayer;
    
    gsap.fromTo(this, {backgroundSize:0}, {duration: 2,ease: "elastic.out(1, 0.3)",backgroundSize:"100%"});
   
    currentPlayer = "O";
    document.getElementById('gameStatus').innerHTML='It is '+currentPlayer+"'s turn";

    if(gameState[0]=="X"&&gameState[1]=="X"&&gameState[2]=="X" || gameState[3]=="X"&&gameState[4]=="X"&&gameState[5]=="X" || gameState[6]=="X"&&gameState[7]=="X"&&gameState[8]=="X"||gameState[0]=="X"&&gameState[3]=="X"&&gameState[6]=="X"||gameState[1]=="X"&&gameState[4]=="X"&&gameState[7]=="X"||gameState[2]=="X"&&gameState[5]=="X"&&gameState[8]=="X"||gameState[0]=="X"&&gameState[4]=="X"&&gameState[8]=="X"||gameState[2]=="X"&&gameState[4]=="X"&&gameState[6]=="X"){
        alert("X won!");
        document.getElementById('gameStatus').innerHTML='Player X Won';
        gameStatus=false;
        
    }
    }
   
   else if(currentPlayer=="O"){
       
    currentPlayer = "O";
    
    document.getElementById('gameStatus').innerHTML="It is " + currentPlayer + "'s turn";

        this.classList.add('o');
        ClickedAttribute=this.getAttribute('data-cell-index');
    removeQuotes=parseInt(ClickedAttribute);
    
    
    gameState[removeQuotes]=currentPlayer;
   
    gsap.fromTo(this, {backgroundSize:0}, {duration: 2,ease: "elastic.out(1, 0.3)",backgroundSize:"100%"});
    currentPlayer = "X";
    document.getElementById('gameStatus').innerHTML='It is '+currentPlayer+"'s turn";
    if(gameState[0]=="O"&&gameState[1]=="O"&&gameState[2]=="O" || gameState[3]=="O"=="O"&&gameState[4]=="O"&&gameState[5]=="O" || gameState[6]=="O"&&gameState[7]=="O"&&gameState[8]=="O"||gameState[0]=="O"&&gameState[3]=="O"&&gameState[6]=="O"||gameState[1]=="O"&&gameState[4]=="O"&&gameState[7]=="O"||gameState[2]=="O"&&gameState[5]=="O"&&gameState[8]=="O"||gameState[0]=="O"&&gameState[4]=="O"&&gameState[8]=="O"||gameState[2]=="O"&&gameState[4]=="O"&&gameState[6]=="O"){
        alert("O won!");
        gameStatus=false;
        document.getElementById('gameStatus').innerHTML='Player O Won';
    }
}

    
   
}


    

   
    

    

   
