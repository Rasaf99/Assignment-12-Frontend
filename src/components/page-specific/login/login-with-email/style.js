import {styled} from '@mui/material/styles'



const STYLED_EMAIL_LOGIN_WRAPPER = styled('form')(

    ({theme}) => `

      display: flex;
      flex-direction:column;
      justify-content: center;  
      gap: 1rem; 
  

      ${/*the first child is STYLED_LINK Component. Inside that, there is 'forgot_password' className */ ''}
      >* >.forgot_password {

        font-size: ${theme.typography.h5.fontSize};
        color:${theme.palette.primary.main};
        text-align: left;

        margin-bottom:1rem;


        :hover {
            color:${theme.palette.primary.dark};
        }
      } 



    `
)





export {STYLED_EMAIL_LOGIN_WRAPPER}