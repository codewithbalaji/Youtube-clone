
import { NavLink  } from 'react-router-dom';
import './SideBar.css';
import { FaHome } from "react-icons/fa";
import { BsFillPlayCircleFill, BsFillCollectionPlayFill, BsPlayBtn } from "react-icons/bs";
import { MdOutlineVideoLibrary, MdOutlineWatchLater } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { BiLike } from "react-icons/bi";

const SideBar = () => {
  
    const menuItem = [
        {
            path : '/',
            name :'Home',
            icon : <FaHome />
        },
        {
            path : '/shorts',
            name :'Shorts',
            icon : <BsFillPlayCircleFill />
        },
        {
            path : '/subscription',
            name :'Subscription',
            icon : <BsFillCollectionPlayFill />
        },
        {
            path : '/library',
            name :'Library',
            icon : <MdOutlineVideoLibrary />
        },
        {
            path : '/history',
            name :'History',
            icon : <BiHistory />
        },
        {
            path : '/yourvideos',
            name :'Your Videos',
            icon : <BsPlayBtn />
        },
        {
            path : '/watchlater',
            name :'Watch Later',
            icon : <MdOutlineWatchLater />
        },
        {
            path : '/likedvideos',
            name :'Liked Videos',
            icon : <BiLike />
        }
      
    ]

  return (
    <div className="container-sidebar " >
        <div className="sidebar bg-black " style={{width: '18%' , padding:'56px 0', height : '100vh'}}>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link text-decoration-none ms-4 " 
                        activeclassName='active' >
                            <div className="icon">
                                {item.icon}
                            </div>
                            <div className="link-text">
                                {item.name}
                            </div>
                        </NavLink>
                    ))
                }
        </div>
        
    </div>
  )
}

export default SideBar