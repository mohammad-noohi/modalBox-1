/* 
explain modal box (popup) project :

1- click on button to show modal
2- show modal with background blur or darker background and show with animation
3- close the modal when :
 - user click on close icon
 - user click outside of modal
 - user press esc key



*/

const $ = document;
const btn = $.querySelector(".hero-btn");
const modalBox = $.querySelector(".modal-wrapper");
const closeModalIcon = $.querySelector(".close-modal");
const modalBg = $.querySelector(".modal-bg");

/* show modal */
btn.addEventListener("click", function () {
  modalBox.classList.add("show-modal");
});

/* close modal */
$.addEventListener("click", function (event) {
  if(event.target.className === 'modal-wrapper show-modal' || event.target.className === 'close-modal'){
    modalBox.classList.remove("show-modal");
  }
});

$.addEventListener("keyup",function(event){
  if(event.key === 'Escape'){
    modalBox.classList.remove("show-modal");
  }
})

