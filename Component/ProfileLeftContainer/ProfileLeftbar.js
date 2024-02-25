import React from 'react'
import "./profileLeftbar.css"
import image from "../images/prof.jpg"
import image1 from "../images/image1.jpg"
import image2 from "../images/profile.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
//import image5 from "../images/image5.jpg"
//import image6 from "../images/image6.jpg"
import image7 from "../images/image7.jpg"
import image8 from "../images/image15.jpg"
//import image9 from "../images/image13.jpg"
//import image10 from "../images/image12.jpg"
import image11 from "../images/image11.jpg"

export default function ProfileLeftbar() {
    return (
        <div className='ProfileLeftbar'>
            <div className='NotificationContainer'>
                <img src={`${image}`} className="ProfilepageCover" alt="" />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: -70 }}>
                    <img src={`${image2}`} className="Profilepageimage" alt="" />
                <div>
                  <p style={{ marginLeft: 6, marginTop: 20, color: "black", textAlign: 'start', fontSize: 50 }}>Abinaya</p>
                  <p style={{ marginLeft: 6, marginBottom: 10, color: "black", textAlign: 'start', marginTop: -50, fontSize: 30 }}>Student</p>
        </div>
    </div>
    <div style={{display:'flex',justifyContent:'space-around'}}>
        <p style = {{color:"black",marginLeft:-140, fontSize:40}}>Profile Views</p>
        <p style = {{color:"black",marginRight:-140}}>3456</p>

    </div>
    
    <div style={{display:'flex',justifyContent:'space-around',marginTop:-50}}>
        <p style = {{color:"black",marginLeft:-190, fontSize:40}}>Friends</p>
        <p style = {{color:"black",marginRight:-190}}>364K</p>

    </div>
    
    <div style={{marginTop:-66}}>
        <h5 style = {{color:"black",marginLeft:10, fontSize:40,textAlign:"start"}}>User Bio</h5>
        <p style = {{color:"black",marginRight:10,textAlign:"center",marginLeft:"20px",marginTop:-70}}>Life is art, make your masterpiece! ✨ 🎨</p>

    </div>
    <button style={{width:"100%",paddingTop:10,paddingBottom:10,border:"none",backgroundColor:"black",color:"white",fontSize: 30,fontWeight: "bold"}}>Edit Bio</button>


            
                
               
            </div>

            <div className='NotificationContainer'>
                <h3>YOUR FRIENDS</h3>
                <div style={{display:"flex",justifyContent:'space-between'}}>
                    <p style={{marginLeft:50}}>Friends</p>
                    <p style={{marginRight:50, color:"grey"}}>See all</p>
                </div>
                <div style={{display:'flex',flexWrap:"wrap"}}>
                    <div style={{marginLeft:15}}>
                        <img src={`${image1}`} className="friendimage" alt="" />
                        <p style={{marginTop:-10}}>Jane</p>
                    </div>

                    <div style={{marginLeft:15}}>
                        <img src={`${image3}`} className="friendimage" alt="" />
                        <p style={{marginTop:-10}}>Miller</p>
                    </div>

                    <div style={{marginLeft:15}}>
                        <img src={`${image4}`} className="friendimage" alt="" />
                        <p style={{marginTop:-10}}>Vamika</p>
                    </div>

                    <div style={{marginLeft:15}}>
                        <img src={`${image11}`} className="friendimage" alt="" />
                        <p style={{marginTop:-10}}>Virat</p>
                    </div>

                    <div style={{marginLeft:15}}>
                        <img src={`${image7}`} className="friendimage" alt="" />
                        <p style={{marginTop:-10}}>Siddu</p>
                    </div>

                    <div style={{marginLeft:15}}>
                        <img src={`${image8}`} className="friendimage" alt="" />
                        <p style={{marginTop:-10}}>Harsha</p>
                    </div>

                   

                </div>
                
                </div>
        </div>
    )
}