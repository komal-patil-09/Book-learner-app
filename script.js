// Master Database with Complete 18-Book Chapters and Takeaways
const booksData = {
    easy_money: {
        title: "The Lords of Easy Money",
        author: "Christopher Leonard",
        cards: [
            { chapter: "Chapter 1: Going Below Zero", front: "What was the impact of zero interest rate policies (ZIRP)?", back: "The Federal Reserve's deployment of ZIRP and experimental tools launched an uncharted era of radical financial intervention." },
            { chapter: "Chapter 2: The Money Machine", front: "How did central bank balance sheets change?", back: "Central bank balance sheets expanded to unprecedented proportions, converting the Fed into an active market maker that distorted normal pricing signals." },
            { chapter: "Chapter 3: ZIRP and Its Consequences", front: "What did artificially suppressed borrowing costs trigger?", back: "They triggered massive corporate debt accumulation and encouraged a reckless market-wide 'reach for yield'." },
            { chapter: "Chapter 4: Thomas Hoenig's Dissent", front: "What did Federal Reserve official Thomas Hoenig predict?", back: "He correctly predicted that loose money would breed severe wealth inequality and asset bubbles despite institutional groupthink." },
            { chapter: "Chapter 5: The 2008 Financial Crisis", front: "What happened to emergency post-crisis measures?", back: "They became permanent policies, shielding unelected technocrats from public accountability while centralizing immense economic power." },
            { chapter: "Chapter 6: The Risk Engine", front: "Where did cheap liquidity force institutional investors?", back: "Extended cheap liquidity forced investors into hyper-risky financial structures like leveraged loans and collateralized loan obligations (CLOs)." },
            { chapter: "Chapter 7: The Wealth Gap Expansion", front: "Who benefited most from pumping liquidity into asset markets?", back: "It disproportionately enriched capital holders and corporations, widening the chasm between asset owners and wage earners." },
            { chapter: "Chapter 8: The Fragile Ecosystem", front: "What did prolonged central bank support create?", back: "It created an addictive dependency, making the entire financial system incapable of surviving without constant monetary life support." },
            { chapter: "Chapter 9: The Reckoning", front: "Can artificially engineered stability last forever?", back: "No; suppressing market corrections ultimately sets the stage for systemic inflation and severe economic instability." }
        ]
    },
    ignited_minds: {
        title: "Ignited Minds / Wings of Fire",
        author: "Dr. A.P.J. Abdul Kalam",
        cards: [
            { chapter: "Chapter 1: The Vision Ignited", front: "Where does a nation’s true wealth lie?", back: "A nation’s true wealth lies in the creative energy and empowered mindset of its youth." },
            { chapter: "Chapter 2: Building the Nation", front: "What does true development require?", back: "True development requires moving away from complacent fatalism toward active, science-driven national problem-solving." },
            { chapter: "Chapter 3: Teachers and Parents as Role Models", front: "How are character and integrity built?", back: "Character, integrity, and ethical responsibility are built early in life through direct mentorship and example." },
            { chapter: "Chapter 4: Leadership and Integrity", front: "What defines authentic leaders?", back: "Authentic leaders combine moral courage with a long-term commitment to public welfare over self-interest." },
            { chapter: "Chapter 5: Knowledge as Power", front: "What does accessible high-quality education achieve?", back: "It transforms societies from passive consumers of technology into active creators of innovation." },
            { chapter: "Chapter 6: The Spirit of Inquiry", front: "What unlocks breakthrough achievements?", back: "Cultivating scientific curiosity and questioning status-quo assumptions unlock breakthrough achievements." }
        ]
    },
    bolt: {
        title: "Faster Than Lightning",
        author: "Usain Bolt",
        cards: [
            { chapter: "Chapter 1: Country Boy and Early Roots", front: "What helps handle sudden global fame?", back: "Modest beginnings and strong family discipline instill the core grounding necessary to handle sudden global fame." },
            { chapter: "Chapter 2: Discovering Speed at Waldensia", front: "Is raw natural talent enough?", back: "Raw natural talent provides a starting edge, but it must be met with structured discipline to avoid squandering potential." },
            { chapter: "Chapter 3: William Knibb High School", front: "What does transitioning to competitive environments expose?", back: "It exposes flaws in work ethic, forcing a choice between coasting on talent or committing to rigorous training." },
            { chapter: "Chapter 4: Overcoming Health Hurdles", front: "How can physical conditions like scoliosis be managed?", back: "They can be managed and overcome through continuous, tailored bodily adaptation and grit." },
            { chapter: "Chapter 5: The Turning Point of the Crash", front: "What role do close-call life experiences play?", back: "They serve as profound wake-up calls, sharpening focus and realigning personal purpose." },
            { chapter: "Chapter 6: Conquering the World Stage", front: "What is required under massive international pressure?", back: "Executing under pressure requires supreme self-confidence, mental relaxation, and joy in performance." }
        ]
    },
    no_limits: {
        title: "No Limits: The Will to Succeed",
        author: "Michael Phelps",
        cards: [
            { chapter: "Chapter 1: Perseverance (400 IM)", front: "How can ADHD or restless energy be channeled?", back: "Turning restless energy into structured physical outlets builds an exceptional foundation for high-end mastery." },
            { chapter: "Chapter 2: Belief (400 Free Relay)", front: "What builds unshakeable competitive composure?", back: "Detailed mental preparation and visualization of both optimal outcomes and potential hurdles." },
            { chapter: "Chapter 3: Redemption (200 Freestyle)", front: "How should setbacks be viewed?", back: "Setbacks and missed targets are critical learning checkpoints that fuel stronger strategic focus." },
            { chapter: "Chapter 4: Determination (200 Fly)", front: "Where does true competitive separation happen?", back: "It happens during grueling, repetitive daily training blocks when no audience is watching." },
            { chapter: "Chapter 5: Confidence (800 Free Relay)", front: "What elevates individual performance boundaries?", back: "Trusting your preparation and leaning on a collaborative team environment." },
            { chapter: "Chapter 6: Courage (200 IM)", front: "How do you inoculate against panic under pressure?", back: "Embracing deliberate discomfort in practice prepares you for high-stakes pressure situations." },
            { chapter: "Chapter 7: Will (100 Fly)", front: "What acts as the final multiplier during elite exhaustion?", back: "Mental toughness acts as the final multiplier when physical exhaustion peaks." },
            { chapter: "Chapter 8: Commitment (Medley Relay)", front: "What does sustaining greatness require?", back: "An ongoing, lifelong commitment to accountability, coaching, and self-evaluation." }
        ]
    },
    psychology_money: {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        cards: [
            { chapter: "Chapter 1: No One's Crazy", front: "What shapes personal financial choices?", back: "Unique generational backgrounds and personal experiences, not strict mathematical rules." },
            { chapter: "Chapter 2: Luck and Risk", front: "Why shouldn't you judge success too harshly?", back: "Because luck and risk play massive, often unacknowledged roles in financial outcomes." },
            { chapter: "Chapter 3: Never Enough", front: "What happens when you move goalposts endlessly?", back: "It invites ruin; recognizing 'enough' protects accumulated wealth." },
            { chapter: "Chapter 4: Confounding Compounding", front: "What is finance's most powerful asset?", back: "Time; letting small sums compound over decades creates staggering results." },
            { chapter: "Chapter 5: Getting vs. Staying Wealthy", front: "What is the difference in mindset needed?", back: "Getting rich requires risk, but staying rich requires paranoia, frugality, and diversification." },
            { chapter: "Chapter 6: Tails, You Win", front: "What drives long-term business/investment success?", back: "A tiny percentage of outlier bets paying off massively." },
            { chapter: "Chapter 7: Freedom", front: "What is the highest dividend money can pay?", back: "Controlling your time and autonomy." },
            { chapter: "Chapter 8: Man in the Car Paradox", front: "Why do people want wealth vs. admiration?", back: "People want wealth to signal importance, but true admiration comes from humility." },
            { chapter: "Chapter 9: Wealth is What You Don't See", front: "What is the fastest way to have less money?", back: "Spending money to show people you have money." },
            { chapter: "Chapter 10: Save Money", front: "What matters more than income in building wealth?", back: "Your savings rate." },
            { chapter: "Chapter 11: Reasonableness > Rationality", front: "Why aim for financial reasonableness?", back: "Because humans need strategies they can actually stick with over cold calculations." },
            { chapter: "Chapter 12: Surprise!", front: "What is history fundamentally?", back: "History is the study of surprise; future environments will feature unpredictable shocks." },
            { chapter: "Chapter 13: Room for Error", front: "What must a good financial plan account for?", back: "Errors, bad luck, and unforeseen downturns." },
            { chapter: "Chapter 14: You'll Change", front: "What must long-term career planning accept?", back: "That your future desires and goals will evolve." },
            { chapter: "Chapter 15: Nothing’s Free", front: "What are market volatility and stress?", back: "They are not fees charged; they are market entry tickets (the price of admission)." },
            { chapter: "Chapter 16: You & Me", front: "Whose financial cues should you avoid?", back: "People playing a completely different financial game than you." },
            { chapter: "Chapter 17: Seduction of Pessimism", front: "Why is pessimism dangerous?", back: "Pessimism sounds intelligent, but historical optimism wins over long horizons." },
            { chapter: "Chapter 18: When You Believe Anything", front: "What do people easily believe during uncertainty?", back: "Comforting narratives that validate their worldview." },
            { chapter: "Chapter 19 & 20: Confessions", front: "What anchors durable financial independence?", back: "Moderation, humility, patience, and prioritizing independence over high-status consumption." }
        ]
    },
    zero_to_one: {
        title: "Zero to One",
        author: "Peter Thiel & Blake Masters",
        cards: [
            { chapter: "Chapter 1: The Challenge of the Future", front: "What is true societal progress?", back: "Vertical innovation (going from 0 to 1), not horizontal imitation (going from 1 to N)." },
            { chapter: "Chapter 2: Party Like It’s 1999", front: "What should sustainable businesses focus on?", back: "Fundamental business execution and customer value rather than market hype bubbles." },
            { chapter: "Chapter 3: All Happy Companies Are Different", front: "How do monopolies escape destruction?", back: "By creating unique value, whereas competition drives profit margins down to zero." },
            { chapter: "Chapter 4: The Ideology of Competition", front: "What does intense corporate competition breed?", back: "Ideological conflict and tunnel vision; escaping competition leads to true profits." },
            { chapter: "Chapter 5: Last Mover Advantage", front: "What does a great business build?", back: "Proprietary technology or network effects to dominate the distant future." },
            { chapter: "Chapter 6: You Are Not a Lottery Ticket", front: "What outweighs blind luck in company success?", back: "Rigorous long-term planning and disciplined execution." },
            { chapter: "Chapter 7: Follow the Money", front: "What distributions govern venture capital?", back: "Power law distributions; a tiny fraction of investments generate almost all returns." },
            { chapter: "Chapter 8: Secrets", front: "Where do valuable business truths lie?", back: "In overlooked truths about the world for founders willing to look where others do not." },
            { chapter: "Chapter 9: Foundations", front: "Why are early startup choices critical?", back: "Choices like co-founder chemistry and equity allocation are almost impossible to alter later." },
            { chapter: "Chapter 10: The Mechanics of Mafia", front: "What kind of company culture should you build?", back: "A cohesive culture where employees share deep personal alignment and intense mission focus." },
            { chapter: "Chapter 11: If You Build It, Will They Come?", front: "Is superior technology enough?", back: "No; it is useless without a comprehensive, deliberate strategy for sales and distribution." },
            { chapter: "Chapter 12: Man and Machine", front: "Who does the future belong to?", back: "Companies that use computers to empower humans rather than try to replace them." },
            { chapter: "Chapter 13: Seeing Green", front: "What must successful green tech businesses master?", back: "Proprietary technology, timing, lean structure, and grand distribution plans." },
            { chapter: "Chapter 14: The Founder’s Paradox", front: "What traits do founders often possess?", back: "Extreme, polarizing traits that are critical to venture success yet prone to excess." }
        ]
    },
    you_can_win: {
        title: "You Can Win",
        author: "Shiv Khera",
        cards: [
            { chapter: "Chapter 1: Importance of Attitude", front: "What does attitude act as?", back: "The underlying lens through which challenges are managed; it dictates your ultimate trajectory." },
            { chapter: "Chapter 2: Success Strategies", front: "Is success an accident?", back: "No; success is predictable and systematic, driven by adherence to timeless principles." },
            { chapter: "Chapter 3: Motivation", front: "What sustains long-term performance best?", back: "Intrinsic, value-driven inner drive rather than external rewards." },
            { chapter: "Chapter 4: Building Positive Self-Esteem", front: "How is self-belief built?", back: "Step-by-step through keeping promises to yourself and accumulating small victories." },
            { chapter: "Chapter 5: Interpersonal Skills", front: "What do genuine relationships require?", back: "Empathy, active listening, and mutual respect." },
            { chapter: "Chapter 6: Forming Good Habits", front: "How is character formed?", back: "By daily micro-habits that dictate ethical boundaries under pressure." },
            { chapter: "Chapter 7: Goal Setting", front: "Why do vague wishes fail?", back: "Because clear, written, timeline-bound goals are needed to direct focused daily action." },
            { chapter: "Chapter 8: Values and Vision", front: "What does an inner moral compass prevent?", back: "Compromise during turbulent times." }
        ]
    },
    psycho_cybernetics: {
        title: "Psycho-Cybernetics",
        author: "Maxwell Maltz",
        cards: [
            { chapter: "Chapter 1: The Self-Image", front: "What dictates your outer behavior?", back: "Your internal mental self-image; you cannot act contrary to it." },
            { chapter: "Chapter 2: Success Mechanism", front: "How does the human brain operate?", back: "As an automated goal-seeking guidance mechanism once a clear target is set." },
            { chapter: "Chapter 3: De-Hypnotize Yourself", front: "What are most personal constraints?", back: "Outdated hypnotic beliefs rather than immutable physical laws." },
            { chapter: "Chapter 4: Power of Mental Pictures", front: "What does vivid mental rehearsal do?", back: "Programs the subconscious mind to execute complex tasks smoothly." },
            { chapter: "Chapter 5: Relax Away Your Tension", front: "What does physical relaxation unlock?", back: "It clears friction, unlocking optimal natural performance." },
            { chapter: "Chapter 6: Habit of Happiness", front: "Is happiness an accident?", back: "No; happiness is a learned psychological habit." },
            { chapter: "Chapter 7: Malfunctions of Success", front: "What jams your internal guidance system?", back: "Worry, fixation on failure, and emotional scar tissue." },
            { chapter: "Chapter 8: Success-Type Personality", front: "What does DUCACE stand for?", back: "Direction, Understanding, Courage, Charity, Esteem, Self-Confidence, and Acceptance." },
            { chapter: "Chapter 9: The Failure Mechanism", front: "What emotional traps should you sidestep?", back: "Frustration, aggressiveness, loneliness, and uncertainty." },
            { chapter: "Chapter 10: Removing Emotional Scars", front: "What provides an emotional facelift for the mind?", back: "Conscious forgiveness and letting go of past emotional trauma." },
            { chapter: "Chapter 11: Unlock Your Real Personality", front: "How does your natural self emerge?", back: "By dropping artificial defense mechanisms." },
            { chapter: "Chapter 12: Tranquilizers", front: "How do you maintain mental equilibrium?", back: "By living fully in the present moment." }
        ]
    },
    subconscious_mind: {
        title: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy",
        cards: [
            { chapter: "Chapter 1: The Treasure House Within", front: "How does the subconscious mind treat thoughts?", back: "It accepts instructions literally and manifests whatever thoughts you dwell upon." },
            { chapter: "Chapter 2: How Your Mind Works", front: "What is the split between conscious and subconscious?", back: "Conscious thinks logically; subconscious feels and acts upon habit, emotion, and repetition." },
            { chapter: "Chapter 3: Miracle-Working Power", front: "What can inward mental imagery do?", back: "Heal emotional blocks and solve complex external problems." },
            { chapter: "Chapter 4 & 5: Mental Healings", front: "What forms the basis of psychological healing?", back: "Belief, expectancy, and shifting internal emotional states." },
            { chapter: "Chapter 6: Practical Techniques", front: "How do you rewrite negative scripts?", back: "Through systematic visualization and affirmations." },
            { chapter: "Chapter 7: Lifeward Tendency", front: "Where does subconscious energy default?", back: "Toward growth, health, and restoration." },
            { chapter: "Chapter 8: Getting Results", front: "How should you approach goals?", back: "Let go of forceful anxiety; state goals clearly with quiet confidence." },
            { chapter: "Chapter 9 & 10: Wealth & Richness", front: "What is wealth fundamentally?", back: "Wealth is a state of mind; abundance flows when scarcity beliefs are dropped." },
            { chapter: "Chapter 11, 12 & 13: Success & Sleep", front: "How do scientists use the subconscious?", back: "By framing critical questions before sleep to leverage subconscious problem-solving." },
            { chapter: "Chapter 14, 15 & 16: Relations & Happiness", front: "How do you achieve relationship harmony?", back: "By aligning mutual emotional expectations and offering unconditional respect." },
            { chapter: "Chapter 17, 18, 19 & 20: Freedom & Fear", front: "How do you conquer fear and resentment?", back: "Through active forgiveness, visualizing absolute safety, and maintaining mental enthusiasm." }
        ]
    },
    richest_man_babylon: {
        title: "The Richest Man in Babylon",
        author: "George S. Clason",
        cards: [
            { chapter: "Chapter 1: The Man Who Desired Gold", front: "What causes financial struggle?", back: "A lack of financial education, not a lack of income opportunities." },
            { chapter: "Chapter 2: The Richest Man in Babylon", front: "How is wealth acquired?", back: "Through a repeatable system: part of all you earn is yours to keep." },
            { chapter: "Chapter 3: Seven Cures for a Lean Purse", front: "What is rule #1 of the seven cures?", back: "Save 10% of everything you earn." },
            { chapter: "Chapter 4: Goddess of Luck", front: "Who does good luck visit?", back: "Those who take prompt action on prepared opportunities." },
            { chapter: "Chapter 5: Five Laws of Gold", front: "Who does gold stay with?", back: "Those who invest wisely and protect themselves from risk." },
            { chapter: "Chapter 6 & 7: Lender & Walls", front: "How do you protect business or family assets?", back: "Safeguard principal capital carefully and build strong defensive preparations." },
            { chapter: "Chapter 8, 9 & 10: Debt & Fulfillment", front: "What restores personal honor and wealth?", back: "Facing financial obligations head-on, documented budgeting, and balancing work with responsibility." }
        ]
    },
    think_grow_rich: {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        cards: [
            { chapter: "Chapter 1: Power of Thought", front: "What are thoughts?", back: "Thoughts are things; materialized wealth begins as a clear, focused mental concept." },
            { chapter: "Chapter 2: Desire", front: "What is the starting point of achievement?", back: "A burning, obsessive desire with a clear deadline." },
            { chapter: "Chapter 3 & 4: Faith & Auto-Suggestion", front: "How do you transform goals into reality?", back: "Through visualization, repeated self-belief, and feeding the subconscious targeted commands." },
            { chapter: "Chapter 5, 6 & 7: Knowledge & Planning", front: "What creates value in the market?", back: "Targeted, organized specialized knowledge paired with structured plans." },
            { chapter: "Chapter 8, 9 & 10: Decision & Master Mind", front: "What multiplies your execution capacity?", back: "Prompt decision-making, sustained persistence, and a Master Mind cooperative alliance." },
            { chapter: "Chapter 11, 12, 13, 14 & 15: Mastery & Fear", front: "How do you conquer the six ghosts of fear?", back: "By mastering your mental state, redirecting creative energy, and tuning into intuition." }
        ]
    },
    win_friends: {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        cards: [
            { chapter: "Part 1: Handling People", front: "What should you offer instead of criticism?", back: "Offer honest, sincere appreciation to motivate human action." },
            { chapter: "Part 2: Making People Like You", front: "How do you make people like you instantly?", back: "Become genuinely interested in other people and listen actively." },
            { chapter: "Part 3: Winning People Over", front: "Should you argue?", back: "Never argue; respect viewpoints, admit mistakes quickly, and let others claim the idea." },
            { chapter: "Part 4: Being a Leader", front: "How do you change people without offense?", back: "Praise improvement before critique, ask questions, and save people's pride." }
        ]
    },
    young_india: {
        title: "What Young India Wants",
        author: "Chetan Bhagat",
        cards: [
            { chapter: "Section 1: Our Society", front: "What stifles individual liberty in India?", back: "Casteism, outdated social norms, and hypocrisy." },
            { chapter: "Section 2: Our Politics", front: "How should youth treat politics?", back: "Through political accountability rather than avoiding it as dirty." },
            { chapter: "Section 3: Infrastructure & Education", front: "What shift does education need?", back: "A transition from rote memorization to creative problem-solving and technical skills." },
            { chapter: "Section 4 & 5: Corruption & Governance", front: "What is mandatory for national rise?", back: "Transparent meritocracy that replaces systemic corruption." }
        ]
    },
    elon_musk: {
        title: "Elon Musk",
        author: "Walter Isaacson",
        cards: [
            { chapter: "Childhood & Early Roots", front: "What forged Musk's risk-tolerant mindset?", back: "Early isolation, intense reading, and a harsh environment." },
            { chapter: "Zip2 & PayPal", front: "How do you disrupt bloated industries?", back: "Through relentless engineering hours and sheer stubbornness." },
            { chapter: "SpaceX", front: "What slashed rocket manufacturing costs?", back: "Vertical integration and questioning every rule of manufacturing." },
            { chapter: "Rescuing Tesla", front: "What separates true visionaries?", back: "Putting all personal capital on the line during existential crises." },
            { chapter: "Energy, Neuralink & AI", front: "How should science-fiction problems be tackled?", back: "With physical engineering physics rather than theoretical speculation." },
            { chapter: "Twitter Takeover", front: "What jolts stagnant entities awake?", back: "Ultra-flat management structures and absolute operational urgency." }
        ]
    },
    rich_dad_poor_dad: {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        cards: [
            { chapter: "Lesson 1: Don't Work for Money", front: "Why work instead of just earning a paycheck?", back: "Work to learn skills and escape the rat race by shifting focus to assets." },
            { chapter: "Lesson 2: Financial Literacy", front: "What is the rule of assets vs. liabilities?", back: "An asset puts money in your pocket; a liability takes money out." },
            { chapter: "Lesson 3 & 4: Business & Taxes", front: "What should you build while keeping your day job?", back: "Your asset column, utilizing corporate structures to minimize taxes." },
            { chapter: "Lesson 5, 6, 7 & 8: Creativity & Obstacles", front: "What keeps people poor?", back: "Fear of losing money, cynicism, and laziness; manage risk intelligently." }
        ]
    },
    business_school: {
        title: "The Business School",
        author: "Robert Kiyosaki",
        cards: [
            { chapter: "Value 1 & 2: Opportunity & Education", front: "What does network marketing offer?", back: "A democratic business model that builds emotional resilience and leadership." },
            { chapter: "Value 3 & 4: Network & Duplication", front: "How do you scale a business?", back: "Surround yourself with growth-oriented peers and build a system others can easily duplicate." },
            { chapter: "Value 5, 6, 7 & 8: Leadership & Dreams", front: "What is the ultimate purpose of financial freedom?", back: "Living life on your own schedule and terms without monetary stress." }
        ]
    },
    atomic_habits: {
        title: "Atomic Habits",
        author: "James Clear",
        cards: [
            { chapter: "Chapters 1-3: Fundamentals & Identity", front: "How powerful are 1% improvements?", back: "They compound into a 37-fold improvement over a year; focus on identity-based habits." },
            { chapter: "Chapters 4-7: The 4 Laws (Cues & Environment)", front: "Why is environment superior to motivation?", back: "Designing your environment makes good cues obvious and bad cues invisible." },
            { chapter: "Chapters 8-12: Craving & Friction", front: "How do you stop procrastinating?", back: "Use temptation bundling, standardize before you optimize, and reduce friction." },
            { chapter: "Chapters 13-20: Mastery & The Goldilocks Rule", front: "When does peak human motivation occur?", back: "When working on tasks right on the edge of your current abilities." }
        ]
    },
    cultural_lit: {
        title: "Indian Cultural Literature & Modern Non-Fiction",
        author: "Curated Selections",
        cards: [
            { chapter: "I Am Malala", front: "What is the core takeaway of Malala's journey?", back: "Education is an absolute right; courage in speaking truth to power creates global change." },
            { chapter: "Phite Andharache Jaal", front: "How do we overcome systemic social darkness?", back: "Through systemic educational reform, resilience, and self-belief." },
            { chapter: "Shyamchi Aai", front: "What forms the bedrock of righteous character?", back: "Unconditional maternal love, patience, and moral integrity." },
            { chapter: "Build, Don't Talk", front: "What trumps endless planning?", back: "Action and tangible execution; speed, networking, and creation drive modern success." }
        ]
    }
};

