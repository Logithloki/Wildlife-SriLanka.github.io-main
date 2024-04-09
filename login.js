const Pass = document.getElementById("Password");
const Check = document.getElementById("showPassword");

Check.addEventListener("click", function() {
    if (Check.checked) {
        Pass.type = "text";
    } else {
        Pass.type = "password";
    }
});

function display_text(value,id) {
    // Find the HTML element where you want to display the value
    const displayElement = document.getElementById(id);

    // Check if the element exists
    console.log(displayElement);
    if (displayElement) {
        // Set the innerHTML of the element to the value of the variable
        displayElement.innerHTML = value;
    } else {
        console.error('Could not find display element.');
    }
}

fetch('data.json')
  .then(response => response.json()) 
  .then(data => {

    display_text(data.Footer[0].footer_head,"footer_head");
    display_text(data.Footer[0].footer_link,"footer_link");
    display_text(data.Footer[0].footer_contact,"footer_contact");
    display_text(data.Footer[0].footer_news,"footer_news");


    })
  .catch(error => {
    console.error('Error fetching data:', error);
    });


const button = document.getElementById("submit");
const User_Name = document.getElementById("Username");


function check_user (e) 
{

    e.preventDefault();

    const username = User_Name.value;
    const password = Pass.value;

    let user_details_json = localStorage.getItem("User_Logins");
    console.log(localStorage)
    let user_details = JSON.parse(user_details_json);



    let check = 0;

    user_details.forEach(user => {
        if (username === "admin" && password === "admin1") {
            check = 2;
        }
        else if (user.username == username && user.password == password) {
            check = 1;
        }
    });

    if (check == 1) {
        alert("Login successful!");
        window.location.href = "i.html";
        localStorage.setItem("Check" , JSON.stringify("user"))
    } 
    else if (check == 2) {
        alert("Welcome Admin");
        window.location.href = "admin.html";
        localStorage.setItem("Check" , JSON.stringify("admin"))
    }
    else {
        alert("Invalid username or password!");
    }
}

fetch('User.json')
    .then(response => response.json()) 
    .then(data => {

        let User_Logins_json = JSON.stringify(data);
    
        localStorage.setItem("User_Logins" , User_Logins_json);


    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


button.addEventListener("click" , check_user);

const news = document.getElementById("news");
news.addEventListener("click" , redirect)

function redirect(){
    window.location.href = "Newsletter.html" 
}