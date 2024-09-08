let userscore=0;
let compscore=0;

const userboard=document.querySelector("#userscore");
const compboard=document.querySelector("#compscore");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const gencompchoice=()=>{
    const options=["rock", "paper", "scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const showwinner=(userwin)=>{
    if (userwin){
        //console.log("you win");
        msg.innerText="YOU WIN!";
        msg.style.backgroundColor="green";
        userscore++;
        userboard.innerText=userscore;


    }
    else{
       // console.log("you loose");
        msg.innerText="YOU LOOSE!";
        msg.style.backgroundColor="red";
        compscore++;
        compboard.innerText=compscore;



    }
}
const playgame=(userchoice)=>{
    console.log('userchoice = ', userchoice);

    const compchoice=gencompchoice();
    console.log ('computer choice = ',  compchoice);

    if(userchoice==compchoice){
        console.log('game was draw');
        msg.innerText="Draw";
        msg.style.backgroundColor="rgb(22, 22, 78)";

    }
    else{
        let userwin=true;
        if (userchoice==="rock"){
            userwin=compchoice === "paper"? false: true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"? false: true;
        }
        else {
            userwin=compchoice==="rock"? false: true;
        }
        showwinner(userwin);

    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});