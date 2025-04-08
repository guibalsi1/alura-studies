export function timeInSeconds(time: string): number {
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(':');

    const totalSeconds = Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
    return totalSeconds;
}