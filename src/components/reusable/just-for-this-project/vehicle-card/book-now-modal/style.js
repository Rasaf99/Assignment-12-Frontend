import {styled} from '@mui/material/styles'

const JSX_WRAPPER = styled('div')(

    ({theme}) => `

        display:flex;
        flex-direction: column;
        align-items: center;

    `
)


const STYLED_FORM = styled('form')(

    ({theme}) => `
        margin:1rem;
        width: 18rem;
        display: grid;
        justify-content: center;  
        gap: 2rem; 
    `
)

export {JSX_WRAPPER, STYLED_FORM}