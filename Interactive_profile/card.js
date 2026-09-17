const lk = document.getElementById("lk");
const heart = document.querySelector(".ri-poker-hearts-fill");
let val=document.querySelector("#val")
let v=Number(val.innerHTML)
let isLiked = false;

lk.addEventListener("click", () => {

    isLiked = !isLiked;

    if (isLiked) {
        // lk.textContent = "Liked";
        lk.style.color = "white";
        lk.style.backgroundColor = "red";
        v++;
        lk.firstChild.textContent = "Liked  " +v;
        val.textContent=v
        val.style.color="red";
        
        
    } 
    else {
        lk.textContent = "Like";
        lk.style.color = "red";
        lk.style.backgroundColor = "white"; 
        v--;
        lk.firstChild.textContent ="Like  "+ v;
        val.textContent=v;
        val.style.color="red"
    }
});
const b = document.body;
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", () => {
    b.classList.toggle("dark-mode");
});

const modalpop = document.getElementById("popup");
const openModal = document.getElementById("openModal");
const closeBtn = document.getElementById("closebtn");

openModal.addEventListener("click", () => {
    modalpop.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modalpop.style.display = "none";
});

modalpop.addEventListener("click", (e) => {
     
    if (e.target === modalpop) {
        modalpop.style.display = "none";
    }

});