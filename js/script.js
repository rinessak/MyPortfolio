// Greeting function

function displayGreeting() {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good Morning';
    } else if (hours < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    const messageElement = document.getElementById('greetingMessage');
    messageElement.textContent = `${greeting}! Welcome to my portfolio.`;

    messageElement.classList.add('show');

    setTimeout(() => {
        messageElement.classList.remove('show');
    }, 7000);
}


// Local Storage Function use

function generateQuote() {
    const quotes = [
        "Coding like poetry should be short and concise.", 
        "It’s not a bug; it’s an undocumented feature", 
        "First, solve the problem. Then, write the code.",
        "Code is like humor. When you have to explain it, it’s bad.",
        "Make it work, make it right, make it fast",
        "Clean code always looks like it was written by someone who cares.",
        "Programming is the art of algorithm design and the craft of debugging errant code.",
        "Confusion is part of programming."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("quote").innerText = randomQuote;

    localStorage.setItem("lastQuote", randomQuote);
}

function displayQuote() {
    const storedQuote = localStorage.getItem("lastQuote");
    if (storedQuote) {
        document.getElementById("quote").innerText = storedQuote;
    } else {
        generateQuote();
    }
}

window.addEventListener("load", displayGreeting);
window.addEventListener("load", displayQuote);
