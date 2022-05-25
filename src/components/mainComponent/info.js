import "./info.css"
import Image from "../images/image.jpg"
import image6 from "../images/image6.jpg"
import image7 from "../images/image7.png"
import person1 from '../images/person1.avif'
import person2 from '../images/pserson2.avif'
import person3 from '../images/pserson3.avif'
import person4 from '../images/pserson4.avif'
import person5 from '../images/pserson5.avif'
import person6 from '../images/pserson6.avif'
import person7 from '../images/pserson7.avif'
import person8 from '../images/pserson8.avif'
import Story from "./storyCarosul"

const Info = () => {
    return(
         <div className = "info-container">

            <div className="story-board">
              <div className="create-story">
                 <img src= {person1} alt="nice"/>
                 <i class="fa-solid fa-plus"></i>
                 <h4>Create Story</h4>
              </div>
              <div className="stories">
                 <Story/>
              </div>
            
            
             
            </div>

            <div className="create-post">
              <div className="create">
                 <img src={image6} alt="nice"/>
                 <input type="text" placeholder="What's on your mind,Pankaj?"/>
              </div>
                <hr/>
              <div  className="post-option">
                 <div>
                 <i class="fa-solid fa-video"></i>
                 <p>Live video</p>
                 </div>
                 <div>
                 <i class="fa-solid fa-images"></i>
                 <p>Photo/video</p>
                 </div>
                 <div>
                 <i class="fa-solid fa-face-smile"></i>
                 <p>Feeling/Activity</p>
                 </div>
              </div>
            </div>

            <div className="create-room">
               <div className="video">
                  <i class="fa-solid fa-video"></i>
                  <p>Create Room</p>
               </div>
               <div className="images">
                  <img src={person1} alt="nice"/>
                  <img src={person2} alt="nice"/>
                  <img src={person3} alt="nice"/>
                  <img src={person4} alt="nice"/>
                  <img src={person5} alt="nice"/>
                  <img src={person6} alt="nice"/>
                  <img src={person7} alt="nice"/>
                  <img src={person8} alt="nice"/>
               </div>
               <div className ="arrow">
                  <i class="fa-solid fa-angle-right"></i>
               </div>
            </div>

            <div className="user-post">
               <div className="post-header">
                  <div class="user-content">
                  <img src={Image} alt="nice"/>
                     <div>
                        <h4>Voice of Khara</h4>
                        <p>Something * 2 hours</p>
                     </div>
                  </div>
                  <div className="icon">
                     <i class="fa-solid fa-ellipsis"></i>
                  </div>       
               </div>
               <div className="post">
                  <p>For Sale 2016</p>
                  <img src={image7} alt="nice"/>
               </div>
            </div>

         </div>
    )
 }
 
 export default Info;