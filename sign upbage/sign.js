const FirstN = document.getElementById("FirstN");
const LastN = document.getElementById("LastN");
const Email = document.getElementById("InputEmail1");
const Pass = document.getElementById("InputPassword1");
const confirm = document.getElementById("confirmPassword1");
const btnsign = document.getElementById("btns");
const errorspan= document.getElementById("merror");
const errorpass =document.getElementById("Error")
const errorconfirm =document.getElementById("cerror")
  

btnsign.addEventListener("click" , (event)=>{
    let valid = true;
    event.preventDefault()

    errorspan.style.display = "none";
    errorspan.textContent = "";

    errorpass.style.display = "none";
    errorpass.textContent = "";

    errorconfirm.style.display = "none";
    errorconfirm.textContent = "";

    if(FirstN.value.trim() === ""){
        FirstN.classList.add("border","border-danger" , "border-2");
        valid = false;
    }

    if(LastN.value.trim() === ""){
        LastN.classList.add("border","border-danger" , "border-2");
        valid = false;

    }

    if(Email.value.trim() === ""){
        Email.classList.add("border","border-danger" , "border-2");
        valid = false;

    }else if(!Email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            errorspan.style.display="block";
            errorspan.textContent="pleas Enter email valied adress!";
            isvalied = false;
    }

   
   

    if(Pass.value.trim() === ""){
        Pass.classList.add("border","border-danger" , "border-2");
        valid = false;

    }else if(Pass.value.length<8){
        errorpass.style.display="block";
        errorpass.textContent="Password must be at least 8 characters!";
        isvalied = false;
    
    }

    if(confirm.value.trim() === ""){
        confirm .classList.add("border","border-danger" , "border-2");
        valid = false;

    }  else if (confirm.value !== Pass.value) {
        errorconfirm .style.display = "block";
        errorconfirm .textContent = "Passwords do not match!";
        valid = false; }




    


    // if(valid == false){
    //     event.preventDefault();
    // }
    // else{

    // }


})


FirstN.addEventListener("input" , ()=>{
    FirstN.classList.remove("border-danger");
    FirstN.classList.add("border-success");


})


LastN.addEventListener("input" , ()=>{
    LastN.classList.remove("border-danger");
    LastN.classList.add("border-success");


})

Email.addEventListener("input" , ()=>{
    Email .classList.remove("border-danger");
    Email.classList.add("border-success");


})

Pass.addEventListener("input" , ()=>{
    Pass.classList.remove("border-danger");
    Pass.classList.add("border-success");
})

confirm.addEventListener("input" , ()=>{
    confirm.classList.remove("border-danger");
    confirm .classList.add("border-success");
})

