import { useEffect, useState } from "react";
import { ITask } from "../../types/tasks";
import Button from "../Button";
import Clock from "./Clock";
import style from "./CountDown.module.scss";
import { timeInSeconds } from "../../common/utils/time";

interface CountDownProps {
    selected: ITask | undefined;
    finishTask: () => void;
}


export default function CountDown({ selected, finishTask }: CountDownProps) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeInSeconds(selected.time))
        }
    }, [selected]);

    function countdown(time = 0) {
        setTimeout(() => {
            if (time > 0) {
                setTime(time - 1);
                return countdown(time - 1);
            }
            finishTask();
        }, 1000)
        }
    return (
        <div className={style.countdown}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
               <Clock time={time} />
            </div>
            <Button onClick={() => countdown(time)}>
                Iniciar
            </Button>
        </div>
    )
}