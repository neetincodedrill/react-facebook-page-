import SideNavigation from "./mainComponent/sideNavigation"
import Info from "./mainComponent/info";
import Content from "./mainComponent/content"
import "./main.css"

const Main = () => {
   return(
        <div className = "main-container">
           <SideNavigation className = "sideNavigation" />
           <Info className="info"/>
           <Content className= "content"/>
        </div>
   )
}

export default Main;