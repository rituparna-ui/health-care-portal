import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import './userSearch.css'

const UserSearch = () =>{
    const[location,setLocation]=useState('');
    const[resource,setResource]=useState('');
    const[latitude,setLatitude]=useState(0);
    const[longitude,setLongitude]=useState(0);
    const[resultData,setResultData]=useState()
    const[result,setResult]=useState(false)
    const[qty,setQty]=useState(0);
    
    const[buttonClick,setButtonClick]=useState(0);
    const getLocation =(location)=>{
        var string=location
        string = string.replace(/ /g,'+');
        console.log(string);
        /*axios.get(`https://geocode.xyz/${string}?json=1`)
        .then(res=>{
            console.log(res.data['latt'])
            setLatitude(res.data['latt'])
            setLongitude(res.data['longt'])
            setButtonClick(1);
        })
        .catch(err=>{
            console.log(err);
        })*/
       

        
    }
    const handleClick=()=>{
        
        console.log(resource,location,qty)
        
        getLocation(location)
        
            
    
        
    }
    const sendData= async()=>{

        console.log(resource,qty)
        /*const res= await fetch('http://localhost:5000/',{
            method:'GET'
            /*headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                resource,
                qty,
                location

            })
            
        })*/
        axios.post('http://localhost:5000/api/v1/hospitals/search',{
            resource,
            qty,
            location

        })
        .then(res=>{
            //console.log(res.data)
            setResultData(res.data.hospitals)
            setResult(true)
            
        })
        .catch(err=>{
            console.log(err)
        })


        //const response = await res.json()

        /*if(response.status(200)){
            console.log(response)
        }*/
        //console.log(resultData)

    }
    

    return (
        <>
       <Navbar/>
        <h1 className='heading'>Fetch Medical Resources</h1>
        <hr style={{width:'20%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
        <div class='searchBar pt-3 d-flex flex-row justify-content-center align-items-center'>
           
            <select className='inputBox' placeholder='search' onChange={e=>setResource(e.target.value)}>
                <option>general ward beds</option>
                <option>ICU beds</option>
                <option>oxygen cylinders</option>
                <option>ventilators</option>
            </select>
            <input onChange={e=>setQty(e.target.value)} type='number' className='inputBox' placeholder='quantity'></input>
            <input onChange={e=>setLocation(e.target.value)}className='inputBox' placeholder='location'></input>
            <button onClick={sendData} className='inputBox buttonClass' type='submit'>submit </button>
        </div>
        {
            result ? (
                <div>
                <div className='searchResult'>
                    {
                        resultData.map((key,val)=>(
                            <div className=' searchCard d-flex flex-row' 
                            style={{borderBottom:'solid',
                            borderBottomWidth:'1px',
                            borderBottomColor:'#7D7B7B',
                            paddingTop:'20px',
                            width:'70%'
                            
                                 }}
                        >
                                <div className='iconResult d-flex justify-content-center align-items-center flex-column'>
                                <span style={{color:'white'}} class="iconify" data-icon="fa-solid:hospital"></span>
                                </div>
                                <div className='d-flex flex-column sectionDivide'>
                                    <h2 className='searchName'>{key.name}</h2>
                                    <p className='textSearch'>{key.address}</p>
                                    <p className='textSearch' style={{fontWeight:'600'}}>{key.distance}km</p>
                                    
                                </div>
                                <div class='sectionDivide d-flex flex-wrap '>
                                    {
                                        (
                                            Object.entries(key.resources).map(([k,val])=>(
                                                <div class='d-flex flex-row'>
                                                     <p className='textSearch  fw-bold' style={{textAlign:'right',fontWeight:'500'}}>{k}:</p>
                                                <p className='textSearch mr-2' style={{textAlign:'right'}}>{val}</p>
                                                </div>
                                               
                                        ))
                                        )
                                    }
                                   
                                </div>
                                <div class='sectionDivide '>
                                    <p className='textSearch ' style={{textAlign:'right'}}>Contact no. :{key.phone}</p>
                                </div>
                            
                            </div>
                        ))
                    }
                    
                   
                    
                    
                    
                </div>
            </div>
            ):(null)
        }
        
        {/*<h1 class='pt-5 text-center'>User Search</h1>
        <input onChange={e=>setLocation(e.target.value)}></input>
    <button onClick={handleClick}>submit</button>*/}
        </>
    )

}

export default UserSearch;


