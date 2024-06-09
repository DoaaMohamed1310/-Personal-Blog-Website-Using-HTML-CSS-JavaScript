// start navbar
let activeLink=document.querySelectorAll(".navbar-expand-lg .navbar-nav .nav-link")
activeLink.forEach(element=>{
    element.onclick=function(){
        activeLink.forEach(element=>element.classList.remove("active-link"))
        element.classList.add("active-link")
    }
})
let arrowGalaryTop=document.querySelector(".landing .container .top")

// sticky Navbar
function stickyNav() {
    var headerHeight = document.querySelector("#landing").offsetHeight / 2;
    var navbar = document.querySelector(".navbar");
    var scrollValue = window.scrollY;    
    if (scrollValue > headerHeight) {
        navbar.classList.add("header-sticky");
        arrowGalaryTop.style.visibility="visible"
    } else if (scrollValue < headerHeight) {
        navbar.classList.remove("header-sticky");
        arrowGalaryTop.style.visibility="hidden"

    }
}
window.addEventListener("scroll", stickyNav);
// end navbar
// start topic
let arrowGalary=document.querySelectorAll(".landing .topics .topics-text div i")
let imageGalary=document.querySelector(".landing .topics .carousal")
let fristCard=imageGalary.querySelector(".box-img").offsetWidth;

arrowGalary.forEach(btn => {
    btn.addEventListener("click", () => {
        imageGalary.scrollLeft += btn.id === "left"? -fristCard-30 :fristCard+30;
    });
});
// end topic

arrowGalaryTop.addEventListener("click",()=>{
    window.scrollTo(0, 0);
})