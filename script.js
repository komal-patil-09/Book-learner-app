// Database of books and flashcards
const booksData = {
    habits: {
        title: "Atomic Habits - Chapter Flashcards",
        cards: [
            { chapter: "Chapter 1", front: "What is the core premise of aggregation of marginal gains?", back: "Small 1% improvements compound over time into remarkable results." },
            { chapter: "Chapter 2", front: "How do habits shape your identity?", back: "Every action you take is a vote for the type of person you wish to become." },
            { chapter: "Chapter 3", front: "What are the 4 Laws of Behavior Change?", back: "Make it obvious, make it attractive, make it easy, and make it satisfying." }
        ]
    },
    zero: {
        title: "Zero to One - Chapter Flashcards",
        cards: [
            { chapter: "Chapter 1", front: "What does going from 'Zero to One' mean in business?", back: "Building something entirely new (vertical progress/innovation) rather than copying what works (horizontal progress)." },
            { chapter: "Chapter 2", front: "Why are monopolies actually good according to Peter Thiel?", back: "Creative monopolies allow companies to care about ethics, quality, and long-term vision because they aren't fighting in a brutal price war." },
            { chapter: "Chapter 3", front: "What is the importance of secret values in startups?", back: "Every great business is built around a secret: something important that few people agree with you on." }
        ]
    }
};

// Get book parameter from URL
const urlParams = new URLSearchParams(window.location.search);
const bookKey = urlParams.get('book') || 'habits';
const currentBook = booksData[bookKey] || booksData.habits;

let currentIndex = 0;

// DOM Elements
const bookTitleEl = document.getElementById('book-title');
const chapterNumEl = document.getElementById('chapter-number');
const frontTextEl = document.getElementById('front-text');
const backTextEl = document.getElementById('back-text');
const counterEl = document.getElementById('counter');
const cardEl = document.getElementById('card');

// Initialize view
function loadCard() {
    bookTitleEl.innerText = currentBook.title;
    const cardData = currentBook.cards[currentIndex];
    chapterNumEl.innerText = cardData.chapter;
    frontTextEl.innerText = cardData.front;
    backTextEl.innerText = cardData.back;
    counterEl.innerText = `${currentIndex + 1} / ${currentBook.cards.length}`;
    
    // Ensure card is flipped back to front on change
    cardEl.classList.remove('flipped');
}

function flipCard() {
    cardEl.classList.toggle('flipped');
}

function nextCard() {
    if (currentIndex < currentBook.cards.length - 1) {
        currentIndex++;
        loadCard();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        loadCard();
    }
}

// Run on page load
loadCard();