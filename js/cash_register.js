(function() {
    // var test = 'Hello cash_register!';
    // console.log(test);
    
    var getScreen = document.getElementById('screen');
    var getAcc = document. getElementsByClassName('acc');

    var acct;
    var toBal = 0;

     // account listener
     for (var i = 0; i < getAcc.length; i++) {
        getAcc[i].addEventListener('click', accBut);
    }
    function accBut() {
        acct = this.innerHTML;
        console.log(acct);
        if (acct == 'bal') {
            getScreen.innerHTML = Number(toBal);
            console.log(toBal);
            // getScreen.innerHTML = null;
        }
        else if (acct == 'dep') {
            toBal = Number(getScreen.innerHTML) + toBal;
            console.log(toBal);
            getScreen.innerHTML = null;
        }
        else if (acct == 'wd') {
            toBal = toBal - Number(getScreen.innerHTML);
            console.log(toBal);
            getScreen.innerHTML = null;
        }
    }

}());