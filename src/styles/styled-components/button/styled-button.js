import { styled } from '@mui/material/styles';



const STYLED_BUTTON = styled('span', {

    // Configure which props should be forwarded on DOM
    shouldForwardProp: (prop) => prop !== 'dark' && prop!== 'border'
 
   })

   
 
 
   (({ dark, border, theme }) => `
 
     background-color: ${dark? theme.palette.grey[900] : theme.palette.grey[100]};
     color: ${dark? theme.palette.grey[100] : theme.palette.grey[900]};
     border: ${border? `1rem solid ${theme.palette.primary.main}` : 'none'};
 
   `);


export default STYLED_BUTTON