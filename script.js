/// Click the Fish!///
//func 



const scoreDisplay = document.getElementByld('Score')
const fishimg = document.getElementByld('fishimg')
const fps = document.getElementById('Fish / second')

fishimg.addEventListener('click', function (clickEvent)){
    Fish = Fish + 1;
    scoreDisplay.innerText = Fish;
}

const rnet = document.getElementById('reednets')
const rnetcost = document.getElementById('reedcost')
const rnetquant = document.getElementById('reedquantity')

rnet.addEventListener('click', function(clickEvent){
    if (Fish>= 10){

        Fish = Fish - 10;
        scoreDisplay.innerText = Fish;
        cost1 = cost1 + 5
        quantity1 += 1
        rnetcost.innerText = quantity1
        FS +=1
        fps.innerText = FS
        rnetquant.innerText = cost1

        setInterval(function () {
            Fish = Fish +1;
            scoreDisplay.innerText = Fish;

        },1000)
    }
}

const wnet = document.getElementById('wirenets')
const wnetcost = document.getElementById('wirecost')
const wnetquant = document.getElementById('wirequantity')

wnet.addEventListener('click', function(clickEvent){
    if (Fish>= 25){

        Fish = Fish - 25;
        scoreDisplay.innerText = Fish;
        cost1 = cost1 + 5
        quantity1 += 1
        wnetcost.innerText = quantity1
        FS +=1
        fps.innerText = FS
        wnetquant.innerText = cost1

        setInterval(function () {
            Fish = Fish +1;
            scoreDisplay.innerText = Fish;

        },1000)
    }
}

const mnet = document.getElementById('metalnets')
const mnetcost = document.getElementById('metalcost')
const mnetquant = document.getElementById('metalquantity')

mnet.addEventListener('click', function(clickEvent){
    if (Fish>= 50){

        Fish = Fish - 50;
        scoreDisplay.innerText = Fish;
        cost1 = cost1 + 5
        quantity1 += 1
        mnetcost.innerText = quantity1
        FS +=1
        fps.innerText = FS
        mnetquant.innerText = cost1

        setInterval(function () {
            Fish = Fish +1;
            scoreDisplay.innerText = Fish;

        },1000)
    }
}


const cnet = document.getElementById('chainnets')
const cnetcost = document.getElementById('chaincost')
const cnetquant = document.getElementById('chainquantity')


cnet.addEventListener('click', function(clickEvent){
    if (Fish>= 100){

        Fish = Fish - 100;
        scoreDisplay.innerText = Fish;
        cost1 = cost1 + 5
        quantity1 += 1
        cnetcost.innerText = quantity1
        FS +=1
        fps.innerText = FS
        cnetquant.innerText = cost1

        setInterval(function () {
            Fish = Fish +1;
            scoreDisplay.innerText = Fish;

        },1000)
    }
}

const gnet = document.getElementById('goldnets')
const gnetcost = document.getElementById('goldcost')
const gnetquant = document.getElementById('goldquantity')

gnet.addEventListener('click', function(clickEvent){
    if (Fish>= 200){

        Fish = Fish - 200;
        scoreDisplay.innerText = Fish;
        cost1 = cost1 + 5
        quantity1 += 1
        gnetcost.innerText = quantity1
        FS +=1
        fps.innerText = FS
        gnetquant.innerText = cost1

        setInterval(function () {
            Fish = Fish +1;
            scoreDisplay.innerText = Fish;
        },1000)
    }
}