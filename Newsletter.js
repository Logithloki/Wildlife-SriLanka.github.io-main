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
    const displayElement = document.getElementById(id);

    if (displayElement) 
    {
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

    })
    .catch(error => {
    console.error('Error fetching data:', error);
    });


    const Submit = document.getElementById("submit");
    const Name = document.getElementById("User_Name");
    const email = document.getElementById("email");
    const form = document.getElementById("Form");
    let users =  JSON.parse(localStorage.getItem("User_Details")) || [];

    const login = document.getElementById('login');
    const Log = document.getElementById('logout');
    
    const check =JSON.parse(localStorage.getItem("Check"));
    //for checking if the user the logged in 
    if (check){
        login.classList.add('disable');
        Log.classList.add('enable')
    }
    else{
        login.classList.remove('disable');
        Log.classList.remove('enable')
    }
    
    Log.addEventListener("click", remover_user);
    
    function remover_user () {
      localStorage.removeItem("Check");
      location.reload();
      Log.classList.remove('show')
    }

function Add_Details( e)
{

    e.preventDefault();


    const User_name = Name.value;
    const User_email = email.value;
    const password = Pass.value;

    if (User_name == '') 
    {
        alert("Please enter the name!");
    } 
    else if (User_email == '') 
    {
        alert("Please enter the email!");
    } 
    else if (password == '') 
    {
        alert("Please enter the password!");
    } else {
 
        const user_details = {
            Name: User_name,
            Email: User_email,
            Password: password
        };

        console.log(users);

    
        users.push(user_details);

        
        let user_details_json = JSON.stringify(users);
    
        localStorage.setItem("User_Details" , user_details_json);
    
        console.log(user_details_json);

    
        let user_details_js = JSON.parse(localStorage.getItem("User_Details"));
    
     
        console.log(user_details_js);
        
    }

    


}

Submit.addEventListener('click', Add_Details );

