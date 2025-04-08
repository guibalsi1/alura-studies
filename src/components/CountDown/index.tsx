import { useState } from "react";
import { ITask } from "../../types/tasks";
import Button from "../Button";
import Clock from "./Clock";
import style from "./CountDown.module.scss";
import { timeInSeconds } from "../../common/utils/time";

interface CountDownProps {
    selected: ITask | undefined;
}


export default function CountDown({ selected }: CountDownProps) {
    const [time, setTime] = useState<number>(timeInSeconds(selected?.time || '00:00'));
    return (
        <div className={style.countdown}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            TEMPO: {time}
            <div className={style.clockWrapper}>
               <Clock />
            </div>
            <Button>
                Iniciar
            </Button>
        </div>
    )
}