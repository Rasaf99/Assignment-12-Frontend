import { styled } from '@mui/material/styles';

import { Button } from '@mui/material';

const STYLED_DARK_CONTAINED_BUTTON = styled(Button)(

({ theme }) =>`


    background-color: ${theme.palette.primary.static_variant.dark_2};
    color: ${theme.palette.text.static_variant.light_primary};

    :hover {
    background-color: ${theme.palette.primary.static_variant.dark_1};
    }
    
  `
)

export default STYLED_DARK_CONTAINED_BUTTON