// Initializing:- console.log("executed")

let ReceiveInfo = document.querySelector("#inputUser");
let buttonsGroup1 = document.querySelectorAll(".group1 button");
let buttonsGroup2 = document.querySelectorAll(".group2 button");
let buttonsGroup3 = document.querySelectorAll(".group3 button");
let buttonStandalone = document.querySelector("#zero");
let symbolsIcon = document.querySelectorAll(".symbols button");
let output = document.querySelector(".output")
var value;

/*Ton of variables for multiple purposes*/

buttonsGroup1.forEach((button) => {
    button.addEventListener("click", () => {
        //console.log(button.innerHTML)
        value = button.innerHTML;
        ReceiveInfo.value += value;
    })
})

buttonsGroup2.forEach((button2) => { 
    button2.addEventListener("click", () => {
        //console.log(button2.innerHTML)
        value = button2.innerHTML;
        ReceiveInfo.value += value;
    })
})

buttonsGroup3.forEach((button3) => { 
    button3.addEventListener("click", () => {
        //console.log(button3.innerHTML)
        value = button3.innerHTML;
        ReceiveInfo.value += value;
    })
})

buttonStandalone.addEventListener("click", () => {
    //console.log(buttonStandalone.innerHTML)
    value = buttonStandalone.innerHTML;
    ReceiveInfo.value += value;
})

symbolsIcon.forEach((symbol) => {
    symbol.addEventListener("click", () => {
        if (symbol.innerHTML == 'x'){
            ReceiveInfo.value += symbol.innerHTML.toLowerCase();
        } else if (symbol.innerHTML == '='){
           let val = eval(ReceiveInfo.value);
           output.innerHTML = val; 
        } else if (symbol.innerHTML == 'AC'){
            ReceiveInfo.value = '';
            ReceiveInfo.placeholder = 'Type your number';
            output.innerHTML = '---';
        }
        else {
            //console.log(symbol.innerHTML)
            value = symbol.innerHTML;
            ReceiveInfo.value += value;
        }
    })
})

//Icon change Randomly

function randomChangeIcon(){
    let numbers = ['1', '2', '4', '5', '6', 'original']; //store some more if you want but also read the instruction before doing it
    let choice = Math.floor(Math.random() * numbers.length);
    let final = numbers[choice];
    let imageAddress = document.querySelector("#favicon");

    //console.log("./images/Icons_ " + final + '.png')
    imageAddress.href = './images/Icons_' + final + '.png';
}