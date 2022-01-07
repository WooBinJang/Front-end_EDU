let chat_img_box = document.querySelector(".chat-img-box");
let chat_box = document.querySelector(".chat-box");

function chat_box_onoff(e) {
  chat_box.classList.toggle("blind");
}

chat_img_box.addEventListener("click", chat_box_onoff);
