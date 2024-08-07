document.addEventListener("DOMContentLoaded", () => {
    const productTypeElements = document.querySelectorAll(".producttypes .p1");
    const categories = ["fans", "light", "wires", "mcb", "switchgears", "geysers"];

    productTypeElements.forEach(element => {
        element.addEventListener("click", () => {
            // Remove the active class from all product type elements
            productTypeElements.forEach(el => el.classList.remove("active2"));
            
            // Add the active class to the clicked element
            element.classList.add("active2");
            
            // Hide all categories
            categories.forEach(category => {
                const categoryElements = document.querySelectorAll(`.${category}`);
                categoryElements.forEach(catEl => catEl.style.display = "none");
            });

            // Show the selected category
            const targetCategory = element.getAttribute("data-target");
            const targetElements = document.querySelectorAll(`.${targetCategory}`);
            targetElements.forEach(targetEl => targetEl.style.display = "flex");
        });
    });

    // Initially hide all categories except 'fans'
    categories.forEach(category => {
        if (category !== "fans") {
            const categoryElements = document.querySelectorAll(`.${category}`);
            categoryElements.forEach(catEl => catEl.style.display = "none");
        }
    });
});
