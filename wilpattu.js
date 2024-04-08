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

    display_text(data.title_6,"title");

    
    display_text(data.sections_wilpattu[0].title,"Wilpattu");
    display_text(data.sections_wilpattu[0].subtitle,"Sub");
    console.log(data.sections_wilpattu[0].subtitle)


    display_text(data.sections_wilpattu[0].sections[0].title,"Welcome");
    display_text(data.sections_wilpattu[0].sections[0].description,"Welcome_des");

    display_text(data.sections_wilpattu[0].sections[1].title,"about");
    display_text(data.sections_wilpattu[0].sections[1].description,"about_des");

    display_text(data.sections_wilpattu[0].sections[2].title,"BW");
    display_text(data.sections_wilpattu[0].sections[2].description,"Bird_des");

    display_text(data.sections_wilpattu[0].sections[3].title,"LST");
    display_text(data.sections_wilpattu[0].sections[3].description,"Tour_des");

    display_text(data.sections_wilpattu[0].sections[4].title,"Wil");
    display_text(data.sections_wilpattu[0].sections[4].subpoint,"subpoint");
    display_text(data.sections_wilpattu[0].sections[4].description[0].point,"First_point");
    display_text(data.sections_wilpattu[0].sections[4].description[1].point,"second_point");
    display_text(data.sections_wilpattu[0].sections[4].description[2].point,"third_point");


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