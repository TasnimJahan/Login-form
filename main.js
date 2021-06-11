let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");


btnSignUp.onclick = function () {
    signUp.classList.add("active");
    signIn.classList.add("inActive");
}

btnLogin.onclick = function () {
    signUp.classList.remove("active");
    signIn.classList.remove("inActive");

}