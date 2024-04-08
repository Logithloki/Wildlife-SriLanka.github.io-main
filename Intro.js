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

    display_text(data.title_2,"title");

    // Udawalawe National park
    
    display_text(data.sections_Intro[0].title_main,"Udawalawe_main");
    display_text(data.sections_Intro[0].title,"Udawalawe");
    display_text(data.sections_Intro[0].description,"description");

    display_text(data.sections_Intro[0].table.headings[0].Title_1,"Title_1");
    display_text(data.sections_Intro[0].table.headings[0].Title_2,"Title_2");
    display_text(data.sections_Intro[0].table.headings[0].Title_3,"Title_3");


    display_text(data.sections_Intro[0].table.data[0].Name,"Elephant");
    display_text(data.sections_Intro[0].table.data[0].Fun_Fact,"Elephant_Fact");

    display_text(data.sections_Intro[0].table.data[1].Name,"Leopard");
    display_text(data.sections_Intro[0].table.data[1].Fun_Fact,"Leopard_Fact");

    display_text(data.sections_Intro[0].table.data[2].Name,"Jackals");
    display_text(data.sections_Intro[0].table.data[2].Fun_Fact,"Jackals_Fact");

    display_text(data.sections_Intro[0].table.data[3].Name,"Crocodile");
    display_text(data.sections_Intro[0].table.data[3].Fun_Fact,"Crocodile_Fact");

    display_text(data.sections_Intro[0].table.data[4].Name,"Sloth");
    display_text(data.sections_Intro[0].table.data[4].Fun_Fact,"Sloth_Fact");

    display_text(data.sections_Intro[0].table.footer,"footer");

    display_text(data.sections_Intro[0].table.Gallery,"Gallery");



    // Bundala National park

    display_text(data.sections_Intro[1].title_main,"Bundala_main");
    display_text(data.sections_Intro[1].title,"Bundala");
    display_text(data.sections_Intro[1].description,"description_Bundala");

    display_text(data.sections_Intro[1].table.headings[0].Title_1,"Title_1_bun");
    display_text(data.sections_Intro[1].table.headings[0].Title_2,"Title_2_bun");
    display_text(data.sections_Intro[1].table.headings[0].Title_3,"Title_3_bun");


    display_text(data.sections_Intro[1].table.data[0].Name,"Monkey");
    display_text(data.sections_Intro[1].table.data[0].Fun_Fact,"Monkey_Fact");

    display_text(data.sections_Intro[1].table.data[1].Name,"Buffalo");
    display_text(data.sections_Intro[1].table.data[1].Fun_Fact,"Buffalo_Fact");

    display_text(data.sections_Intro[1].table.data[2].Name,"Jackals_bun");
    display_text(data.sections_Intro[1].table.data[2].Fun_Fact,"Jackals_bun_Fact");

    display_text(data.sections_Intro[1].table.data[3].Name,"Sambar");
    display_text(data.sections_Intro[1].table.data[3].Fun_Fact,"Sambar_Fact");

    display_text(data.sections_Intro[1].table.data[4].Name,"Mouse");
    display_text(data.sections_Intro[1].table.data[4].Fun_Fact,"Mouse_Fact");

    display_text(data.sections_Intro[1].table.footer,"footer_bun");

    display_text(data.sections_Intro[1].table.Gallery,"Gallery_bun");


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