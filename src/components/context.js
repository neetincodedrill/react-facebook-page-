import SideNavigation from "./sideNavigation"
import Info from "./info";
import Content from "./content"
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