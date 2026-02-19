const currentPage = document.body.className;

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    if(item.getAttribute("href").includes(currentPage.replace("page-",""))){
        item.classList.add("active");
    }
});