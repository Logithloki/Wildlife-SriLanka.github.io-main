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
};

fetch('data.json')
  .then(response => response.json()) 
  .then(data => {

    display_text(data.title_5,"title");

    
    display_text(data.sections_Guide[0].Indigenous.title,"Indigenous");
    display_text(data.sections_Guide[0].Indigenous.description,"Indigenous_des");

    display_text(data.sections_Guide[1].Animals[0].name,"Elephas");
    display_text(data.sections_Guide[1].Animals[0].description,"Elephas_des");

    display_text(data.sections_Guide[1].Animals[1].name,"Panthera");
    display_text(data.sections_Guide[1].Animals[1].description,"Panthera_des");

    display_text(data.sections_Guide[1].Animals[2].name,"Myophonus");
    display_text(data.sections_Guide[1].Animals[2].description,"Myophonus_des");


    display_text(data.sections_Dept[0].content,"content");
    display_text(data.sections_Dept[0].buttonText,"buttonText");

    display_text(data.sections_Dept[1].Gallery_title,"Gallery_title");


    // Footer

    display_text(data.Footer[0].footer_head,"footer_head");
    display_text(data.Footer[0].footer_link,"footer_link");
    display_text(data.Footer[0].footer_contact,"footer_contact");
    display_text(data.Footer[0].footer_news,"footer_news");

    


  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

const news = document.getElementById("news");
news.addEventListener("click" , redirect)

function redirect(){
    window.location.href = "Newsletter.html" 
}


const showPopup = document.getElementById('show-popup');
const subcribers = document.getElementById('subcribers');
const popupContainer = document.getElementById('popup-container');
const closeBtn = document.getElementById('close-popup');
const update = document.getElementById('save');
const login = document.getElementById('login');
const Log = document.getElementById('logout');

const check =JSON.parse(localStorage.getItem("Check"));
// for the popup
if (check == "admin") {
  showPopup.classList.add('show')
  subcribers.classList.add('show')
  Log.classList.add('show')
}
else {
  showPopup.classList.remove('show')
  subcribers.classList.remove('show')
}
//for checking if the user the logged in 
if (check){
  login.classList.add('disable');
  Log.classList.add('enable')
}
else{
  login.classList.remove('disable');
  Log.classList.remove('enable')

}
  

showPopup.addEventListener("click" , open );
  closeBtn.addEventListener("click" , close );

  
  function open (){
      popupContainer.classList.add('show');
  }
  
  function close (){
      popupContainer.classList.remove('show');
  }

  update.addEventListener("click", save_detaials);

  function save_detaials(){
    const Id = document.getElementById('select').value;
    const Text = document.getElementById('inputText').value;
    document.getElementById(Id).innerHTML = Text;
    alert(`${Id} has been changed to ${Text} sucessfully`)
}

Log.addEventListener("click", remover_user);

function remover_user () {
  localStorage.removeItem("Check");
  location.reload();
  Log.classList.remove('show')
}

subcribers.addEventListener("click" , admin );

function admin(){
  window.location.href = "admin.html"
}