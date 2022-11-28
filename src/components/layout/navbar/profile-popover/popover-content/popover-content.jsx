
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

import { ListItemButton, ListItemIcon, Switch } from '@mui/material';

// styles
import STYLED_LINK from 'styles/styled-components/router-link/router-link';


// hooks
import useMuiTheme from 'hook/useMuiTheme';
import { useTheme } from '@mui/material';


// icons
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import { MdOutlineRateReview } from "react-icons/md";
import useAuthContext from 'hook/context/use-auth-context';





// ✅ functional component
export default function POPOVER_CONTENT({handleLogout}) {

  
  const {switchTheme } = useMuiTheme()
  const theme = useTheme()

  const {user} = useAuthContext()


  // ✅ jsx
  return (
    <List sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' }}>

       
     {/* Profile */}

    <STYLED_LINK to='/profile'>
      <ListItem>
          <ListItemButton>
            <ListItemIcon sx={{ fontSize: '2rem' }}>
              <AccountCircleRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
      </ListItem>
    </STYLED_LINK>



    {/* Switch Theme  */}

    <ListItem>
    <ListItemButton disableRipple>
      <ListItemIcon>
        <DarkModeIcon sx={{ fontSize: '2rem' }}/>
      </ListItemIcon>
   
      <ListItemText id="switch-list-label-wifi" primary="Dark Theme" />
      <Switch
        onClick={switchTheme}
        edge="end"
        checked={theme.palette.mode === 'dark' ? true : false} 
        
  
      />
      </ListItemButton>
    </ListItem>


    <Divider/>

        {/* Sign out */}
        <ListItem onClick={handleLogout}>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon sx={{ fontSize: '2rem' }}/>
          </ListItemIcon>
          <ListItemText primary="Sign out" />
        </ListItemButton>
      </ListItem>









    </List>
  );
}
