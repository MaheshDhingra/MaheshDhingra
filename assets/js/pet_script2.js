document.addEventListener('DOMContentLoaded', () => {
    // Function 1: Respond to select input (Conditionals, Respond to user input)
    const activitySelect = document.getElementById('activity-select');
    const activityFeedback = document.getElementById('activity-feedback');

    activitySelect.addEventListener('change', function() {
        const selectedActivity = this.value;
        let message = "";
        let color = "#555";

        if (selectedActivity === "relax") {
            message = "You have a calm and peaceful pet personality, like a purring cat!";
            color = "#28a745";
        } else if (selectedActivity === "adventure") {
            message = "You have an adventurous and energetic pet personality, like a playful dog!";
            color = "#ffc107";
        } else if (selectedActivity === "social") {
            message = "You have a social and friendly pet personality, like a chirpy bird!";
            color = "#17a2b8";
        } else {
            message = "Select an activity to see your personality trait!";
            color = "#555";
        }
        activityFeedback.textContent = message;
        activityFeedback.style.color = color;
    });

    // Function 2: Toggle fun fact visibility (DOM Manipulation, Styling via JS)
    const toggleFactBtn = document.getElementById('toggle-fact-btn');
    const funFact = document.getElementById('fun-fact');

    toggleFactBtn.addEventListener('click', () => {
        if (funFact.style.display === 'none') {
            funFact.style.display = 'block';
            toggleFactBtn.textContent = 'Hide Fact';
        } else {
            funFact.style.display = 'none';
            toggleFactBtn.textContent = 'Show Fact';
        }
    });

    // Function 3: Increment/Decrement pet count (Variables + Functions, Respond to user input)
    const decrementBtn = document.getElementById('decrement-btn');
    const incrementBtn = document.getElementById('increment-btn');
    const petCountSpan = document.getElementById('pet-count');
    const petCountMessage = document.getElementById('pet-count-message');
    let petCount = 0;

    function updatePetCountDisplay() {
        petCountSpan.textContent = petCount;
        if (petCount === 0) {
            petCountMessage.textContent = "How many pets do you wish you had?";
            petCountMessage.style.color = '#666';
        } else if (petCount === 1) {
            petCountMessage.textContent = `You wish you had ${petCount} pet.`;
            petCountMessage.style.color = '#4CAF50';
        } else {
            petCountMessage.textContent = `You wish you had ${petCount} pets.`;
            petCountMessage.style.color = '#4CAF50';
        }
    }

    decrementBtn.addEventListener('click', () => {
        if (petCount > 0) {
            petCount--;
            updatePetCountDisplay();
        }
    });

    incrementBtn.addEventListener('click', () => {
        petCount++;
        updatePetCountDisplay();
    });

    updatePetCountDisplay(); // Initial display
});
