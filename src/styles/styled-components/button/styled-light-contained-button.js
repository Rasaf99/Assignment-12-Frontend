import { styled } from '@mui/material/styles';

import { Button } from '@mui/material';

const STYLED_LIGHT_CONTAINED_BUTTON = styled(Button)(

({ theme }) =>`


    background-color: ${theme.palette.primary.static_variant.light_2};
    color: ${theme.palette.text.static_variant.dark_primary};

    :hover {
    background-color: ${theme.palette.primary.static_variant.light_3};
    }
    
  `
)

export default STYLED_LIGHT_CONTAINED_BUTTON