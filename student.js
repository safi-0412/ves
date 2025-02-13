const student = JSON.parse(localStorage.getItem("user"));
const studentBox = document.querySelector(".student__wrapper")
const logOutBtn =  document.querySelector(".reset");

if (student) {
    studentBox.innerHTML = `
        <img class="img" src="./images/av-code.png" alt="">
        <h2 class="h2">Darajalar</h2>
        <h2>⭐⭐⭐⭐⭐</h2>
        <p class="text2"> ${student.name}</p>
        <p class="text">${student.group} | ${student.teacher}
        <div class="xz">
        <div class="right">
        <img src="./images/Rectangle 2162.png" alt="">
        <p class="p">${student.coin}</p>
        </div>
        <div class="left">
        <img src="./images/Rectangle 2162 (1).png" alt="">
        <p class="p">${student.hp}</p>
        </div>
        </div>
    `;
    logOutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "./index.html";
        studentBox.innerHTML = "";
    });
}