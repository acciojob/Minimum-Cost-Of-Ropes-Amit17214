
  //your code here
	// Function to calculate the minimum cost of connecting ropes
function calculateMinCost(ropeLengths) {
  const ropeArray = ropeLengths.split(',').map((length) => parseInt(length.trim()));
  
  if (ropeArray.length < 2) {
    return 0; // If there are less than 2 ropes, no cost is incurred.
  }
  
  // Sort the rope lengths in ascending order
  ropeArray.sort((a, b) => a - b);

  let totalCost = 0;

  while (ropeArray.length > 1) {
    // Take the two shortest ropes
    const shortest1 = ropeArray.shift();
    const shortest2 = ropeArray.shift();

    // Calculate the cost of connecting them and add it to the total cost
    const cost = shortest1 + shortest2;
    totalCost += cost;

    // Put the newly created rope back into the array
    ropeArray.push(cost);

    // Re-sort the array to maintain the order
    ropeArray.sort((a, b) => a - b);
  }

  return totalCost;
}

// Get the input and result elements from the HTML
const inputElement = document.querySelector('input[type="text"]');
const resultElement = document.querySelector('#result');

// Listen for form submission (or any other appropriate event)
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting via traditional means
  
  const inputValues = inputElement.value;
  const minimumCost = calculateMinCost(inputValues);
  
  // Display the minimum cost in the result element
  resultElement.textContent = `Minimum Cost: ${minimumCost}`;
});

  
  
  
}  
