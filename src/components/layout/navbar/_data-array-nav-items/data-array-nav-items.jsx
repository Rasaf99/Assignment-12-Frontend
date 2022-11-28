import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { BiBusSchool } from "react-icons/bi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";



//values of access: 'only_logged_in', 'seller', 'buyer', 'admin'

const data_array_nav_items = [


  {

    label: 'Dashboard', link: '/vehicle/mine', icon: <MdSpaceDashboard />,

    nestedList: [

      {
        label: 'All Buyers', link: '/all-buyers', icon: <GiPayMoney />, access: 'admin'
      },

      {
        label: 'All Sellers', link: '/all-sellers', icon: <MdOutlineEmojiPeople />, access: 'admin'
      },

      {
        label: 'Sell a Vehicle', link: '/vehicle/sell', icon: <GiReceiveMoney />, access: 'seller'
      },

      {
        label: 'My Vehicles', link: '/vehicle/mine', icon: <BiBusSchool />, access: 'seller'
      },

      {
        label: 'My Orders', link: '/vehicle/orders', icon: <BsFillCartCheckFill />, access: 'buyer'
      },

    ]

  },


  {
    label: 'All Vehicles', link: '/vehicle/cards', icon: <AiFillCar />, access: 'only_logged_in'
  },

  {
    label:'Blog', link:'/blog', icon: <FaBloggerB/> 
  }





]

export default data_array_nav_items