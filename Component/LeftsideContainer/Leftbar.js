import React from 'react'
import "./Leftbar.css"
import image from "../images/profile.jpg"
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"
import image7 from "../images/image7.jpg"
import image8 from "../images/image8.jpg"
import image9 from "../images/image9.jpg"
import image10 from "../images/image10.jpg"
import image11 from "../images/image11.jpg"

export default function Leftbar() {
    return (
        <div className='Leftbar'>
            <div className='NotificationContainer'>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p style={{marginLeft:"-14px"}}>Notifications</p>
                    <p style={{ color: "#aaa", marginLeft:"40px" }}>See all</p>
                </div>
                <div style={{display:'flex', alignItems:"center" , marginTop:-10}}>
                    <img src={`${image1}`} className='notificationimg' alt="" />
                    <p style={{marginLeft:"40px", color:"#aaa", fontSize:40, textAlign:"start", width:"300px"}}> Mitchell liked your post</p>
                    <img src={`${image2}`} className='likeimage' alt=""/>
                </div>
                <div style={{display:'flex', alignItems:"center",marginTop:13 }}>
                    <img src={`${image3}`} className='notificationimg' alt="" />
                    <p style={{marginLeft:"20px", color:"#aaa", fontSize:39, textAlign:"start", width:"320px"}}> Sam started following you</p>
                    <img src={`${image4}`} className='followinguserimage' alt=""/>
                </div>
                <div style={{display:'flex', alignItems:"center",marginTop:13 }}>
                    <img src={`${image5}`} className='notificationimg' alt="" />
                    <p style={{marginLeft:"40px", color:"#aaa", fontSize:40, textAlign:"start", width:"300px"}}> Mitchell liked your post</p>
                    <img src={`${image6}`} className='likeimage' alt=""/>
                </div>
                <div style={{display:'flex', alignItems:"center",marginTop:13 }}>
                    <img src={`${image7}`} className='notificationimg' alt="" />
                    <p style={{marginLeft:"10px", color:"#aaa", fontSize:39, textAlign:"start", width:"320px"}}> ram started following you</p>
                    <img src={`${image8}`} className='followinguserimage' alt=""/>
                </div>
                <div style={{display:'flex', alignItems:"center",marginTop:13 }}>
                    <img src={`${image9}`} className='notificationimg' alt="" />
                    <p style={{marginLeft:"40px", color:"#aaa", fontSize:40, textAlign:"start", width:"300px"}}> Mitchell liked your post</p>
                    <img src={`${image10}`} className='likeimage' alt=""/>
                </div>
                <div style={{display:'flex', alignItems:"center",marginTop:13 }}>
                    <img src={`${image6}`} className='notificationimg' alt="" />
                    <p style={{marginLeft:"10px", color:"#aaa", fontSize:40, textAlign:"start", width:"320px"}}>hella started following you</p>
                    <img src={`${image2}`} className='followinguserimage' alt=""/>
                </div>
            </div>

            <div className='NotificationContainer'>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p style={{marginLeft:"-20px"}}>Explore</p>
                    <p style={{ color: "#aaa", marginLeft:"40px" }}>see all</p>
                </div>
                <div className="explore-image-container">
        <div className="explore-image-item">
            <img src={`${image}`} className="exploreimage" alt="" />
        </div>
        <div className="explore-image-item">
            <img src={`${image1}`} className="exploreimage" alt="" />
        </div>
        <div className="explore-image-item">
            <img src={`${image2}`} className="exploreimage" alt="" />
        </div>
        <div className="explore-image-item">
            <img src={`${image3}`} className="exploreimage" alt="" />
        </div>
        <div className="explore-image-item">
            <img src={`${image4}`} className="exploreimage" alt="" />
        </div>
        <div className="explore-image-item">
            <img src={`${image5}`} className="exploreimage" alt="" />
        </div>
        <div className="explore-image-item">
            <img src={`${image6}`} className="exploreimage" alt="" />
        </div>
        <div className="explore-image-item">
            <img src={`${image7}`} className="exploreimage" alt="" />
        </div>
        <div className="explore-image-item">
            <img src={`${image8}`} className="exploreimage" alt="" />
        </div>
        <div className="explore-image-item">
            <img src={`${image9}`} className="exploreimage" alt="" />
        </div>
        <div className="explore-image-item">
            <img src={`${image10}`} className="exploreimage" alt="" />
        </div>
        <div className="explore-image-item">
            <img src={`${image11}`} className="exploreimage" alt="" />
        </div>
        
                    
                </div>
                </div>
        </div>
    )
}