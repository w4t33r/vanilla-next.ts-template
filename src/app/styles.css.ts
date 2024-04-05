import { style } from '@vanilla-extract/css';

export const main = style({
    background: 'darkcyan',
    color: 'grey',
    padding: '10px',
    transition: 'opacity .1s ease',
    ':hover': {
        opacity: 0.8
    },
    ':active': {
        background: 'orange'
    }
});
export const h1 = style({
    fontSize: '1.5rem',
    background: 'black',
    color: 'white',
    padding: '10px',
    transition: 'opacity .1s ease',
    ':hover': {
        opacity: 0.8
    },
    ':active': {
        background: 'red'
    }
});