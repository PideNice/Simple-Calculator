// Selecting Elements with JavaScript
const display = document.getElementById('display'); // display is the input field where numbers and results are shown.
const buttons = document.querySelectorAll('.btn'); // // Returns all elements that match a specified CSS selector.

// Looping Through Buttons and Adding Event Listeners
buttons.forEach(button => { // The forEach() method goes through each button selected.
    button.addEventListener('click', () => { // The addEventListener() method attaches an event handler to each button.
        const value = button.textContent; // The textContent property sets or returns the text content of the clicked button.
        if (value === 'Clear') {
            display.value = ''; // Clear the display
        } else if (value === '=') {
            // Evaluate the expression
            try {
                display.value = eval(display.value); // The eval() function evaluates JavaScript code represented as a string.
            } catch {
                display.value = 'Error'; // Display an error message
            }
        } else {
            display.value += value; // Appends the clicked button's value to the display
        }
    });
});
