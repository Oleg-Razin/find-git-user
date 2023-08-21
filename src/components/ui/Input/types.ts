import { InputHTMLAttributes } from "react";

export interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string,
    id: string,
}