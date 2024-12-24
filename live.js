document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chatIcon");
    const ChatWidget = document.getElementById("ChatWidget");
    const zaloChatBtn = document.getElementById("fbChatBtn");
    const quickChatBtn = document.getElementById("quickChatBtn");
    const chatBox = document.getElementById("chatBox");
    const closeChatBox = document.getElementById("closeChatBox");
  
    // Hiển thị widget khi nhấn vào biểu tượng fb
    //chatIcon.addEventListener("click", function () {
      //ChatWidget.style.display = "block";
   // });

   // Lấy đối tượng của phần tử <a> và ChatWidget
const chatLink = document.getElementById("helps"); // Tìm thẻ <a> theo thuộc tính title
 // Tìm phần tử ChatWidget


 chatLink.addEventListener("click", function () {
  if (ChatWidget.style.display === "block") {
    ChatWidget.style.display = "none"; // Ẩn nếu đang hiện
  } else {
    ChatWidget.style.display = "block"; // Hiện nếu đang ẩn
  }
});

   
    chatIcon.addEventListener("click", function () {
      if (ChatWidget.style.display === "block") {
        ChatWidget.style.display = "none"; // Ẩn nếu đang hiện
      } else {
        ChatWidget.style.display = "block"; // Hiện nếu đang ẩn
      }
    });
    // Chat on Zalo
    zaloChatBtn.addEventListener("click", function () {
      window.open("https://www.facebook.com/vu.honganh.77985/", "_blank");
    });
  
    // Quick Chat
    quickChatBtn.addEventListener("click", function () {
      ChatWidget.style.display = "none";
      chatBox.style.display = "flex";
    });
  
    // Đóng khung chat
    closeChatBox.addEventListener("click", function () {
      chatBox.style.display = "none";
    });
  });
