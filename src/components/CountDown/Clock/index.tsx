import style from './Clock.module.scss'

export default function Clock({ time = 0}: { time: number | undefined }) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteD, minuteU] = String(minutes).padStart(2, '0');
    const [secondD, secondU] = String(seconds).padStart(2, '0');
    return (
        <>
            <span className={style.numberClock}>{minuteD}</span>
            <span className={style.numberClock}>{minuteU}</span>
            <span className={style.divisionClock}>:</span>
            <span className={style.numberClock}>{secondD}</span>
            <span className={style.numberClock}>{secondU}</span>
        </>
    )
}