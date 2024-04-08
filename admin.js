const subscriber_List = document.getElementById("userdetails");
const info = document.getElementById("no_info");
const subs = [];


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

    

const user_details_json = localStorage.getItem("User_Details");
    if (user_details_json) {
        const user_details = JSON.parse(user_details_json);
        
        for (let i = 0; i < user_details.length; i++) {
            subs.push(user_details[i]);
            console.log(user_details[i].Name)
            subscriber_List.innerHTML += `User Name ${i + 1}:   <b>${user_details[i].Name}</b><br>` ;
        }
    }
    else {
        info.innerHTML = "No Subscription yet ";
    }




    const Clear_btn = document.getElementById("Clear");

    Clear_btn.addEventListener("click", remove_storage );


    function remove_storage (){
        localStorage.removeItem("User_Details");
        alert("Local storage has been cleared!");
        location.reload()
    }

