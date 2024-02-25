import React from 'react';
import "./profileRightbar.css";
//import ads from "../images/ads.jpg";
//import ads1 from "../images/ad1.jpg";
//import ads2 from "../images/ad2.jpg";
import addFriend from "../images/add-user.png";
import image5 from"../images/image5.jpg";
import image4 from"../images/image3.jpg";
import image3 from"../images/image12.jpg"
import image2 from"../images/image4.jpg"
import image1 from"../images/image1.jpg"
import image6 from"../images/image13.jpg"




export default function ProfileRightbar() {
    return (
        <div className='profileRightbar'>
            <div className='profrightcontainer'>
                <h3>Friend Request</h3>
                <div>
                    <div>
                    <div style={{display:'flex', alignItems:"center",marginLeft:15,marginTop:20,cursor:"pointer"}}>
                        <img src={`${image1}`} className="Friendimage" alt="" />
                        <p style={{textAlign:"start",marginLeft:15}}>Riya requested to follow you</p>

                    </div>
                    <div style={{display:"flex", justifyContent:'space-around'}}>
                    <button style={{paddingLeft:"70px",paddingRight:"70px",paddingTop:20,paddingBottom:20,border:"none",backgroundColor:"black",color:"white",fontSize:25,marginTop:10,borderRadius:50}}>Accept</button>
                    <button style={{paddingLeft:"70px",paddingRight:"70px",paddingTop:20,paddingBottom:20,border:"none",backgroundColor:"black",color:"white",fontSize:25,marginTop:10,borderRadius:50}}>Deny</button>
                    </div>

                    <div style={{display:'flex', alignItems:"center",marginLeft:15,marginTop:20,cursor:"pointer"}}>
                        <img src={`${image2}`} className="Friendimage" alt="" />
                        <p style={{textAlign:"start",marginLeft:15}}>Riya requested to follow you</p>

                    </div>
                    <div style={{display:"flex", justifyContent:'space-around'}}>
                    <button style={{paddingLeft:"70px",paddingRight:"70px",paddingTop:20,paddingBottom:20,border:"none",backgroundColor:"black",color:"white",fontSize:25,marginTop:5,borderRadius:50}}>Accept</button>
                    <button style={{paddingLeft:"70px",paddingRight:"70px",paddingTop:20,paddingBottom:20,border:"none",backgroundColor:"black",color:"white",fontSize:25,marginTop:10,borderRadius:50}}>Deny</button>
                    </div>

                    <div style={{display:'flex', alignItems:"center",marginLeft:15,marginTop:20,cursor:"pointer"}}>
                        <img src={`${image3}`} className="Friendimage" alt="" />
                        <p style={{textAlign:"start",marginLeft:15}}>Riya requested to follow you</p>

                    </div>
                    <div style={{display:"flex", justifyContent:'space-around'}}>
                    <button style={{paddingLeft:"70px",paddingRight:"70px",paddingTop:20,paddingBottom:20,border:"none",backgroundColor:"black",color:"white",fontSize:25,marginTop:10,borderRadius:50}}>Accept</button>
                    <button style={{paddingLeft:"70px",paddingRight:"70px",paddingTop:20,paddingBottom:20,border:"none",backgroundColor:"black",color:"white",fontSize:25,marginTop:10,borderRadius:50}}>Deny</button>
                    </div>

                    
                    </div>
                    

                    
                    
                </div>
                
            </div>

            <div className='rightcontainer2'>
                <h3 style={{textAlign:"start", marginleft: '20px'}}>Suggested for you</h3>
                <div style={{marginTop:"-30px"}}>
                <div>
                    <div style={{display:'flex', alignItems:"center", justifyContent:'space-between'}}>
                        <div style={{display:'flex', alignItems:"center"}}>
                        <img src={`${image5}`} className="Profileimage" alt="" />
                        <div>
                        <p style={{marginLeft:"20px", fontSize: "40px",textAlign:'start'}}>Sathya</p>
                        <p style={{marginLeft:"30px", fontSize: "30px",textAlign:'start', marginTop: '-28px', color:"#aaa"}}>Suggested For You</p>
                        </div>
                        </div>
                        <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:30,  borderRadius:"50%" }}>
                            <img src={`${addFriend}`} className="addFriend" alt="" />
                        </div>
                    </div>
                </div>
                </div>

                <div style={{marginTop:"-30px"}}>
                <div>
                    <div style={{display:'flex', alignItems:"center", justifyContent:'space-between'}}>
                        <div style={{display:'flex', alignItems:"center"}}>
                        <img src={`${image4}`} className="Profileimage" alt="" />
                        <div>
                        <p style={{marginLeft:"20px", fontSize: "40px",textAlign:'start'}}>Abhishekh</p>
                        <p style={{marginLeft:"30px", fontSize: "30px",textAlign:'start', marginTop: '-28px', color:"#aaa"}}>Followed by Ayra</p>
                        </div>
                        </div>
                        <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:30,  borderRadius:"50%" }}>
                            <img src={`${addFriend}`} className="addFriend" alt="" />
                        </div>
                    </div>
                    </div>
                </div>

                <div style={{marginTop:"-30px"}}>
                <div>
                    <div style={{display:'flex', alignItems:"center", justifyContent:'space-between'}}>
                        <div style={{display:'flex', alignItems:"center"}}>
                        <img src={`${image3}`} className="Profileimage" alt="" />
                        <div>
                        <p style={{marginLeft:"20px", fontSize: "40px",textAlign:'start'}}>Dev Dixit</p>
                        <p style={{marginLeft:"30px", fontSize: "30px",textAlign:'start', marginTop: '-28px', color:"#aaa"}}>Suggested For You</p>
                        </div>
                        </div>
                        <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:30,  borderRadius:"50%" }}>
                            <img src={`${addFriend}`} className="addFriend" alt="" />
                        </div>
                    </div>
                    </div>
                </div>

                <div style={{marginTop:"-30px"}}>
                <div>
                    <div style={{display:'flex', alignItems:"center", justifyContent:'space-between'}}>
                        <div style={{display:'flex', alignItems:"center"}}>
                        <img src={`${image2}`} className="Profileimage" alt="" />
                        <div>
                        <p style={{marginLeft:"20px", fontSize: "40px",textAlign:'start'}}>Sonakshi</p>
                        <p style={{marginLeft:"30px", fontSize: "30px",textAlign:'start', marginTop: '-28px', color:"#aaa"}}>Followed by Dane</p>
                        </div>
                        </div>
                        <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:30,  borderRadius:"50%" }}>
                            <img src={`${addFriend}`} className="addFriend" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                    

                <div style={{marginTop:"-30px"}}>
                <div>
                    <div style={{display:'flex', alignItems:"center", justifyContent:'space-between'}}>
                        <div style={{display:'flex', alignItems:"center"}}>
                        <img src={`${image1}`} className="Profileimage" alt="" />
                        <div>
                        <p style={{marginLeft:"20px", fontSize: "40px",textAlign:'start'}}>Visali</p>
                        <p style={{marginLeft:"30px", fontSize: "30px",textAlign:'start', marginTop: '-28px', color:"#aaa"}}>Suggested For You</p>
                        </div>
                        </div>
                        <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:30,  borderRadius:"50%" }}>
                            <img src={`${addFriend}`} className="addFriend" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                    

                <div style={{marginTop:"-30px"}}>
                <div>
                    <div style={{display:'flex', alignItems:"center", justifyContent:'space-between'}}>
                        <div style={{display:'flex', alignItems:"center"}}>
                        <img src={`${image6}`} className="Profileimage" alt="" />
                        <div>
                        <p style={{marginLeft:"20px", fontSize: "40px",textAlign:'start'}}>Arjun</p>
                        <p style={{marginLeft:"30px", fontSize: "30px",textAlign:'start', marginTop: '-28px', color:"#aaa"}}>Suggested For You</p>
                        </div>
                        </div>
                        <div style={{backgroundColor:"#aaa", padding:'10px', marginRight:30,  borderRadius:"50%" }}>
                            <img src={`${addFriend}`} className="addFriend" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                    

                    
                    

                    
                
               
            </div>
        </div>
    );
}
