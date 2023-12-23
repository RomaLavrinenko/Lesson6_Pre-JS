let sel = (selector) => document.querySelector(selector);
let nameReg = /^[a-zA-Z]{2,20}$/;
let emailReg = /^[a-zA-Z0-9-.]*@gmail\.com$/;
let passwordReg = /^\w{8,15}$/;
sel('.sign-in').addEventListener('click', function () {
    sel('.block').style.display = 'none';
    sel('.block-two').style.display = 'block';
    sel('.fName').value = '';
    sel('.fName').style.border = 'none';
    sel('.lName').value = '';
    sel('.lName').style.border = 'none';
    sel('.email').value = '';
    sel('.email').style.border = 'none';
    sel('.password').value = '';
    sel('.password').style.border = 'none';

});

sel('.sign-up').addEventListener('click', function () {
    sel('.block').style.display = 'block';
    sel('.block-two').style.display = 'none';
    sel('.email-sign').value = '';
    sel('.password-sign').value = '';
});



let testName, testLastName, testEmail, testPass;
sel('.fName').oninput = function () {
    testName = nameReg.test(this.value)
    if (testName) {
        this.style.border = '3px solid green'
    }
    else {
        this.style.border = '3px solid red'
    }
}

sel('.lName').oninput = function () {
    testLastName = nameReg.test(this.value)
    if (testLastName) {
        this.style.border = '3px solid green'
    }
    else {
        this.style.border = '3px solid red'
    }
}

sel('.email').oninput = function () {
    testEmail = emailReg.test(this.value)
    if (testEmail) {
        this.style.border = '3px solid green'
    }
    else {
        this.style.border = '3px solid red'
    }
}

sel('.password').oninput = function () {
    testPass = passwordReg.test(this.value)
    if (testPass) {
        this.style.border = '3px solid green'
    }
    else {
        this.style.border = '3px solid red'
    }
}
let allUser = [];
sel('.btn').addEventListener('click', function () {
    let myUser = [sel('.fName').value, sel('.lName').value, sel('.email').value, sel('.password').value];
    if (testName && testLastName && testEmail && testPass) {
        if (localStorage.length > 0 && localStorage.getItem('user')) {
            allUser = JSON.parse(localStorage.getItem('user'));
        }
        if (!allUser.some(elem => elem[2].toLowerCase() == sel('.email').value.toLowerCase())) {
            allUser.push(myUser);
            sel('.fName').value = '';
            sel('.fName').style.border = 'none';
            sel('.lName').value = '';
            sel('.lName').style.border = 'none';
            sel('.email').value = '';
            sel('.email').style.border = 'none';
            sel('.password').value = '';
            sel('.password').style.border = 'none';
        }
        else {
            alert('This gmail already exis');
            sel('.email').value = '';
            testEmail = false;

        }
        localStorage.setItem('user', JSON.stringify(allUser));
    }
    else {
        alert('Pelase enter your details cerroctly!');
    }
});

sel('.btn-sign').addEventListener('click',function(){
    allUser = JSON.parse(localStorage.getItem('user'));
    if(allUser.some(elem => elem[2].toLowerCase() == sel('.email-sign').value.toLowerCase() && elem[3] == sel('.password-sign').value)){
        allUser.filter(function(elem){
            if(elem[2].toLowerCase() == sel('.email-sign').value.toLowerCase() && elem[3] == sel('.password-sign').value){
                sel('.full-name').textContent = elem[0] + ' ' + elem[1];
                sel('.full-email').textContent = elem[2];
            }
        });
        sel('.block-two').style.display = 'none';
        sel('.block-3').style.display = 'block';
        sel('.email-sign').value = '';
        sel('.password-sign').value = '';
    }
    else if(allUser.some(elem => elem[2].toLowerCase() != sel('.email-sign').value.toLowerCase() && elem[3] == sel('.password-sign').value)){
        alert('Wrong Gmail');
        sel('.email-sign').value = '';
    }
    else if(allUser.some(elem => elem[2].toLowerCase() == sel('.email-sign').value.toLowerCase() && elem[3] != sel('.password-sign').value)){
        alert('Wrong Password');
        sel('.password-sign').value = '';
    }
})

sel('.full-btn').addEventListener('click',function(){
    sel('.full-name').textContent = 'Guest Guest';
    sel('.full-email').textContent = 'guest@gmail.com';
    sel('.block-two').style.display = 'block';
    sel('.block-3').style.display = 'none';
});

//