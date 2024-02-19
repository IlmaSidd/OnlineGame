let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userid = document.querySelector("#user-score");
const compid = document.querySelector("#comp-score");

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
});

const gencompchoice = () => {
    //rock ,paper, scissor
    let option =["Rock","Paper","Scissor"];
    const ranind = Math.floor(Math.random() * 3);
    return option[ranind];
};

const playGame = (userchoice)  => {
    console.log ("User choice:",userchoice);
    const compchoice = gencompchoice();
    console.log("Computer choice:",compchoice);

    if(userchoice === compchoice){
        console.log("game is draw, You can play again.");
        msg.innerText = "Game was draw, Play Again.";
        msg.style.backgroundColor = "indigo";
    }else {
        let userWin = true;
        if (userchoice === "Rock") {               
          //scissors, paper
          userWin = compchoice === "Paper" ? false : true;
        } else if (userchoice === "Paper") {
          //rock, scissors
          userWin = compchoice === "Scissor" ? false : true;
        } else {
          //rock, paper
          userWin = compchoice === "Rock" ? false : true;
        }
        showwinner(userWin, userchoice, compchoice);
      }
    };

const showwinner = (userWin ,userchoice, compchoice ) => {
    if(userWin){
        userscore++;
        userid.innerText = userscore;
        console.log(`You Win!`);
        msg.innerText =`You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } 
    else{
        compscore++;
        compid.innerText = compscore;
        console.log("You lose.");
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};