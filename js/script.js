// 🔍 Search Bar Function
function searchPlayer() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const players = {
        "ahmed khan": "players/ahmed-khan.html",
        "bilal hussain": "players/bilal-hussain.html",
        "ali ahmed": "players/ali-ahmed.html",
        "mohammed usman": "players/mohammed-usman.html",
        "omar malik": "players/omar-malik.html",
        // ✅ Add more players here in the same format
    };

    if (players[input]) {
        window.location.href = players[input];
    } else {
        alert("Player not found. Please check the spelling.");
    }
}
