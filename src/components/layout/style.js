import {styled} from '@mui/material/styles'



const STYLED_WRAPPER_OF_EVERYTHING = styled('div')(

    ({theme}) =>`

     min-height: 100vh;
     display: flex; 
     flex-direction: column; 
     justify-content: space-between;
    
    `
)




export {STYLED_WRAPPER_OF_EVERYTHING}