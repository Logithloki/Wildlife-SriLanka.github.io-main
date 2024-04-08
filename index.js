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

    display_text(data.title_1,"title");

    display_text(data.sections[0].title,"Wildlife");
    display_text(data.sections[0].content,"WildLife_Content");

    display_text(data.sections[1].title,"Mammals");
    display_text(data.sections[1].content[0].content_1,"Mammals_Content_1");
    display_text(data.sections[1].content[0].content_2,"Mammals_Content_2");

    display_text(data.sections[2].title,"Birds");
    display_text(data.sections[2].content[0].content_1,"Birds_Content_1");
    display_text(data.sections[2].content[0].content_2,"Birds_Content_2");

    display_text(data.sections[3].title,"Reptiles");
    display_text(data.sections[3].content[0].content_1,"Reptiles_Content_1");
    display_text(data.sections[3].content[0].content_2,"Reptiles_Content_2");

    display_text(data.sections[4].title,"Marine");
    display_text(data.sections[4].content[0].content_1,"Marine_Content_1");
    display_text(data.sections[4].content[0].content_2,"Marine_Content_2");

    display_text(data.sections[5].title,"Explore");

        display_text(data.sections[5].items[0].title,"Safaris");
        display_text(data.sections[5].items[0].details[0].point_1,"Safaris_point_1");
        display_text(data.sections[5].items[0].details[0].point_2,"Safaris_point_2");

        display_text(data.sections[5].items[1].title,"Leopard");
        display_text(data.sections[5].items[1].details[0].point_1,"Leopard_point_1");
        display_text(data.sections[5].items[1].details[0].point_2,"Leopard_point_2");

        display_text(data.sections[5].items[2].title,"Elephant");
        display_text(data.sections[5].items[2].details[0].point_1,"Elephant_point_1");
        display_text(data.sections[5].items[2].details[0].point_2,"Elephant_point_2");

        display_text(data.sections[5].items[3].title,"Bird");
        display_text(data.sections[5].items[3].details[0].point_1,"Bird_point_1");
        display_text(data.sections[5].items[3].details[0].point_2,"Bird_point_2");
        display_text(data.sections[5].items[3].details[0].point_3,"Bird_point_3");

        display_text(data.sections[5].items[4].title,"Bear");
        display_text(data.sections[5].items[4].details[0].point_1,"Bear_point_1");
        display_text(data.sections[5].items[4].details[0].point_2,"Bear_point_2");

    // Footer

    display_text(data.Footer[0].footer_head,"footer_head");
    display_text(data.Footer[0].footer_link,"footer_link");
    display_text(data.Footer[0].footer_contact,"footer_contact");
    display_text(data.Footer[0].footer_news,"footer_news");

    localStorage.setItem("Home" ,JSON.stringify(data));
    // console.log("HI");
    // console.log(localStorage);


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