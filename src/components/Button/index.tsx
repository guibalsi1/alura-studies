import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    }


export default function Button({ type, onClick, children}: ButtonProps) {
    return (
        <button onClick={onClick} type={type} className={style.button}>
            {children}
        </button>
    )
}    