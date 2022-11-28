import {styled} from '@mui/material/styles'


const STYLED_JSX_WRAPPER = styled('div')(

    ({theme}) => `
    
            padding-top:1rem;
            padding-left: 0.5rem;

            display:flex;
            align-items:center;
            gap:1.5rem;
    `

)

export {STYLED_JSX_WRAPPER}