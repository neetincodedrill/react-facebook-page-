import "./content.css"
import image from "../image.jpg"
import brand4 from "./images/brand4.avif";
import brand5 from "./images/brand5.avif"
import brand1 from "./images/brand1.avif"
import brand2 from "./images/brand2.avif"
import spash4 from "./images/spash4.avif"

const Content = () => {
    return(
         <div className = "content-container">
            <h3>Sponsored</h3>
            <div>
               <div className = "flex1">
                  <img src= {brand4} alt = "nice"/>
                  <div className="flex1-content">
                     <h4>A little Premium love</h4>
                     <p>A little premium</p>
                  </div>
               </div>
               <div className="flex2">
                  <img src= {brand5} alt = "nice"/>
                  <div className="flex2-content">
                     <h4>A little Premium love</h4>
                     <p>A little premium</p>
                  </div>
               </div>
            </div>
            <hr/>

            <div className="pages">
            <div className="page-navigation">
            <h4>Your Pages</h4>
            <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div className="pages-info">
               <div>
                  <img src= {brand1} alt="nice" />
                  <p>CodeDrill Infotech Pvt.Ltd</p>
               </div>
               <div>
                  <img src= {brand2} alt="nice" />
                  <p>CodeDrill Infotech Pvt.Ltd</p>
               </div>
               <div>
                  <img src= {spash4} alt="nice" />
                  <p>CodeDrill Infotech Pvt.Ltd</p>
               </div>
            </div>
            </div>
            <hr/>
           <div className ="contact">
              <div className="contact-header">
              <h4>Contacts</h4>
            <i class="fa-solid fa-ellipsis"></i>
              </div>
              <div className="contact-list">
              <div>
                  <img src= {image} alt="nice" />
                  <p>CodeDrill Infotech Pvt.Ltd</p>
               </div>
               <div>
                  <img src= {image} alt="nice" />
                  <p>CodeDrill Infotech Pvt.Ltd</p>
               </div>
               <div>
                  <img src= {image} alt="nice" />
                  <p>CodeDrill Infotech Pvt.Ltd</p>
               </div>
               <div>
                  <img src= {image} alt="nice" />
                  <p>CodeDrill Infotech Pvt.Ltd</p>
               </div>
               <div>
                  <img src= {image} alt="nice" />
                  <p>CodeDrill Infotech Pvt.Ltd</p>
               </div>
              </div>
           </div>
            
            
         </div>
    )
 }
 
 export default Content;