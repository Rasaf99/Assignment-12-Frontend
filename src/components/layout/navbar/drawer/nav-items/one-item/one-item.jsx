// hook
import { useState } from "react";


// styles
import STYLED_LINK from "styles/styled-components/router-link/router-link";

// icons
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// components
import { ListItemButton, ListItemIcon, ListItemText, Collapse, List, Divider } from "@mui/material";


// authContext
import useAuthContext from "hook/context/use-auth-context";



// ✅ functional component
export default function ONE_ITEM({item}){

    const [open, setOpen] = useState(false)

    const handleClick = () => {
      setOpen(!open);
    }


    // authContext
    const {user} = useAuthContext()
 
    // ✅ jsx
    return(

      <>

        {(() => {


            if(item.nestedList) {

                    return (

                      <div>
 
                        <ListItemButton onClick={handleClick}>
        
                        
                            <ListItemIcon sx={{ fontSize: '1.7rem' }}>
                                {item.icon}
                            </ListItemIcon>
                                
        
                            <ListItemText primary={item.label} />
        
                            {open ? <ExpandLess /> : <ExpandMore />}
                            
                        </ListItemButton>
                                
                           
                
                        <Collapse in={open}>

                            <List sx={{paddingLeft:'1rem'}}>
                
                                {item.nestedList.map((item) => (
                
                                    /* recursive component */
                                    <ONE_ITEM item={item} key={item.label} />
                
                                ))}

                            </List>
                
                        </Collapse>
                
                        
                      </div>
                    )

            }
                
                


            else if(!item.nestedList ) {

                if(!item.access) {

                    return (
                    
                        <STYLED_LINK to={item.link}>
                
                            <ListItemButton>
                
    
                                <ListItemIcon sx={{ fontSize: '1.7rem' }}>
                                    {item.icon}
                                </ListItemIcon>
    
                                <ListItemText primary={item.label} />
                
                            </ListItemButton>
    
                
                        </STYLED_LINK>
      
                    )
  
                }

                else if(item.access && item.access === 'only_logged_in' && user) {


                    return (
                    
                        <STYLED_LINK to={item.link}>
                
                            <ListItemButton>
                
    
                                <ListItemIcon sx={{ fontSize: '1.7rem' }}>
                                    {item.icon}
                                </ListItemIcon>
    
                                <ListItemText primary={item.label} />
                
                            </ListItemButton>
    
                
                        </STYLED_LINK>
      
                    )



                }




                else if(item.access && item.access !== 'only_logged_in' && user?.role === item.access) {


                    return (
                    
                        <STYLED_LINK to={item.link}>
                
                            <ListItemButton>
                
    
                                <ListItemIcon sx={{ fontSize: '1.7rem' }}>
                                    {item.icon}
                                </ListItemIcon>
    
                                <ListItemText primary={item.label} />
                
                            </ListItemButton>
    
                
                        </STYLED_LINK>
      
                    )



                }



            }



        })()}


        



      </>
    )
}