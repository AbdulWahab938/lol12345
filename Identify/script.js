document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector(".card-container");

    cardContainer.addEventListener("click", event => {
        const card = event.target.closest(".card");
        if (card) {
            const category = card.getAttribute("data-category");
            handleCardClick(category);
        }
    });
});

function handleCardClick(category) {
    switch (category) {
        case 'objects':
            window.location.href = 'identify_objects_game.html';
            break;
        case 'animals':
            window.location.href = 'animals.html';
            break;
        case 'colors':
            window.location.href = 'colors.html';
            break;
        case 'shapes':
            window.location.href = 'shapes.html';
            break;
        default:
            console.error("Unknown category");
    }
}

function displayMessage(message) {
    alert(message);
    // You can replace this alert with actual content loading logic
}
