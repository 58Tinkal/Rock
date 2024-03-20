 let userScore=0;
 let compScore=0;

 const choices=document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg"); 
  const userScorePara=document.querySelector("#user-score");
  const compScorePara=document.querySelector("#comp-score");  

      const ranComChoice = () =>{
        const option =["rock", "paper", "scissors"];
        const randIdx=Math.floor(Math.random()*3);
        return option[randIdx];
      }
      const drawGame = () =>{
       // console.log("Game is Draw");
        msg.innerText="Game was Draw, Play again.";
        msg.style.backgroundColor="yellow";
      }

    const showWinner = (userWin,userChoice,compChoice) => {
          if(userWin){
            userScore++;
            userScorePara.innerText=userScore;
            //console.log("you win!");
            msg.innerText=`Yoy win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
          }else{
            compScore++;
            compScorePara.innerText=compScore;
           // console.log("you lose!");
            msg.innerText=`Yoy win! ${compChoice} beats yoyr ${userChoice}`;
            msg.style.backgroundColor="red";
          }
    }

     const playGame = (userChoice) => {
       // console.log("user choice =",userChoice);
             //Computer choice
        const compChoice=ranComChoice();
      //  console.log("comp choice =",compChoice);

        if(compChoice===userChoice){
            drawGame();
        }else{
            let userWin =true;
            if(userChoice==="rock"){
              userWin=compChoice==="paper" ? false : true;  
            }else if("paper"){
                userWin=compChoice==="scissors" ? false : true;    
            }else{
                userWin=compChoice==="rock" ? false : true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
     }  



     choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const userChoice=choice.getAttribute("id");
            playGame(userChoice);
        });
     });