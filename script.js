let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.nav-menu');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open')
};
//Login
const loginSection = document.querySelector('.login-section');
const loginBtn = document.querySelector('.nav-btn');

loginBtn.addEventListener('click', () => {
    loginSection.style.display ='flex';
});

if (loginSection) {
    loginSection.addEventListener('click', function(event) {
        //inform
        if (event.target.closest('form')) {
            return;
        }
        // outsideform
        loginSection.style.display = 'none';
    });
}

let registerlink = document.querySelector('.register-link a');
if (registerlink) {
    registerlink.addEventListener('click', function(event) {
        event.preventDefault();
        alert("chưa có");
    });
}
let rememberForgot = document.querySelector('.remember-forgot a');
if (rememberForgot) {
    rememberForgot.addEventListener('click', function(event) {
        event.preventDefault();
        alert("chưa có");
    });
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Tài khoản:', username);
    console.log('Mật khẩu:', password);
});
