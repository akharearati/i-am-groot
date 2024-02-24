const grootPhrases = [
    "I am Groot!",
    "I am Groot.",
    "I am Groot?",
    "I am Groot...",
    "I am Groot!!",
    "I am Groot..."
  ];
  
  function generateGrootMessage() {
    const grootMessage = document.getElementById("groot-message");
    const randomIndex = Math.floor(Math.random() * grootPhrases.length);
    grootMessage.textContent = grootPhrases[randomIndex];
  }
  