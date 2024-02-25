import React from 'react';
import "./contentpost.css";
import imageIcon from "../images/gallery.png";
import emojiIcon from "../images/pikachu.png";
import VideoIcon from "../images/video.png";
import profileimage from "../images/profile.jpg";

export default function ContentPost() {
    return (
        <div className='ContentUploadContainer'>
            <div className='contentWrapper'>
                <img src={`${profileimage}`} className="profileimage" alt="" />
                <input type="text" className='contentWritingpart' placeholder="Write something..." />
            </div>
            <div style={{ display: 'flex', marginLeft: '10px' }}>
                <div>
                    <img src={`${imageIcon}`} className="icons" alt="" />
                    <img src={`${emojiIcon}`} className="icons" alt="" />
                    <img src={`${VideoIcon}`} className="icons" alt="" />
                    <button style={{ marginLeft: "1190px", paddingLeft: "80px", paddingRight: "80px", paddingTop: 20, paddingBottom: 20, border: "none", backgroundColor: "black", color: "white", borderRadius: "8px",fontSize: "30px" }}>Post</button>
                </div>
            </div>
        </div>
    );
}
