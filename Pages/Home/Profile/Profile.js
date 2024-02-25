import React from 'react';
import ProfileMainPost from '../../../Component/ProfileMainPostContainer/ProfileMainPost'
import Navbar from '../../../Component/Navbar/Navbar'; // Adjusted import path
import ProfileLeftbar from '../../../Component/ProfileLeftContainer/ProfileLeftbar'
import ProfileRightbar from '../../../Component/ProfileRightContainer/ProfileRightbar'
import "./profile.css";


import { useParams } from 'react-router-dom';


export default function Profile() {
    const { id } = useParams();

    if (!id) {
        return (
            <div className='ProfileContainer'>
                <Navbar />
                <div className='subProfileContainer'>
                    <ProfileLeftbar />
                    <ProfileMainPost />
                    <ProfileRightbar />
                </div>
            </div>
        );
    }



    return (
        <div className='ProfileContainer'>
           <Navbar/>
           <div className='subProfileContainer'>
            <ProfileLeftbar />
            <ProfileMainPost/>
            <ProfileRightbar />
           </div>
         
        </div>
    );
}
