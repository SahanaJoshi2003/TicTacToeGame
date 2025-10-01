let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");  
let newGameBtn = document.querySelector("#newbtn");
let mesgzCon = document.querySelector(".mesg-container");
let mesgg = document.querySelector("#mesg");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {   
        console.log("box is clicked");
        if (turnO){ //Player o turn
            box.innerText = "O";
            turnO = false; // Will become false after clicking so it will be player x turn.
        } else {
            box.innerText = "X"; //Player x turn
            turnO = true;
        }
        box.disabled = true;

        checkWinner ();
    });
});

const showWinner = (winner) => {
    mesgg.innerText = `WINNER IS -----> ${winner} ᕙ⁠[⁠･⁠۝･⁠]⁠ᕗ` ;
    mesgzCon.classList.remove("hide");

};

const disableB = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableB = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        console.log(pattern[0],pattern[1],pattern[2]) //Gives the pattern which is being selcted
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText,boxes[pattern[2]].innerText); //To tell the position of the box

        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){ //Will enter the loop only when 3 boxes are seleted
          if(pos1Val==pos2Val && pos2Val == pos3Val){ // Will enter this loop only when same symbols are in winning patterns.
            console.log("Winner", pos1Val);
            disableB();
            showWinner(pos1Val);            
          }  

        }
        }
};

const resetGame = () => {
    turnO = true;
    enableB();
    mesgzCon.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)

