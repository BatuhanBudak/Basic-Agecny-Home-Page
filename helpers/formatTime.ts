export default function formatTime(time:number) {
    const numbers = parseInt(String(time), 10);

    let minutes: string | number = Math.floor(numbers / 60),
    seconds: string | number = numbers - (minutes * 60);

    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
}