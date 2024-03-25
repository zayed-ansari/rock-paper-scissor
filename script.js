document.getElementById("rock").onclick = function(){
    play('rock')
}

document.getElementById("paper").onclick = function(){
    play('paper')
}
document.getElementById("scissor").onclick = function(){
    play('scissor')
}

function play(userChoice){
    var choice = ["rock", "paper", "scissor"]
    var computerChoice = choice[Math.floor(Math.random() * 3)]
   
    if(userChoice === computerChoice){
        output = "Tie!!"
    }

    else if(userChoice === "rock" && computerChoice === "scissor")
    {
        output = "You won!";
    }
    else if(userChoice === "paper" && computerChoice === "rock"){
        
        output = "You won!!"
    }

    else if(userChoice === "scissor" && computerChoice === "paper"){
        output = "You won!!"
        
    }
    else{
        output = "You loose!!"
    }
    document.getElementById("myLabel").textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${output}`
}