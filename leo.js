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

    display_text(data.title_4,"title");

    
    display_text(data.sections_leo[0].title,"Leopard");



    // Venues

    display_text(data.sections_leo[0].sections[0].title,"VENUES");
        
        display_text(data.sections_leo[0].sections[0].locations[0].name,"Kumana");
        display_text(data.sections_leo[0].sections[0].locations[0].description,"Kumana_des");

        display_text(data.sections_leo[0].sections[0].locations[1].name,"Singhagiri");
        display_text(data.sections_leo[0].sections[0].locations[1].description,"Singhagiri_des");

        display_text(data.sections_leo[0].sections[0].locations[2].name,"Horton");
        display_text(data.sections_leo[0].sections[0].locations[2].description,"Horton_des");

    
    // Threats

    display_text(data.sections_leo[0].sections[1].title,"Threats");

        display_text(data.sections_leo[0].sections[1].threats[0].title,"Exploitation");
        display_text(data.sections_leo[0].sections[1].threats[0].description,"Exploitation_des");

        display_text(data.sections_leo[0].sections[1].threats[1].title,"Loss");
        display_text(data.sections_leo[0].sections[1].threats[1].description,"Loss_des");


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