(function() {
    // var test = 'Hello calculator!';
    // console.log(test);

    // function testFunction() {
    //     console.log('Yay my button works!');
    // }

    // var demoButton = document.getElementById('testButton');
    // demoButton.addEventListener('click', testFunction);
    
    var getScreen = document.getElementById('screen');
    var arr = [];
    var arr2 = [];
    var total = 0;
    var memory = 0;
    var operator = '';

    
    // var getNumbers = document.getElementsByClassName('numbers');
    // for (var i = 0; i < getNumbers.length; i++) {
    //     getNumbers.addEventListener('click', numbersButton)[i];
    // }

    // function numbersButton(){
    //     arr.push(this.value);
    //     getScreen.innerHTML = arr.join('');
    // }

    var seven = document.getElementById('seven');
    seven.addEventListener('click', sevenButton);
    function sevenButton() {
        console.log(this.value);
        arr.push(this.value);
        getScreen.innerHTML = arr.join('');
    }

    var eight = document.getElementById('eight');
    eight.addEventListener('click', eightButton);
    function eightButton() {
        console.log(this.value);
        arr.push(this.value);
        getScreen.innerHTML = arr.join('');
    }

    var nine = document.getElementById('nine');
    nine.addEventListener('click', nineButton);
    function nineButton() {
        arr.push(this.value);
        getScreen.innerHTML = arr.join('');
    }

    var four = document.getElementById('four');
    four.addEventListener('click', fourButton);
    function fourButton() {
        arr.push(this.value);
        getScreen.innerHTML = arr.join('');
    }

    var five = document.getElementById('five');
    five.addEventListener('click', fiveButton);
    function fiveButton() {
        arr.push(this.value);
        getScreen.innerHTML = arr.join('');
    }

    var six = document.getElementById('six');
    six.addEventListener('click', sixButton);
    function sixButton() {
        arr.push(this.value);
        getScreen.innerHTML = arr.join('');
    }

    var one = document.getElementById('one');
    one.addEventListener('click', oneButton);
    function oneButton() {
        arr.push(this.value);
        getScreen.innerHTML = arr.join('');
    }

    var two = document.getElementById('two');
    two.addEventListener('click', twoButton);
    function twoButton() {
        arr.push(this.value);
        getScreen.innerHTML = arr.join('');
    }

    var three = document.getElementById('three');
    three.addEventListener('click', threeButton);
    function threeButton() {
        arr.push(this.value);
        getScreen.innerHTML = arr.join('');
    }

    var zero = document.getElementById('zero');
    zero.addEventListener('click', zeroButton);
    function zeroButton() {
        arr.push(this.value);
        getScreen.innerHTML = arr.join('');
    }

    var dot = document.getElementById('dot');
    dot.addEventListener('click', dotButton);
    function dotButton() {
        arr.push(this.value);
        getScreen.innerHTML = arr.join('');
    }

    var total = document.getElementById('total');
    total.addEventListener('click', totalButton);
    function totalButton() {
       operator = this.value;
       console.log(this.value); 
    }

    var add = document.getElementById('add');
    add.addEventListener('click', addButton);
    function addButton() {
        operator = this.value;
        console.log(this.value);
    }

    var subtract = document.getElementById('subtract');
    subtract.addEventListener('click', subtractButton);
    function subtractButton() {
        operator = this.value;
        console.log(this.value);
    }

    var multiply = document.getElementById('multiply');
    multiply.addEventListener('click', multiplyButton);
    function multiplyButton() {
        operator = this.value;
        console.log(this.value);
    }

    var divide = document.getElementById('divide');
    divide.addEventListener('click', divideButton);
    function divideButton() {
        operator = this.value;
        console.log(this.value);
    }

    if (arr === ) {

    }

    // var calculatorModule = function() {
    //     var memory = 0;
    //     var total = 0;
    
    //     return {
           
    //         load: function(num) {
    //             if (typeof num === 'number') {
    //                 return total = num;
    //             }
    //             else {
    //                 throw err;
    //             }
                
    //             // return total = num;
    //         },
    //         getTotal: function() {
    //             return total;
    //         },
    //         add: function(num) {
    //             if (typeof num === 'number') {
    //                 return total += num;
    //             }
    //             else {
    //                 throw err;
    //             }
    //             // return total += num;
    
    //         },
    //         subtract: function(num) {
    //             if (typeof num === 'number') {
    //                 return total -= num;
    //             }
    //             else {
    //                 throw err;
    //             }
    //             // return total -= num;
    //         },
    //         multiply: function(num) {
    //             if (typeof num === 'number') {
    //                 return total *= num;
    //             }
    //             else {
    //                 throw err;
    //             }
    //             // return total *= num;
    //         },
    //         divide: function(num) {
    //             if (typeof num === 'number') {
    //                 return total /= num;
    //             }
    //             else {
    //                 throw err;
    //             }
    //             // return total /= num;
    //         },
    //         recallMemory: function() {
    //             return memory;
    //         },
    //         saveMemory: function() {
    //             return memory = total;
    //         },
    //         clearMemory: function() {
    //             return memory = 0;
    //         }
    //     }
    // }
    



}());