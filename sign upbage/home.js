function displayUserInfo(event) {
 
    const username = localStorage.getItem("username") ||"Guest" ;
    document.getElementById("wu").textContent =`Welcome ,${username} `;
}

window.onload = function() {
    displayUserInfo(); 
}
