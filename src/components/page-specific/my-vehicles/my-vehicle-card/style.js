import { styled } from '@mui/material/styles';



const STYLED_ALL_CARDS_WRAPPER = styled('div')(

    ({ theme }) => `

        margin-top: 8rem;
        margin-bottom: 2rem;
        
        display: grid;
        grid-template-columns:1fr;


        ${/* align-items will only effect when there is multiple columns */ ''}
        align-items: start;

        ${/* justify-items will provide same margin on the both side of the content */ '' }
        justify-items: center;


        row-gap: 5rem;
        column-gap:2rem;

        
        
        
        @media(min-width:640px) {
            grid-template-columns:1fr 1fr ;
            
        }
        
        
        @media(min-width:960px) {
            
            grid-template-columns:1fr 1fr;
            
        }
        
        @media(min-width:1280px) {

            grid-template-columns:1fr 1fr 1fr;
            
        }
      

   `
)




const STYLED_A_CARD =  styled('div')(

    ({ theme }) => `


    width: 17rem;
    background-color: ${theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[100] };

    position: relative;

     
    > .card_image_wrapper {
    
        position: absolute;
        width: 90%;
        top: -4rem;
        left: 50%;
        transform: translateX(-50%);
        
    }


    > .card_image_wrapper > .card_image{
        object-fit: cover;
        height: 18rem;
        width: 100%;
        border-radius: 3rem;
        border-radius:10% 10% 10% 10%;
    }


    > .card_all_content_except_image {
    
        margin-top: 15rem;
    
        padding: 1rem;
  
  
        
    
        display: grid;
        justify-items: center;
        gap: 1.5rem;
    
        text-align: center;
  
        background-color: ${theme.palette.background.variation_2};
        border-radius:0% 0% 20% 0rem;
        
    }
    


 `
)
  



export {STYLED_ALL_CARDS_WRAPPER, STYLED_A_CARD}

