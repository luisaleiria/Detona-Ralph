const state ={
    view: {
        // torna as coisas do html dinamicas
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        life: document.querySelector("#vidas"),
    },
    values: {
        timerId: null,
        countDownTimerId: setInterval(countDown, 1000), // o tempo diminuindo
        gameVel: 1000,
        hitPosition: 0,
        pontuacao: 0,
        currTime: 60,
        numLife: 3,
    },
};

function countDown(){
    state.values.currTime--;
    state.view.timeLeft.textContent = state.values.currTime;
    state.view.life.textContent = state.values.numLife;

    if (state.values.currTime <= 0){
        clearInterval(state.values.countDownTimerId);
        clearInterval(state.values.timerId);
        clearInterval(state.values.numLife)
        alert("GAME OVER! O seu score foi: " + state.values.pontuacao);
    }
}

function playSound(){
    let audio = new Audio("./src/audios/hit.m4a");
    audio.volume = 0.2
    audio.play();
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id
}

function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVel);
}

// fica esperando para a ação ser executada (ta esperando os cliques)
function addListenerHitBox(){
  state.view.squares.forEach(square => {
    square.addEventListener("mousedown", () => {
    if (square.id === state.values.hitPosition) {
        state.values.pontuacao++;
        playSound();
    }
    else{
        state.values.numLife--;
    }
    state.view.score.textContent = state.values.pontuacao;
    state.view.score.textContent = state.values.pontuacao;
    state.values.hitPosition = null;
    
    if(state.values.numLife<=0){
        clearInterval(state.values.timerId);
        clearInterval(state.values.countDownTimerId);
        alert(`GAME OVER! Seu score foi: ${state.values.pontuacao}`);
        resetGame();
    }
    });
  });
}

function resetGame(){
  // reseta valores
    state.values.pontuacao = 0;
    state.values.currTime = 60;
    state.values.numLife = 3;
    state.values.hitPosition = null;

    state.view.score.textContent = 0;
    state.view.timeLeft.textContent = 60;
    state.view.life.textContent = 3;

    // reinicia o loop de inimigos e contagem
    moveEnemy();
    state.values.countDownTimerId = setInterval(countDown, 1000);
}


// inicio do jogo 
function init(){
    moveEnemy();
    addListenerHitBox();

    resetGame();
}


init();