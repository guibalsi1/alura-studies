import { ITask } from '../../../types/tasks'
import style from './Item.module.scss'

interface Props extends ITask {
    selectTask: (selectTask: ITask) => void;
}

export default function Item({ task, time, selected, completed, id, selectTask }: Props) {
    return (
    <li className={`${style.item} ${selected ? style.itemSelected : ''} ${completed ? style.itemCompleted : ''}`} onClick={() => !completed && selectTask({task, time, selected, completed, id})}>
        <h3>{task}</h3>
        <span>{time}</span>
        {completed && <span className={style.completed} aria-label="task completed"></span>}
    </li>
    )
}