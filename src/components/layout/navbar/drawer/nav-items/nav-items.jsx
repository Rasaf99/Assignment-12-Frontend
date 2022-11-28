import data_array_nav_items from '../../_data-array-nav-items/data-array-nav-items';

import ONE_ITEM from './one-item/one-item';

export default function NAV_ITEMS() {


  return (

    <>

      {data_array_nav_items.map((item) => (

        <div key={item.label}>

          <ONE_ITEM item={item} />

        </div>


      ))}

    </>


  );
}
