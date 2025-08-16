function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function revealContent() {
    try {
        const songIndex = getRandomIndex(songs);
        const messageIndex = getRandomIndex(messages);
        const songEmbed = `<iframe src="${songs[songIndex]}" style="border-radius:12px" width="100%" height="120" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
        document.getElementById('song-embed').innerHTML = songEmbed;
        document.getElementById('message').innerText = messages[messageIndex];
        document.getElementById('content').classList.remove('hidden');
        document.getElementById('assessment-question').classList.remove('hidden');
        document.getElementById('spin-button').classList.add('hidden');
    } catch (error) {
        console.error('Error in revealContent:', error);
    }
}

function handleAssessment(hasAssessment) {
    const assessmentMessage = document.getElementById('assessment-message');
    if (hasAssessment === 'no') {
        assessmentMessage.innerText = noAssessmentMessages[getRandomIndex(noAssessmentMessages)];
    } else {
        assessmentMessage.innerText = "Looks like you have an assessment today, but I'm cheering for you, Diksha!";
    }
    assessmentMessage.classList.remove('hidden');
    document.getElementById('assessment-buttons').classList.add('hidden');
}

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

const messages = [
    "You're the melody to my heart's song, Diksha.",
    "Every moment with you feels like a dream, my love.",
    "Your smile lights up my world, always and forever.",
];

const noAssessmentMessages = [
    "Yay, more time to vibe with you!",
    "No assessments? Perfect, let's make more memories!",
    "Free day to love you even more, Diksha!",
];

document.getElementById('spin-button').addEventListener('click', revealContent);
document.getElementById('yes-button').addEventListener('click', () => handleAssessment('yes'));
document.getElementById('no-button').addEventListener('click', () => handleAssessment('no'));