document.addEventListener("DOMContentLoaded", () => {
    // Simulate fetching news
    const newsList = document.getElementById("news-list");
    const newsItems = [
        "New Game Release: XYZ",
        "E-Sports Championship Updates",
        "Top 10 Games of 2024"
    ];
    
    newsItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        newsList.appendChild(li);
    });
});

function showGameDetails(gameId) {
    const detailsContent = document.getElementById("details-content");
    switch(gameId) {
        case 'game1':
            detailsContent.textContent = "Details about Game 1...";
            break;
        case 'game2':
            detailsContent.textContent = "Details about Game 2...";
            break;
        case 'game3':
            detailsContent.textContent = "Details about Game 3...";
            break;
        default:
            detailsContent.textContent = "Click on a game to see the details.";
    }
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
}
