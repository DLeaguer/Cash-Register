(function() {
    // var test = 'Hello cash_register!';
    // console.log(test);
    
    var getBottomScr = document.getElementById('bottomScr');
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
        if (acct === 'bal') {
            getBottomScr.innerHTML = Number(toBal);
            console.log(toBal);
            // getBottomScr.innerHTML = null;
        }
        else if (acct === 'dep') {
            toBal = Number(getBottomScr.innerHTML) + toBal;
            console.log(toBal);
            listScr.innerHTML += '<br />';
            listScr.innerHTML += toBal + '<br />';
            getBottomScr.innerHTML = null;
        }
        else if (acct === 'wd') {
            toBal = toBal - Number(getBottomScr.innerHTML);
            console.log(toBal);
            listScr.innerHTML += '<br />';
            listScr.innerHTML += toBal + '<br />';
            getBottomScr.innerHTML = null;
        }
    }

}());