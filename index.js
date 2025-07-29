const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector(".accordion-content");

        accordionContent.classList.toggle("active");

        if(accordionContent.classList.contains("active")) 
        {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }
        else
        {
            accordionContent.style.maxHeight = "0";
        }
    });
});