const ringButtons = document.querySelectorAll(".ring-button");

for(let i = 0; i < ringButtons.length; i++) {
    const ringBtn = ringButtons[i];
    ringBtn.addEventListener("click", function(event) {
        const color = event.target.id.replace("-color", "");
        console.log(color)
        
        console.log(color);
        for(let j = 0; j < ringButtons.length; j++) {
            ringButtons[j].classList.remove("border-purple-500");
            ringButtons[i].classList.add("border-gray-100");
        }
        // color add test
        event.target.classList.add("border-purple-500");
        event.target.classList.remove("border-gray-100");

        const productImage = document.getElementById("product-image");
        productImage.src = '../images/teal.png';
    });

}

