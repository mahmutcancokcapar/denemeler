document.addEventListener("DOMContentLoaded", function () {
	const modal = document.getElementById("modal");
	const closeModal = document.getElementById("close-button");

	const marketUrunleriContainer = document.getElementById("marketUrunleri");

	const loadMarketUrunleri = (marketUrunleri) => {
		marketUrunleri.forEach((item) => {
			const urunCard = document.createElement("div");
			urunCard.className = "product-card";

			const urunImage = document.createElement("img");
			urunImage.src = item.image;
			urunImage.className = "image-container";

			const urunTitle = document.createElement("span");
			urunTitle.textContent = item.title;
			urunTitle.className = "product-title";

			const urunFiyat = document.createElement("span");
			urunFiyat.textContent = `Fiyat: ${item.price}`;
			urunFiyat.className = "product-price";

			const detailsButton = document.createElement("button");
			detailsButton.className = "details-button";
			detailsButton.textContent = "Detay gör";
			detailsButton.onclick = () => showDetails(item);

			urunCard.appendChild(urunImage);
			urunCard.appendChild(urunTitle);
			urunCard.appendChild(urunFiyat);
			urunCard.appendChild(detailsButton);

			marketUrunleriContainer.appendChild(urunCard);
		});
	};

	const showDetails = (item) => {
		const modalTitle = modal.querySelector("h2");
		const modalImage = modal.querySelector("img");
		const modalDescription = modal.querySelector("p");

		modalTitle.textContent = item.title;
		modalImage.src = item.image;
		modalDescription.innerHTML = `
			<p>${item.description}</p>
			<p>Fiyat: ${item.price}</p>
			<p>Rating: ${item.rating.rate} (${item.rating.count} oy)</p>
		`;

		modal.style.display = "block";
	};

	closeModal.addEventListener("click", function () {
		modal.style.display = "none";
	});

	window.addEventListener("click", function (event) {
		if (event.target === modal) {
			modal.style.display = "none";
		}
	});

	fetch("https://fakestoreapi.com/products")
		.then((res) => res.json())
		.then((res) => {
			loadMarketUrunleri(res);
		})
		.catch((err) => {
			console.log(err);
		});
});
