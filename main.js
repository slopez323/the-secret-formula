const form1 = document.querySelector('#form1');
const inputText = document.querySelector('#inputText');

form1.addEventListener('submit', function () {
    alert(inputText.value);
});

const sandwich = document.querySelector('#sandwich');
const ingredients = document.getElementsByName('ingredients');

sandwich.addEventListener('submit', function () {
    let choices = '';
    for (ingredient of ingredients) {
        if (ingredient.checked) {
            choices += `${ingredient.value}, `;
        }
    }
    alert(`Your sandwich contains: ${choices.substring(0, choices.length - 2)}`);
});

const haircut = document.querySelector('#haircut');
const schedule = document.querySelector('#schedule');
const stylist = document.querySelector('#stylist');
const long = document.querySelector('#long');

haircut.addEventListener('submit', function () {
    let length = long.checked === true ? "long" : "short";
    alert(`Haircut schedulef for ${schedule.value} with ${stylist.value.toUpperCase()} for ${length.toUpperCase()} hair.`)
});

const account = document.querySelector('#account');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const pword = document.querySelector('#pword');
const confirmPword = document.querySelector('#confirmPword');
let users = [];

account.addEventListener('submit', function (event) {
    event.preventDefault();
    if (username.value.length < 3) {
        alert('ERROR: Username must be at least three characters.');
        return;
    };
    if (pword.value.length < 4) {
        alert('ERROR: Password must be at least four characters.');
        return;
    };
    if (pword.value !== confirmPword.value) {
        alert('ERROR: Confirm password does not match.');
        return;
    }
    users.push({ name: username.value, password: pword.value });
    console.log(users);
    alert(`Account has been created for ${username.value} with email address ${email.value}`);

    username.value = '';
    email.value = '';
    pword.value = '';
    confirmPword.value = '';
});

const login = document.querySelector('#login');
const unameLogin = document.querySelector('#unameLogin');
const pwordLogin = document.querySelector('#pwordLogin');

login.addEventListener('submit', function (event) {
    event.preventDefault();
    for (user of users) {
        if (user.name == unameLogin.value) {
            if (user.password == pwordLogin.value) {
                alert(`You have successfully logged in!`);
                return;
            } else {
                alert(`Password is incorrect.`);
                return;
            };
        };
    };
    alert(`User does not exist.  Create an account.`)
    unameLogin.value = '';
    pwordLogin.value = '';
});