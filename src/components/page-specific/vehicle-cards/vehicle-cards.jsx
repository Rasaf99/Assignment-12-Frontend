import { useState } from 'react';

import { Box, Tabs, Tab } from '@mui/material'


;
import CATEGORY_CARS from './category-cars/category-cars';
import CATEGORY_BUSES from './category-buses/category-buses';
import CATEGORY_TRUCKS from './category-trucks/category-trucks';



export default function VEHICLE_CARDS() {



    // when we select a tab, the state changes
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }



    return (

        <>

            <Box sx={{ width: '100%', marginTop: '1.2rem' }}>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>

                    <Tabs value={selectedTab} onChange={handleChange} aria-label="Tabs" 	 >

                        <Tab label="Cars" />
                        <Tab label="Buses" />
                        <Tab label="Trucks" />

                    </Tabs>

                </Box>



                {/* Content of the tab */}

                {selectedTab === 0 && <CATEGORY_CARS />}


                {selectedTab === 1 && <CATEGORY_BUSES />}


                {selectedTab === 2 && <CATEGORY_TRUCKS/>}


            </Box>

        </>

    )
}