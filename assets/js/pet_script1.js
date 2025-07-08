document.addEventListener('DOMContentLoaded', () => {
    // Function 1: Change background color based on button click (Event Listeners, Styling via JS)
    const colorButtons = document.querySelectorAll('.color-btn');
    const colorFeedback = document.getElementById('color-feedback');

    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedColor = this.dataset.color;
            document.body.style.backgroundColor = selectedColor;
            colorFeedback.textContent = `You chose ${selectedColor}!`;
            colorFeedback.style.color = selectedColor;
        });
    });

    // Function 2: Change image on button click (DOM Manipulation)
    const animalImage = document.getElementById('animal-image');
    const changeImageBtn = document.getElementById('change-image-btn');
    let currentImage = 1;

    changeImageBtn.addEventListener('click', () => {
        if (currentImage === 1) {
            animalImage.src = '../assets/pookie-2.jpeg';
            animalImage.alt = 'Another cute animal';
            currentImage = 2;
        } else {
            animalImage.src = '../assets/pookie-1.jpeg';
            animalImage.alt = 'Cute animal';
            currentImage = 1;
        }
    });

    // Function 3: Personalized message based on input (Variables + Functions, Respond to user input)
    const nameInput = document.getElementById('name-input');
    const personalizedMessage = document.getElementById('personalized-message');

    nameInput.addEventListener('input', updatePersonalizedMessage);

    function updatePersonalizedMessage() {
        let name = nameInput.value.trim();
        if (name === "") {
            personalizedMessage.textContent = "Hello there!";
            personalizedMessage.style.color = '#666';
        } else {
            personalizedMessage.textContent = `Hello, ${name}! Welcome to the Pet Personality Picker.`;
            personalizedMessage.style.color = '#4CAF50';
        }
    }
});
