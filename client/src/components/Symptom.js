import React,{useState,useRef} from "react";
import Navbar from "./Navbar";
import './Symptom.css'
import SymptomButton from "./SymptomButton";
import axios from 'axios'
import Multiselect from "multiselect-react-dropdown"

const initialSymptom=['itching','skin_rash','nodal_skin_eruptions','burning_micturition', 'pain_behind_the_eyes', 'inflammatory_nails', 'silver_like_dusting', 'mild_fever', 
]
const Symptom=()=>{
   
   const[questionState,setQuestionset]=useState(initialSymptom)
   const[answerState,setAnswerset]=useState([])
   const multiselectRef=useRef()
   const[displayAnswer,setDisplayAnswer]=useState(false)
   const[disease,setDisease]=useState('')
   
   const getSelectedSearchedItems=()=>{
       return multiselectRef.current.getSelectedItems()
   }
   const ClickHandler=(value)=>{
       console.log(value.key)
       if(answerState.indexOf(value.key)<=-1){
       
        setAnswerset([...answerState,value.key])
       }else{
           
           let filteredQuestion=answerState.filter(item=>item!==value.key)
           setAnswerset(filteredQuestion)
       }

      
  
             
       
       
   }
   const getAnswerState=()=>{
    var selectedSearchedSymptoms=multiselectRef.current.getSelectedItems()
    for(var i=0;i<selectedSearchedSymptoms.length;i++){
      
        //console.log(selectedSearchedSymptoms.indexOf(selectedSearchedSymptoms[i]))
        setAnswerset([...answerState,selectedSearchedSymptoms[i]])
    
         
     }
   }
   const nextQuestionSubmit=()=>{
       
   
       axios.post('http://localhost:5000/api/v1/ml/disease',{
             answerState
       }).then(res=>{
           console.log(res.data.probabilityArray.answer)
           if(res.data.probabilityArray.answer){
                console.log(res.data.probabilityArray.answer)
                if(res.data.probabilityArray.answer.length===0){
                    setDisplayAnswer(true)
                }else{
                    setQuestionset(res.data.probabilityArray.answer)
                }
                
           }else{
            console.log(res.data.probabilityArray.answer)
           }
          
       }).catch(err=>{
           console.log(err)
       })
   }
   
   const submitHandler=()=>{
        axios.post('http://localhost:5000/api/v1/ml/predict',{
            answerState
        }).then(res=>{
            console.log(res)
            setDisplayAnswer(true)
            setDisease(res.data.probabilityArray.answer)
        }).catch(err=>{
            console.log(err)
        })
   }
   
   console.log(answerState)
   const getSelected=(item)=>{
      return answerState.includes(item.key)
   }
   
   
   return(
       <>
       <Navbar/>
         <h1 className="heading">Heading</h1>
         {
             !displayAnswer?(
                <div className="symContainer">
                <div class="searchSize" style={{width:'50%'}}>
                    <Multiselect
                    class="symSearch"
                    isObject={false}
                    options={initialSymptom}
                    ref={multiselectRef}
                    onSelect={getAnswerState}
                    />
   
                   
                </div>
                <div className="allSymButtons">
                     
                       {
                          questionState.map((key,value)=>(
                           <>
                           <SymptomButton onClick={()=>ClickHandler({key})}
                            item={key} 
                            selected={getSelected({key})}
                            ></SymptomButton>
                          
                           </>
                           
                           
                           
                       ))
                          
                       }
   
                </div>
                <div class='d-flex flex-row justify-content-center '>
                <button style={{marginRight:'50px',border:'none',borderRadius:'5px',marginTop:'20px',padding:'6px 20px',backgroundColor:'#00A6A6',color:'white',}} onClick={submitHandler}>submit</button>
                    <button style={{border:'none',borderRadius:'5px',marginTop:'20px',padding:'6px 20px',backgroundColor:'black',color:'white',}} onClick={nextQuestionSubmit}>next</button>
                    
                </div>
                
                
               
                
   
            </div>
            ):(
                !disease?(
                    <div class='d-flex justify-content-center align-items-center '>
                     <button style={{marginRight:'50px',border:'none',borderRadius:'5px',marginTop:'20px',padding:'6px 20px',backgroundColor:'#00A6A6',color:'white',}} onClick={submitHandler}>submit</button>
                    </div>
                     
                ):
                <div class='d-flex  justify-content-center'>
                    <h1>{disease}</h1>
                </div>)
         }
         
       </>
   )
}

export default Symptom