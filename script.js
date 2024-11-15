document.getElementById('generateBtn').addEventListener('click', generateFunFact);

function generateFunFact() {
    const facts = [
        "You find peace and joy in natural landscapes like parks, mountains, and beaches.",
        "You love snow and likely enjoy winter activities or the tranquility of snowy landscapes.",
        "You lead an active lifestyle, engaging with diverse outdoor environments."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    document.getElementById('factDisplay').textContent = randomFact;
}
