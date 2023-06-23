let audioTurn = new Audio("ting.mp3");
let gameOver=new Audio("gameover.mp3");
let music=new Audio("game.mp3");
let turn="X";
let isgameOver=false;

//Function to change turn
const changeTurn=()=>{
    if(turn =="X")
    {
        return "O";
    }else{
        return "X";
    }
}
//Function to check win

const checkWin=()=>{
    let boxtext=document.getElementsByClassName("box");
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

wins.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && boxtext[e[0]].innerText!=="")
    {
        document.querySelector(".turn").innerText=boxtext[e[0]].innerText+" won";
        document.getElementById("image").style.visibility="visible";
        gameOver.play();
        isgameOver=true;
    }

})
}

//Game Logic
let boxes=document.getElementsByClassName("box");

Array.from(boxes).forEach(element=>{
    element.addEventListener('click',()=>{
        if(element.innerText==='')
        {
            element.innerText=turn;
            turn=changeTurn();
           audioTurn.play();
           checkWin();

           if(!isgameOver){
            document.querySelector(".turn").innerText="Turn for "+turn;
           }
           
        }
    })
})
//Reset button functionalitY
let button=document.getElementById('btn');
button.addEventListener('click',()=>{
    let resetText=document.getElementsByClassName("box");
    Array.from(resetText).forEach(element => {
        element.innerText="";
    })
    document.getElementById("image").style.visibility="hidden";
    document.querySelector(".turn").innerText="Start for X";
    turn="X";
    isgameOver=false;
})
