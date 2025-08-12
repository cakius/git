
const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

window.onload = () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    const accordionContents = document.querySelectorAll(".accordion-content");

    accordionContents.forEach((content) => {
        if (content.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });

    accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const accordionItem = header.parentElement;
            const accordionContent = accordionItem.querySelector(".accordion-content");

            accordionContent.classList.toggle("active");

            if (accordionContent.classList.contains("active")) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                accordionContent.style.maxHeight = "0";
            }
        });
    });
};

function toggleSidebar(){
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");

    closeAllSubMenus();
}

function toggleSubMenu(button){

    if(!button.nextElementSibling.classList.contains("show")){
        closeAllSubMenus();
    }
    
    button.nextElementSibling.classList.toggle("show");
    button.classList.toggle("rotate");

    if(sidebar.classList.contains("close")){
        sidebar.classList.toggle("close");
        toggleButton.classList.toggle("rotate");
    }
}

function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName("show")).forEach(ul => {
        ul.classList.remove("show");
        ul.previousElementSibling.classList.remove("rotate");
    })
}
