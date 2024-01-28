function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can add your authentication logic here
    // For simplicity, let's check if the username and password are not empty
    if (username !== "" && password !== "") {
        alert("Login successful!");
        // You can redirect the user to another page or perform other actions here
    } else {
        alert("Please enter both username and password.");
    }
}

function register() {
    // Add registration logic here
    alert("Redirecting to registration page...");
    // You can redirect the user to the registration page or perform other actions here
}
