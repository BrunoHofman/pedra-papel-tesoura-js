
let res = document.querySelector('section.res')
let robotList = ['rock', 'paper', 'scissors']
let robotRandomChoice = ''
let imgChoicePlayer = document.getElementById('imgChoicePlayer')
let imgChoiceRobot = document.getElementById('imgChoiceRobot')


function choiceRock(){
    imgChoicePlayer.src = '../img/rock-50.png'
    robotControl()
    if(robotRandomChoice == 'scissors'){
        res.innerHTML = '<p>Você ganhou!</p>'
    }
    else if (robotRandomChoice == 'paper'){
        res.innerHTML = '<p>Você perdeu.</p>'
    }
    else{
        res.innerHTML = '<p>Empate.</p>'
    }
}

function choicePaper(){
    imgChoicePlayer.src = '../img/paper-50.png'
    robotControl()
    if(robotRandomChoice == 'rock'){
        res.innerHTML = '<p>Você ganhou!</p>'
    }
    else if(robotRandomChoice == 'scissors'){
        res.innerHTML = '<p>Você perdeu.</p>'
    }
    else{
        res.innerHTML = '<p>Empate.</p>'
    }
}

function choiceScissors(){
    imgChoicePlayer.src = '../img/scissors-50.png'
    robotControl()
    if(robotRandomChoice == 'paper'){
        res.innerHTML = '<p>Você ganhou!</p>'
    }
    else if(robotRandomChoice == 'rock'){
        res.innerHTML = '<p>Você perdeu.</p>'
    }
    else{
        res.innerHTML = '<p>Empate.</p>'
    }
}

function robotControl(){
    robotRandomChoice = robotList[Math.floor(Math.random() * robotList.length)]
    imgChoiceRobot.src = `../img/${robotRandomChoice}-50.png`
}