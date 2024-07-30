let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let nc=document.querySelector(".nc");
let msg=document.querySelector("#w");
let turn0=true;
const win=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,8],
[3,4,5],
[6,7,8],
];
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetgame=()=>{
    turn0=true;
    enableboxes();
    nc.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.classList.remove("x");
            box.classList.add("o");
            box.innerText="O";
            turn0 = false;
        }
        else{
            box.classList.remove("o");
            box.classList.add("x");
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner=(winner)=>{
    msg.innerText=`congratulations Winner is ${winner}`;
    nc.classList.remove("hide");
    disableboxes();
};

const checkwinner=()=>{
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2&&pos2==pos3){
                showWinner(pos1);
            }
        }
    }
};
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);