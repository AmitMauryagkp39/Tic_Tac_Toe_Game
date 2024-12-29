// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn =document.querySelector("#new-btn");
// let msgContainer =document.querySelector(".message-container");
// let msg = document.querySelector("#msg");


// let turnO = true; //playerX, playerY


// const winPattern = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [6,4,2],
//     [3,4,5],
//     [6,7,8],
// ];

// const resetGame = () => {
//     turnO = true;
//     enableBoxes();
//     msgContainer.classList.add("hide");
// };


// boxes.forEach((box) => {
//     box.addEventListener("click", () =>  {
//         console.log("box was clicked");
//         if(turnO) 
//             {
//                 box.innerText =("O");
//                 turnO = false;
//             }else
//             {
//                 box.innerText =("X");
//                 turnO = true;
//             }
//             box.disabled = true;

//             checkWinner();
               
//     });
// });

// const disableBoxes = () => {
//     for(let box of boxes)
//         box.disabled = true
// }

// const enableBoxes = () => {
//     for(let box of boxes)
//         box.disabled = false
//     box.innerText =" ";
// }




// const showWinner =(winner) => {
//     msg.innerText = 'congratulation, Winner is' + " " + winner;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// };
// const  checkWinner =()=>{
//     for(let pattern of winPattern)
//     {
//         let pos1Val = boxes [pattern[0]].innerText;
//         let pos2Val = boxes [pattern[1]].innerText;
//         let pos3Val = boxes [pattern[2]].innerText;

//       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
//         if(pos1Val == pos2Val && pos2Val == pos3Val){
//             console.log("winner",pos1Val);
//             showWinner(pos1Val);
//         }
//       }

//     }
//   };

//   newGameBtn.addEventListener("click",resetGame);
// resetBtn.addEventListener("click",resetGame);


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerO starts

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2],
    [3, 4, 5],
    [6, 7, 8],
];

// Reset the game state
const resetGame = () => {
    turnO = true;
    enableBoxes(); // Reset the boxes (enable and clear text)
    msgContainer.classList.add("hide"); // Hide the winner message
};

// Event listener for each box click
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return; // Prevent overwriting if the box is already filled

        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        box.disabled = true; // Disable the clicked box

        checkWinner(); // Check for a winner after each move
        turnO = !turnO; // Toggle turns
    });
});

// Disable all boxes
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Enable all boxes and clear their text
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = ""; // Clear the text in each box
    });
};

// Display the winner message
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}!`;
    msgContainer.classList.remove("hide"); // Show the winner message
    disableBoxes(); // Disable all boxes after a winner is found
};

// Check if there is a winner
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val); // Call showWinner if we have a winner
            return; // Exit the function once a winner is found
        }
    }
};

// Attach event listeners to the reset and new game buttons
newGameBtn.addEventListener("click", resetGame); // Start a new game
resetBtn.addEventListener("click", resetGame); // Reset the current game
