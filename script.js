document.addEventListener("DOMContentLoaded", () => {
  let scene = 1;
  let response = "";

  const gameContainer = document.getElementById("game-container");

  const renderScene = () => {
    switch (scene) {
      case 1:
        gameContainer.innerHTML = `
          <p>You arrive at the grand old manor, shrouded in mist. The door creaks open as you step inside. There are two hallways ahead.</p>
          <button onclick="handleChoice(2)">Follow the hallway to the left towards the library.</button>
          <button onclick="handleChoice(3)">Follow the hallway to the right towards the ballroom.</button>
        `;
        break;
      case 2:
        gameContainer.innerHTML = `
          <p>You enter the dusty library filled with ancient books. On the table, there’s an old diary with a note: "The key to the heart is hidden in the words." There are two more paths.</p>
          <button onclick="handleChoice(4)">Search the shelves for more clues.</button>
          <button onclick="handleChoice(5)">Open the secret door behind the bookshelf.</button>
        `;
        break;
      case 3:
        gameContainer.innerHTML = `
          <p>You enter the grand ballroom, its chandeliers glittering. In the corner, there’s a music box with a note: "Dance to the rhythm of the heart." There are two more paths.</p>
          <button onclick="handleChoice(6)">Dance around the ballroom.</button>
          <button onclick="handleChoice(7)">Explore the balcony overlooking the garden.</button>
        `;
        break;
      case 4:
        gameContainer.innerHTML = `
          <p>Among the shelves, you find a hidden compartment with a letter: "The heart’s secret lies in the light." There’s another choice to make.</p>
          <button onclick="handleChoice(8)">Light the old candle on the table.</button>
          <button onclick="handleChoice(9)">Look out the window for clues.</button>
        `;
        break;
      case 5:
        gameContainer.innerHTML = `
          <p>Behind the secret door, you find a staircase leading down to a hidden room. There’s a painting with a message: "Love is the greatest treasure." There’s another choice to make.</p>
          <button onclick="handleChoice(10)">Inspect the painting for hidden clues.</button>
          <button onclick="handleChoice(11)">Search the room for hidden objects.</button>
        `;
        break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
        gameContainer.innerHTML = `
          <p>You find yourself in a room with a single rose on a pedestal. A spotlight shines on it. A note beside it reads: "This journey was just the beginning. The true adventure is asking the question that has been in my heart all along."</p>
          <button onclick="handleChoice(12)">Reveal the question</button>
        `;
        break;
      case 12:
        gameContainer.innerHTML = `
          <p>You turn the note over, and it reads:</p>
          <p>"Will you be my girlfriend?"</p>
          <input type="text" placeholder="Type your response" oninput="handleResponseChange(event)">
          <p>Your response: ${response}</p>
        `;
        break;
      default:
        gameContainer.innerHTML = `<p>Something went wrong. Please refresh the page.</p>`;
    }
  };

  window.handleChoice = (nextScene) => {
    scene = nextScene;
    renderScene();
  };

  window.handleResponseChange = (e) => {
    response = e.target.value;
    renderScene();
  };

  renderScene();
});
