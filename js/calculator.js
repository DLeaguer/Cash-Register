(function() {
    // var test = 'Hello calculator!';
    // console.log(test);

    // function testFunction() {
    //     console.log('Yay my button works!');
    // }

    // var demoButton = document.getElementById('testButton');
    // demoButton.addEventListener('click', testFunction);
    
    var listScr = document.getElementById('listScr');
    var topScr = document.getElementById('topScr');
    var bottomScr = document.getElementById('bottomScr');
    var getNum = document.getElementsByClassName('numbers');
    var getOps = document.getElementsByClassName('ops');
    var br = document.createElement('br');

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
        if (oper === '=') {
            bottomScr.innerHTML = null;
            topScr.innerHTML = null;
            oper = null;
        }
        if (oper === 'clr') {
            listScr.innerHTML += '<br />';
            oper = null;
        }
        // if (num === '.') {
        //     // this.innerHTML = 0.;
        //     console.log('  this.innerHTML  ', this.innerHTML);
        // }
        // if (toAdd || toSub || toMul || toDiv) {
        //     bottomScr.innerHTML = null;
        //     // listScr.innerHTML += bottomScr.innerHTML;
        // }
        num = this.innerHTML;
        bottomScr.innerHTML += num;
        listScr.innerHTML += num;
        console.log(' num ', num);
        console.log('  bottomScr.innerHTML.length  ',  bottomScr.innerHTML.length);
        if (bottomScr.innerHTML.length > 18 && listScr.innerHTML.length > 18) {
            bottomScr.innerHTML = ' err err err err  ';
            listScr.innerHTML = ' err err err err  ' + '<br />';
        }
    }
    
    //operator listener
    for (var i = 0; i < getOps.length; i++) {
        getOps[i].addEventListener('click', opsBut);
    }
    function opsBut() {
        oper = this.innerHTML;
        topScr.innerHTML = oper;
        listScr.innerHTML += oper;
        console.log(' oper ', oper);

        if (oper === '=') {
            num = bottomScr.innerHTML;
            if (toMul) {
                bottomScr.innerHTML = Number(toMul) * Number(num);
                toMul = null;
            }
            else if (toDiv) {
                bottomScr.innerHTML = Number(toDiv) / Number(num);
                toDiv = null;
            }
            else if (toAdd) {
                bottomScr.innerHTML = Number(toAdd) + Number(num);
                toAdd = null;
            }
            else if (toSub) {
                bottomScr.innerHTML = Number(toSub) - Number(num);
                toSub = null;
            }
                listScr.innerHTML += bottomScr.innerHTML + '<br />';
        }
        else if (oper === '*') {
            toMul = bottomScr.innerHTML;
            bottomScr.innerHTML = null;
        }
        else if (oper === '/') {
            toDiv = bottomScr.innerHTML;
            bottomScr.innerHTML = null;
        }
        else if (oper === '+' ) {
            toAdd = bottomScr.innerHTML;
            bottomScr.innerHTML = null;
            // listScr.innerHTML += bottomScr.innerHTML;
        }
        else if (oper === '-') {
            toSub = bottomScr.innerHTML;
            bottomScr.innerHTML = null;
        }
        else if (oper === 'clr') {
            bottomScr.innerHTML = null;
            topScr.innerHTML = null;
        }
        // listScr.innerHTML += bottomScr.innerHTML;
        console.log('  listScr.innerHTML  ', listScr.innerHTML);
        console.log('  bottomScr.innerHTML2  ', bottomScr.innerHTML);
    }
    
   


}());