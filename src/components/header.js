import "./header.css"
import pic from "./images/spain.png";

const Header = () => {
   return(
        <div className = "container">
            <nav>
               
                <div className = "nav-left">
                    <div className = "logo">
                        <i className="fa-brands fa-facebook"></i> 
                    </div>
                    <div className ="search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" name="name" placeholder = "Search Facebook"/>
                    </div>
                </div>

                <div className = "menu">
                    <div class="icon0">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <div className = "icon1">
                        <i class="fa-solid fa-shop"></i>
                        <span>3</span>
                    </div>
                    <div className ="icon2">
                        <i class="fa-solid fa-shop"></i>
                        <span>3</span>
                    </div>
                    <div className = "icon3">
                        <i class="fa-solid fa-shop"></i>
                        <span>3</span>
                    </div>
                    <div className = "icon4">
                        <i class="fa-solid fa-shop"></i>
                        <span>3</span>
                    </div>
                </div>

                <div className = "nav-right">
                    <img src={pic} alt = "nice" width="30" height="30" />
                    <p>Pankaj</p>
                    <i class="fa-brands fa-facebook-messenger"></i>
                    <div className="notification">
                        <i class="fa-solid fa-bell"></i>
                        <span>2</span>
                    </div>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
            </nav>
        </div>
   )
}

export default Header;