import React, { InputHTMLAttributes } from 'react';
import Styles from './Button.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    content: string;
    circle?: boolean;
    onClick?: any;
}

const Button: React.FC<Props> = props => (
    <input 
        type="button" 
        className={props.circle ? Styles.ButtonCircle : Styles.Button}
        onClick={value => props.onClick(value)}
        value={props.content}
    />
)

export default Button;