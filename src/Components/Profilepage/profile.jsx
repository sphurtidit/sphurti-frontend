 import React, { useState } from "react";
import profile from './profile.module.css';
function ProfilePage(){
    return(
        <div className={profile.ProfilePage}>
                <div className= {profile.info}>
                    <div>
                    <div className={profile.image} >
                        <h3 className={profile.heading}>Profile photo</h3>
                    </div>
                    <div className={profile.contact}>
                        <h3 className={profile.contactinfo}>Phone: 1234567890 <br /> Email: example@gmail.com</h3>
                    </div>
                    </div>
                    <div className={profile.mainheading}>
                        <div className={profile.bgplate}><h2 className={profile.text}> Your Name : Name</h2></div>
                        {/* <h3>Name</h3> */}
                        <div className={profile.bgplate1}><h2 className={profile.text}> College: DIT</h2></div>
                        {/* <h3>DIT</h3> */}
                        <div className={profile.bgplate}><h2 className={profile.text}> College ID: ID</h2></div>
                        {/* <h3>ID</h3> */}
                        <div className={profile.bgplate1}><h2 className={profile.text}> Branch: CSE</h2></div>
                        {/* <h3>CSE</h3> */}
                        <div className={profile.bgplate}><h2 className={profile.text}> Year: 2nd</h2></div>
                    </div>
                </div>
                <br />
                <br />
                <div className={profile.scroller}>
                    <h1 className={profile.register}>Registered events</h1>
                    <div className={profile.registered}>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                        <img src="https://www.joomfreak.com/media/k2/items/cache/245effadf41c6129f4fe7accc564ef86_L.jpg" className="events"></img>
                    </div>
                    <br />
                </div>
            </div>
    )
}
export default ProfilePage