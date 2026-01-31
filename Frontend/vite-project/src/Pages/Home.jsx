import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const {addToUserHistory} = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    }
    
  return (
    <>
    <div className="navbar">
        <div style={{display : "flex", alignItems : "center"}}>
            <h2>Meetify</h2>
        </div>

        <div style={{display : "flex", alignItems : "center"}}>
            <IconButton onClick={
                () => {
                    navigate("/history");
                }
            }>
                <RestoreIcon />
            </IconButton>
            <p>History</p>
            <Button onClick={() => {
                localStorage.removeItem("token")
                navigate("/auth");
            }}>
                Logout
            </Button>
        </div>
    </div>

    <div className="meetContainer">
        <div className="leftPanel">
            <div>
                <h2> Providing Quality Video Conferencing just for you.</h2>
                <div style={{display : "flex", gap : "10px"}}>
                    <TextField onChange={e => setMeetingCode(e.target.value)} id="oulined-basic" label="Meeting Code" variant="outlined" />
                        <Button onClick={handleJoinVideoCall} variant="contained">Join</Button>
                </div>
            </div>
        </div>

        <div className="rightPanel">
            <img src="/logo3.png"></img>
        </div>
    </div>
    </>
  )
}

export default withAuth(Home);
