// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Selecting form and result elements
    const breakfastForm = document.getElementById('breakfast-form');
    const dinnerForm = document.getElementById('dinner-form');
    const breakfastResult = document.getElementById('breakfast-result');
    const dinnerResult = document.getElementById('dinner-result');

    // Function to handle form submission
    function handleSubmit(event, resultElement) {
        event.preventDefault(); // Prevent default form submission
        const recipeName = event.target.querySelector('input[type="text"]').value;
        const ingredients = event.target.querySelector('input[type="text"]:nth-of-type(2)').value;
        const rating = event.target.querySelector('input[type="number"]').value;

        // Display the result
        resultElement.innerHTML = `
            <p><strong>Recipe Name:</strong> ${recipeName}</p>
            <p><strong>Ingredients:</strong> ${ingredients}</p>
            <p><strong>Rating:</strong> ${rating}/10</p>
        `;
        
        // Clear the form fields after submission
        event.target.reset();
    }

    // Event listeners for form submissions
    breakfastForm.addEventListener('submit', function(event) {
        handleSubmit(event, breakfastResult);
    });

    dinnerForm.addEventListener('submit', function(event) {
        handleSubmit(event, dinnerResult);
    });
});
