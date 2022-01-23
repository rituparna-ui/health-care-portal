import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AssignmentIcon from "@material-ui/icons/Assignment"
import PhoneIcon from "@material-ui/icons/Phone";

import React, { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "simple-peer";
import io from "socket.io-client";
import "./videocall.css";
const socket=io.connect("http://localhost:5000")
const Video =()=>{
    
    const[me,setMe]=useState("");
    const [stream, setStream] = useState();
	const [receivingCall, setReceivingCall] = useState(false);
	const [caller, setCaller] = useState("");
	const [callerSignal, setCallerSignal] = useState();
	const [callAccepted, setCallAccepted] = useState(false);
	const [idToCall, setIdToCall] = useState("");
	const [callEnded, setCallEnded] = useState(false);
	const [name, setName] = useState("");

    const myVideo = useRef();
	const userVideo = useRef();
	const connectionRef = useRef();


    useEffect(()=>{

        navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((stream)=>{
            setStream(stream)
            myVideo.current.srcObject(stream)
        })

        socket.on('me',(id)=>{
            setMe(id)
        })

        socket.on("callUser",(data)=>{
            setReceivingCall(true)
            setCaller(data.from)
            setName(data.name)
            setCallerSignal(data.signal)
        })
    },[])

    const callUser=(id)=>{
       const peer=new Peer({
           initiator:true,
           trickle:false,
           stream:stream
       })
       peer.on("signal",(data)=>{
           socket.emit("CallUser",{
               userToCall:id,
               signalData:data,
               from:me,
               name:name
           })
       })
       peer.on("stream",(stream)=>{
           userVideo.current.srcObject=stream
       })

       socket.on("callAccepted",(signal)=>{
           setCallAccepted(true)
           peer.signal(signal)
       })

       connectionRef.current=peer

    }

    const answerCall=()=>{
        setCallAccepted(true)
        const peer=new Peer({
            initiator:true,
            trickle:false,
            stream:stream
        })

        peer.on("signal",(data)=>{
            socket.emit("answerCall",{signal:data,to:caller})
        })

        peer.on("stream",(stream)=>{
            userVideo.current.srcObject=stream
        })

        peer.signal(callerSignal)
        connectionRef.current=peer
    }

    const leaveCall=()=>{
        setCallEnded(true)
        connectionRef.current.destroy()
    }

    const handleCopyToClipBoard = async () => {
		console.log(me);
		await navigator.clipboard.writeText(me);
	};
    return(
        <>
        <div class="videoCallHolder">
			

			<div className="container">
				<div className="video-container">
					<div className="video">
						{stream && (
							<video
								playsInline
								muted
								ref={myVideo}
								autoPlay
								style={{ width: "400px" }}
							/>
						)}
					</div>
					<div className="video">
						{callAccepted && !callEnded ? (
							<video
								playsInline
								ref={userVideo}
								autoPlay
								style={{ width: "400px" }}
							/>
						) : null}
					</div>
				</div>
				<div className="myId">
                    <h4 style={{textAlign:"center",fontFamily:"Poppins"}}> Enter details</h4>
					<TextField
						
						label="Name"
						variant="filled"
						value={name}
						onChange={(e) => setName(e.target.value)}
						style={{ marginBottom: "20px" }}
					/>
					{/*<Button
						variant="contained"
						className="copyBtn"
						style={{ marginBottom: "2rem" ,'backgroundColor':"#036",'color':'white'}}
						onClick={handleCopyToClipBoard}
					>
						<AssignmentIcon ></AssignmentIcon>
						<span > Copy ID</span>
                    </Button>*/}

					<TextField
						id="filled-basic"
						label="ID to call"
						variant="filled"
						value={idToCall}
						onChange={(e) => setIdToCall(e.target.value)}
					/>
					<div className="call-button">
						{callAccepted && !callEnded ? (
							<Button
								style={{
									"background-color": "rgba(255,255,0,0)",
									border: "none",
									color: "white",
								}}
								variant="contained"
								color="rgba(255,255,0,0)"
								onClick={leaveCall}
							>
								End Call
							</Button>
						) : (
							<IconButton
								color="white"
								aria-label="call"
								onClick={() => callUser(idToCall)}
							>
								<PhoneIcon
									color="white"
									
								></PhoneIcon>
							</IconButton>
						)}
						{idToCall}
					</div>
				</div>
				<div>
					{receivingCall && !callAccepted ? (
						<div className="caller">
							<h1>{name} is calling...</h1>
							<Button
								variant="contained"
								color="primary"
								onClick={answerCall}
							>
								Answer
							</Button>
						</div>
					) : null}
				</div>
			</div>
		</div>
        </>
    )
}

export default Video