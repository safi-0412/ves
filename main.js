let spaceForm = document.querySelector(".formSpace");
let spaceLogin = document.querySelector(".login");
let spaceParol = document.querySelector(".parol");
let spaceEye = document.querySelector(".koz");
let btn = document.querySelector(".submit");
let errorMsg = document.querySelector(".error-msg"); 

spaceEye.addEventListener("mousedown" , (evt) => {
   evt.preventDefault();
   spaceParol.setAttribute("type" , "text");

})

spaceEye.addEventListener("mouseup" , (evt) => {
    evt.preventDefault();
    spaceParol.setAttribute("type" , "password");
 })

 spaceForm.addEventListener("submit", (bot) => {
    bot.preventDefault();
    let login = Number(spaceLogin.value.trim());
    let parol = Number(spaceParol.value.trim());

    let topilganStudent = null;

    oquvchilar.forEach(oquvchi =>{
        if(oquvchi.id === login && oquvchi.password === parol){
            topilganStudent = oquvchi;
            // console.log(topilganStudent);
        }
        if(topilganStudent){
            localStorage.setItem("user", JSON.stringify(topilganStudent))
            window.location.href = "./student.html";
        }
    })
    if(topilganStudent){
        errorMsg.style.display = "none";
        localStorage.setItem("user", JSON.stringify(topilganStudent));
    }else{
        errorMsg.style.display = "block";
        errorMsg.textContent = "Login va parol xato!";
        localStorage.removeItem("user");
    }


    spaceLogin.value = "";
    spaceParol.value = "";
 })

 function ochiribYoqish () {
    if(spaceLogin.value && spaceParol.value){
        btn.style.background = "orange";
        btn.disabled = false;
    }
    else{
        btn.style.background = "lightgray";
        btn.disabled = true;
    }
}

spaceLogin.addEventListener("input", ochiribYoqish);
spaceParol.addEventListener("input", ochiribYoqish);
