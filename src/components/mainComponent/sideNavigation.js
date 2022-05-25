import pic from "../images/spain.png";
import "./sidenavigation.css"

const SideNavigation = () => {
    return(
        <div className = "side-nav">
            <div>
                <img src={pic} alt = "nice"/>
                <p>Pankaj Sharma</p>
            </div>
            <div>
                <i class="fa-solid fa-user-group"></i>
                <p className="friends">Friends</p>
            </div>
            <div>
            <i class="fa-solid fa-people-group"></i>
                <div>
                    <p>Groups</p>
                    <span>3 New</span>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-store"></i>
                <div>
                    <p>Marketplace</p>
                    <span>3 New</span>
                </div>
            </div>
            <div>
                <i class="fa-brands fa-youtube"></i>
                <div>
                    <p>Watch</p>
                    <span>9 New videos</span>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-clock"></i>
                <p>Memories</p>
            </div>
        </div>
    )
 }
 
 export default SideNavigation;