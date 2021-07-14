function logIn() {

    user_name = document.getElementById("login").value;

    localStorage.setItem("login", user_name);

    window.location = "game_choice.html";
}

function signUp() {

    signup = document.getElementById("siginup").value;

    localStorage.setItem("siginup", signup);

    window.location = "game_choice.html";
}