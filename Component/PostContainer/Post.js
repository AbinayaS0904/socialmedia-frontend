import React, { useState } from 'react';
import "./post.css";
import ProfileImage from "../images/profile.jpg"
import Image from "../images/image15.jpg"
import LikeIcon from "../images/like.png"
import CommentIcon from "../images/speech-bubble.png"
import Shareicon from "../images/share.png"
import Moreoption from "../images/more.png"
import anotherlikeicon from "../images/setLike.png"

export default function Post() {
    const [Like, setLike] = useState(LikeIcon);
    const [count, setCount] = useState(20);
    const [Comments, setComments] = useState([]);
    const [commentwriting, setCommentWriting] = useState('');
    const [show, setshow] = useState(false);

    const handleLike = () => {
        if (Like === LikeIcon) {
            setLike(anotherlikeicon);
            setCount(count + 1);
        } else {
            setLike(LikeIcon);
            setCount(count - 1);
        }
    }

    const addComment = () => {
        if (commentwriting.trim() !== '') {
            const newComment = {
                "id": "61fsbf23123123123123",
                "username": "Abinaya",
                "title": commentwriting
            }
            setComments(Comments.concat(newComment));
        }
        setshow(true);
    }

    const handleComment = () => {
        addComment();
    }

    return (
        <div className='PostContainer'>
            <div className='SubPostContainer'>
                <div>
                    <div style={{ display: 'flex', alignItems: "center" }}>
                        <img src={`${ProfileImage}`} className="PostImage" alt="" />
                        <div>
                            <p style={{ marginLeft: '10px', textAlign: "start" }}>Abinaya</p>
                            <p style={{ fontSize: "25px", textAlign: "start", marginLeft: 10, marginTop: -30 }}>Following by Vikram </p>
                        </div>
                        <img src={`${Moreoption}`} className="moreicons" alt="" />
                    </div>
                    <p style={{ textAlign: 'start', width: "100%", marginLeft: 10, marginTop: 0 }}>Remember that happiness is a way of travel – not a destination</p>
                    <img src={`${Image}`} className="PostImages" alt="" />
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", marginLeft: "10px" }}>
                            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                <img src={`${Like}`} className="iconsforPost" onClick={handleLike} alt="" />
                                <p style={{ marginLeft: "9px" }}>{count} Likes</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", marginLeft: 30, cursor: "pointer" }}>
                                <img src={`${CommentIcon}`} className="iconsforPost" onClick={handleComment} alt="" />
                                <p style={{ marginLeft: "9px" }}>{Comments.length} Comments</p>
                            </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", marginLeft: 900, cursor: "pointer" }}>
                            <img src={`${Shareicon}`} className="iconsforPost" alt="" />
                            <p style={{ marginLeft: "9px" }}>share</p>
                        </div>
                    </div>
                    {show &&
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={`${ProfileImage}`} className="PostImage" alt="" />
                            <input type="text" className='commentinput' placeholder='Comment....' onChange={(e) => setCommentWriting(e.target.value)} />
                            <button className='addCommentbtn' onClick={handleComment}>Post</button>
                        </div>
                    }
                    {Comments.map((item) => (
                        <div key={item.id} style={{ alignItems: "center" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img src={`${ProfileImage}`} className="PostImage" alt="" />
                                <p style={{ marginLeft: "6px", fontSize: 40 }}>{item.username}</p>
                            </div>

                            <p style={{ marginLeft: "125px", textAlign: 'start', marginTop: -25, fontFamily: "Palatino", fontSize: "45px" }}>{item.title}</p>
                            <p style={{ marginLeft: "125px", textAlign: 'start', marginTop: -30, color: "gray", fontSize: "30px" }}>Reply</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
