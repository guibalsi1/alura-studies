import Button from "../Button";
import Clock from "./Clock";
import style from "./CountDown.module.scss";


export default function CountDown() {
    return (
        <div className={style.countdown}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
               <Clock />
            </div>
            <Button>
                Iniciar
            </Button>
        </div>
    )
}