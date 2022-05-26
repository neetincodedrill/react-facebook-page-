
import "./story.css"

const Story = ({name,image,profile_pic}) => {
    return( 
            <div className="card">
                <img className="user-story" src= {image} alt={name}/>
                <div>
                   <img className="user"  src= {profile_pic} alt={name}/>
                </div>           
                <p>{name}</p>
            </div>           
    )
}

export default Story
