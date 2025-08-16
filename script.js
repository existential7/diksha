
const songs = [
    "https://open.spotify.com/embed/track/1Ukxccao1BlWrPhYkcXbwZ?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/0j3mqDTK4Z6lvrLzFCUUz6?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/39sDitIeCMrVX2QyXHY46t?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/2aaCNg42RA74s0EmHTBqS7?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/6QeYSvYqYUsfBzsApbjDHO?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/6dBUzqjtbnIa1TwYbyw5CM?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/1XrSjpNe49IiygZfzb74pk?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/6RiiSy9GzSwiyDEJDiMuKe?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/5qEn8c0MBzyRKgQq91Vevi?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/50x1Ic8CaXkYNvjmxe3WXy?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/1xaTREM89RbIxkcjlpf4Uw?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/0JIMT9gzLIIz0esKLyjbKf?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/0UV5zxRMz6AO4ZwUOZNIKI?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/6IPwKM3fUUzlElbvKw2sKl?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/1ad6CbExeZneBGswe5YuSD?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/14mT8BCOXiUUcGlb7KujkT?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/0WQiDwKJclirSYG9v5tayI?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/6dWilYAxP2aJbTTt0UsatK?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/4KGGeE7RJsgLNZmnxGFlOj?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/1Y3LN4zO1Edc2EluIoSPJN?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/4Pw2nBsmnww7dIyB12Fmw8?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/44AyOl4qVkzS48vBsbNXaC?utm_source=generator&theme=dark",
    "https://open.spotify.com/embed/track/5a3ZlfUdkef5uuXYcYNbUP?utm_source=generator&theme=dark",
];
// Rest of your script.js remains unchanged

const messages = [
    "I hope you found your favorite window seat today, with the perfect breeze. I’m sure 4:25 will arrive before you even notice, and you’ll be back there again.",
    "I can already picture you sitting by the window, with your knees up on the opposite seat, the sunlight looks good on your face",
    "Maybe your head is resting against the glass. i hope today passes soon",
    "I hope u got your window seat by now. Something about you sitting there just feels right.",
    "I hope today treats you kindly. 4:25 will come fast, and you’ll be right back by that window again.",
    "Did you get the spot where the breeze sneaks in, just enough to make you smile?",
    "I imagine you, eyes half-closed, enjoying the quiet moments",
    "I can almost see you there, earbuds in, watching the world blur by through that little opening.",
    "I hope the morning air feels gentle and the day passes quick enough to bring you to 4:25.",
    "I picture you sitting quietly by the window, noticing little things outside.",
    "I imagine the breeze touching your cheek as you look out the window",
    "Today’s going to go fine, I can tell. And by the time you blink, 4:25 will be here.",
    "Did you sit where the light falls just right on your face? I hope so.",
    "There’s something about you and the window seat—like the day isn’t complete without that picture.",
    "I hope the air felt perfect today, fresh but soft, just how you like it.",
    "Something tells me today will be one of those peaceful ones, with no rush",
    "Did you get your window seat today, or was it taken? I hope it was yours.",
    "I hope today is kind to you. Before you know it, 4:25 will bring you back to where you belong.",
    "Did you sit in the spot where the breeze feels like it’s only for you?",
    "watching the city pass by?",
    "I hope today has little surprises that make you smile before you even reach 4:25.",
    "The window seat just suits you—it’s where you’re meant to be.",
    "The breeze, the view, and you, that’s all a morning needs.",
    "You probably don’t notice, but you make mornings softer just by existing.",
    "I imagine your head resting lightly against the glass, eyes wandering outside.",
    "Don’t worry about the hours ahead—4:25 is already on its way.",
    "I think mornings and you have an understanding—they both feel gentle.",
    "Did you get the seat with the perfect view again?",
    "I’m guessing the breeze today was just right—not too much to mess up your hair, not too little.",
    "Some days, it’s enough just to sit by the window and let the air do its thing.",
    "I wonder what you were thinking about while looking out the window today.",
    "I hope your day feels light and that 4:25 doesn’t take its time.",
    "I hope today’s view from the window felt a little extra pretty.",
    "Seeing you in morning seems is the best part of my day",
    "The window seat and you are just a perfect match.",
    "You make mornings feel special.",
    "I think the world looks better when its you in between me and those windows",
    "I hope you got your perfect corner today.",
    "There’s something calming about seeing you in mornings.",
    "You make that seat look like it was made for you.",
    "Just relax today’s going to go fine, I just know it.",
    "The window seat wouldn’t be the same without you.",
    "The day feels softer when it starts with you.",
    "I hope today goes lightly, and the evening finds you smiling.",
    "You and mornings just.. fit.. to me atleast.",
    "The world outside your window probably has no idea it’s being watched by such a pretty creature",
    "The seat is just a seat until you’re in it.",
    "The breeze will probably whisper something nice today.",
    
];

// Replace these with your own encouraging messages for assessments
const allTheBestMessages = [
    "All the very best, ypu will ace it",
    "I hope that crazy woman gives u more than 26",
    "Best of luckk",
];

// Replace these with your own messages for no assessments
const noAssessmentMessages = [
    "Noice",
];
// Random romantic quotes
const quotes = [
    "Thank u for opening me today!!",
];

// Random index generator
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}



// Show assessment message
function showAssessmentMessage(hasAssessment) {
    const assessmentMessage = document.getElementById('assessment-message');
    const assessmentQuestion = document.getElementById('assessment-question');
    if (hasAssessment) {
        const messageIndex = getRandomIndex(allTheBestMessages);
        assessmentMessage.innerText = allTheBestMessages[messageIndex];
    } else {
        const messageIndex = getRandomIndex(noAssessmentMessages);
        assessmentMessage.innerText = noAssessmentMessages[messageIndex];
    }
    assessmentMessage.classList.remove('hidden');
    assessmentQuestion.classList.add('hidden');
}

// Reveal content with animation
function revealContent() {
    const songIndex = getRandomIndex(songs);
    const messageIndex = getRandomIndex(messages);
    
    // Spin animation
    const btn = document.querySelector('.reveal-btn');
    btn.style.transition = 'transform 1s';
    btn.style.transform = 'rotate(360deg)';
    
    setTimeout(() => {
        btn.style.display = 'none';
        btn.style.transform = 'rotate(0deg)';
        
        const songEmbed = `<iframe src="${songs[songIndex]}" style="border-radius:12px" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
        document.getElementById('song-embed').innerHTML = songEmbed;
        document.getElementById('message').innerText = messages[messageIndex];
        document.getElementById('quote-text').innerText = quotes[getRandomIndex(quotes)];
        
        document.getElementById('daily-content').classList.remove('hidden');
        document.getElementById('daily-content').classList.add('show');
        document.getElementById('assessment-question').classList.remove('hidden');
    }, 1000);
}



