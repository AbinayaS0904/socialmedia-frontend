import React from 'react'
import "./profileMainPost.css"
import Coverimage from "../images/profile.jpg"
import ContentPost from "../ContentPostContainer/ContentPost"
import Post from'../PostContainer/Post';

export default function ProfileMainPost(){
    return(
        <div ClassName='ProfileMainPostContainer'>
            <div>
                <img src={`${Coverimage}`} className="profileCoverimage" alt="" />
                <h2 style={{ marginTop: -90, color: "white", textAlign: "start", marginLeft: "34px" }}>Your Profile</h2>
            </div>
            <ContentPost />
            <Post />
            <Post />
            <Post />

        </div>
    )
    

}