const Email = document.getElementById("Email");
const Pass = document.getElementById("Password");
const emailerror =document.getElementById("Eerror")
const passerror =document.getElementById("perror")
const btnlogin = document.getElementById("btnl")

btnlogin.addEventListener("click",(event)=>{
    let valid = true;
    event.preventDefault();

    emailerror.style.display = "none";
    emailerror.textContent = "";

    passerror.style.display = "none";
    passerror.textContent = "";

    if(Email.value.trim() === ""){
        Email.classList.add("border","border-danger" , "border-2");
        valid = false;

    }else if(!Email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailerror .style.display="block";
        emailerror  .textContent="pleas Enter email valied adress!";
            isvalied = false;
    }

    const username = Email.value.split("@")[0]; 
    localStorage.setItem("username", username);
    sessionStorage.setItem("Password",Pass.value);

 if(Pass.value.trim() === ""){
        Pass.classList.add("border","border-danger" , "border-2");
        valid = false;

    }else if(Pass.value.length<8){
        passerror .style.display="block";
        passerror.textContent="Password must be at least 8 characters!";
        isvalied = false;
    
    }
   window.location.href = "Home.html"
})

Email.addEventListener("input" , ()=>{
    Email .classList.remove("border-danger");
    Email.classList.add("border-success");


})
Pass.addEventListener("input" , ()=>{
    Pass.classList.remove("border-danger");
    Pass.classList.add("border-success");
})