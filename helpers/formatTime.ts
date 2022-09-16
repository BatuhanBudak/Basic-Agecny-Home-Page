export default function formatTime(time) {
    const numbers = parseInt(time, 10);

    let minutes = Math.floor(numbers / 60),
    seconds = numbers - (minutes * 60);

    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
}