
const quotes = [
    "\"The only limit to our realization of tomorrow is our doubts of today.\" - Franklin D. Roosevelt",
    "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\" - Winston Churchill",
    "\"The future belongs to those who believe in the beauty of their dreams.\" - Eleanor Roosevelt",
    "\"Do not wait to strike till the iron is hot; but make it hot by striking.\" - William Butler Yeats",
    "\"What you do makes a difference, and you have to decide what kind of difference you want to make.\" - Jane Goodall",
    "\"The best way to predict your future is to create it.\" - Abraham Lincoln",
    "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
    "\"I can do all things through Christ who strengthens me.\" - Philippians 4:13",
    "\"The only way to do great work is to love what you do.\" - Steve Jobs",
    "\"Your time is limited, don't waste it living someone else's life.\" - Steve Jobs",
    "\"Strive not to be a success, but rather to be of value.\" - Albert Einstein",
    "\"The mind is everything. What you think you become.\" - Buddha",
    "\"I have not failed. I've just found 10,000 ways that won't work.\" - Thomas Edison",
    "\"To handle yourself, use your head; to handle others, use your heart.\" - Eleanor Roosevelt",
    "\"Too many of us are not living our dreams because we are living our fears.\" - Les Brown",
    "\"I alone cannot change the world, but I can cast a stone across the water to create many ripples.\" - Mother Teresa",
    "\"Leadership is the capacity to translate vision into reality.\" - Warren Bennis",
    "\"Do not follow where the path may lead. Go instead where there is no path and leave a trail.\" - Ralph Waldo Emerson",
    "\"Everything you've ever wanted is on the other side of fear.\" - George Addair",
    "\"The best revenge is massive success.\" - Frank Sinatra"
    // Add more quotes as needed
];

document.getElementById('generate-quote').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
});