document.addEventListener("DOMContentLoaded", () => {
	const apiUrl = "http://127.0.0.1:3000";
	const noteElements = document.getElementById("notes");
	const addButton = document.getElementById("add-button");
	const newTodoInput = document.getElementById("new-todo");

	// Notları çekmek
	const loadNotes = () => {
		fetch(apiUrl)
			.then((res) => res.json())
			.then((res) => {
				noteElements.innerHTML = ""; // Clear previous content
				if (res.payload.length === 0) {
					noteElements.innerHTML =
						"<div id='no-notes'>Henüz not eklenmediğiniz</div>";
				} else {
					res.payload.forEach((item) => {
						noteElements.innerHTML += `
                            <div class="notes-component" data-id="${item.id}">
                                <div class="not">
                                    <span>${item.not}</span>
                                </div>
                                <div class="buttons">
                                    <button class="edit-btn">✏️</button>
                                    <button class="delete-btn">🗑️</button>
                                </div>
                            </div>
                        `;
					});
				}
			})
			.catch((err) => {
				alert(err.message);
				console.error(err);
			});
	};

	// Yeni not eklemek
	addButton.addEventListener("click", () => {
		const newTodo = newTodoInput.value.trim();
		if (newTodo) {
			fetch(apiUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ not: newTodo }),
			})
				.then(() => {
					newTodoInput.value = "";
					loadNotes();
				})
				.catch((err) => {
					alert(err.message);
					console.error(err);
				});
		}
	});

	// Notların düzenlenmesi ve silinmesi
	noteElements.addEventListener("click", (e) => {
		const target = e.target;
		const noteComponent = target.closest(".notes-component");
		if (!noteComponent) return;
		const noteId = noteComponent.getAttribute("data-id");

		if (target.classList.contains("delete-btn")) {
			fetch(`${apiUrl}/${noteId}`, {
				method: "DELETE",
			})
				.then(() => {
					loadNotes();
				})
				.catch((err) => {
					alert(err.message);
					console.error(err);
				});
		}

		if (target.classList.contains("edit-btn")) {
			const newContent = prompt(
				"Yeni notu girin:",
				noteComponent.querySelector(".not span").textContent
			);
			if (newContent !== null) {
				fetch(`${apiUrl}/${noteId}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ not: newContent }),
				})
					.then(() => {
						loadNotes();
					})
					.catch((err) => {
						alert(err.message);
						console.error(err);
					});
			}
		}
	});

	loadNotes();
});