// URL Parameters & State Handling
const urlParams = new URLSearchParams(window.location.search);
const bookKey = urlParams.get('book') || 'easy_money';
const currentBook = booksData[bookKey] || booksData.easy_money;

let currentIndex = 0;

// DOM Elements
const bookTitleEl = document.getElementById('book-title');
const chapterNumEl = document.getElementById('chapter-number');
const frontTextEl = document.getElementById('front-text');
const backTextEl = document.getElementById('back-text');
const counterEl = document.getElementById('counter');
const cardEl = document.getElementById('card');

// Load Card Content
function loadCard() {
    if (!bookTitleEl) return; // Exit if on index.html
    
    bookTitleEl.innerText = `${currentBook.title} (${currentBook.author})`;
    const cardData = currentBook.cards[currentIndex];
    
    chapterNumEl.innerText = cardData.chapter;
    frontTextEl.innerText = cardData.front;
    backTextEl.innerText = cardData.back;
    counterEl.innerText = `${currentIndex + 1} / ${currentBook.cards.length}`;
    
    // Reset flip orientation
    cardEl.classList.remove('flipped');
}

function flipCard() {
    if (cardEl) {
        cardEl.classList.toggle('flipped');
    }
}

function nextCard() {
    if (currentBook && currentIndex < currentBook.cards.length - 1) {
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

// Initialize execution
document.addEventListener('DOMContentLoaded', loadCard);