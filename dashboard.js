const showPopup = document.getElementById('show-popup');
const popupContainer = document.getElementById('popup-container');
const closeBtn = document.getElementById('close-popup');


showPopup.addEventListener("click" , open );
closeBtn.addEventListener("click" , close );

function open (){
    popupContainer.classList.add('active');
}

function close (){
    popupContainer.classList.remove('active');
}


// showPopup.onclick = () => {
// }
// closeBtn.onclick = () => {
//     popupContainer.classList.remove('active');
// }