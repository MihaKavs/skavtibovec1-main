import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['button--Primary', 'button--Outline']
const SIZES = ['button--Medium', 'button--Small']
export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? STYLES[0] : buttonStyle;
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/onas" className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>
        </Link>
    )
}