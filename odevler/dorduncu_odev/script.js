document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close-button");

    const foodsContainerObject = document.getElementById("foods");

    const loadFoods = (foods) => {
        foods.forEach((item) => {
            const foodCard = document.createElement("div");
            foodCard.className = "product-card";

            const foodImage = document.createElement("img");
            foodImage.src = item.photoUrl;
            foodImage.className = "image-container";

            const foodTitle = document.createElement("span");
            foodTitle.textContent = item.title;

            const detailsButton = document.createElement("button");
            detailsButton.className = "details-button";
            detailsButton.textContent = "Detay gör";
            detailsButton.onclick = () => showDetails(item);

            foodCard.appendChild(foodImage);
            foodCard.appendChild(foodTitle);
            foodCard.appendChild(detailsButton);

            foodsContainerObject.appendChild(foodCard);
        });
    };

    const showDetails = (item) => {
        const modalTitle = modal.querySelector("h2");
        const modalImage = modal.querySelector("img");
        const modalDescription = modal.querySelector("p");

        modalTitle.textContent = item.title;
        modalImage.src = item.photoUrl;
        modalDescription.textContent = item.description;

        modal.style.display = "block";
    };

    closeModal.addEventListener("click", function () {
        console.log("Close button clicked");
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            console.log("Outside modal clicked");
            modal.style.display = "none";
        }
    });

    fetch("http://localhost/index.php")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            loadFoods(res);
        })
        .catch((err) => {
            console.log(err);
        });
});
