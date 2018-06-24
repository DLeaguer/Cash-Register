(function() {
    // var test = 'Hello calculator!';
    // console.log(test);

    // function testFunction() {
    //     console.log('Yay my button works!');
    // }

    // var demoButton = document.getElementById('testButton');
    // demoButton.addEventListener('click', testFunction);
    
    var getScreen = document.getElementById('screen');
    var getNum = document.getElementsByClassName('numbers');
    var getOps = document.getElementsByClassName('ops');

    var num;
    var oper;
    var toAdd;
    var toSub;
    var toMul;
    var toDiv;
   
    // numbers listener
    for (var i = 0; i < getNum.length; i++) {
        getNum[i].addEventListener('click', numBut);
    }
    function numBut() {
        num = this.innerHTML;
        getScreen.innerHTML += num;
    }
    
    //operator listener
    for (var i = 0; i < getOps.length; i++) {
        getOps[i].addEventListener('click', opsBut);
    }
    function opsBut() {
        oper = this.innerHTML;
        if (oper == '=') {
            num = getScreen.innerHTML;
            if (!!toAdd) {
                getScreen.innerHTML = Number(toAdd) + Number(num);
                toAdd = null;
            }
            else if (!!toSub) {
                getScreen.innerHTML = Number(toSub) - Number(num);
                toSub = null;
            }
            else if (!!toMul) {
                getScreen.innerHTML = Number(toMul) * Number(num);
                toMul = null;
            }
            else if (!!toDiv) {
                getScreen.innerHTML = Number(toDiv) / Number(num);
                toDiv = null;
            }
        }
        else if (oper == '+' ) {
            toAdd = getScreen.innerHTML;
            getScreen.innerHTML = null;
        }
        else if (oper == '-') {
            toSub = getScreen.innerHTML;
            getScreen.innerHTML = null;
        }
        else if (oper == '*') {
            toMul = getScreen.innerHTML;
            getScreen.innerHTML = null;
        }
        else if (oper == '/') {
            toDiv = getScreen.innerHTML;
            getScreen.innerHTML = null;
        }
        else if (oper == 'clr') {
            getScreen.innerHTML = null;
        }
    }

   


}());