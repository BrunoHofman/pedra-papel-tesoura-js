
let res = document.querySelector('section.res')
let robotList = ['rock', 'paper', 'scissors']
let robotRandomChoice = ''
let imgChoicePlayer = document.getElementById('imgChoicePlayer')
let imgChoiceRobot = document.getElementById('imgChoiceRobot')


function choiceRock(){
    imgChoicePlayer.src = '../img/rock-50.png'
    robotControl()
    //adcionar resultado (ifs)
}

function choicePaper(){
    imgChoicePlayer.src = '../img/paper-50.png'
    robotControl()
}

function choiceScissors(){
    imgChoicePlayer.src = '../img/scissors-50.png'
    robotControl()
}

function robotControl(){
    robotRandomChoice = robotList[Math.floor(Math.random() * robotList.length)]
    imgChoiceRobot.src = `../img/${robotRandomChoice}-50.png`
}