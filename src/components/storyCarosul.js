import image from "../image.jpg"
import "./story.css"
import  brand1 from "./images/brand2.avif"

const Story = () => {
    return(
        <div className="card-component">
            <div className="card">
                <img className="user-story" src= {image} alt="nice"/>
                <img className="user"  src= {brand1} alt="nice"/>
                <p>Name</p>
            </div>
            <div className="card">
                <img className="user-story" src= {image} alt="nice"/>
                <img className="user" src= {brand1} alt="nice"/>
                <p>Name</p>
            </div>

            <div className="card">
                <img className="user-story" src= {image} alt="nice"/>
                <img className="user" src= {brand1} alt="nice"/>
                <p>Name</p>
            </div>

            <div className="card">
                <img className="user-story" src= {image} alt="nice"/>
                <img className="user" src= {brand1} alt="nice"/>
                <p>Name</p>
            </div>

            <div className="card">
                <img className="user-story" src= {image} alt="nice"/>
                <img className="user" src= {brand1} alt="nice"/>
                <p>Name</p>
            </div>

            {/* <div className="card">
                <img className="user-story" src= {image} alt="nice"/>
                <img className="user" src= {brand1} alt="nice"/>
                <p>Name</p>
            </div> */}

        </div>
    )
}

export default Story

