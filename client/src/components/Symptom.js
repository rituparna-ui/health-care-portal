import React,{useState,useRef} from "react";
import Navbar from "./Navbar";
import './Symptom.css'
import SymptomButton from "./SymptomButton";
import Multiselect from "multiselect-react-dropdown"

const initialSymptom=['fever','cough','cold','shivering','pale eyes','headache',
    'stomachache','toothache'
]
const Symptom=()=>{
   
   const[questionState,setQuestionset]=useState(initialSymptom)
   const[answerState,setAnswerset]=useState([])
   const multiselectRef=useRef()
   
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
   const nextQuestionSubmit=()=>{
       var selectedSearchedSymptoms=multiselectRef.current.getSelectedItems()
       for(var i=0;i<selectedSearchedSymptoms.length;i++){
           setAnswerset([...answerState,selectedSearchedSymptoms[i]])
       }
       
   }
   console.log(answerState)
   const getSelected=(item)=>{
      return answerState.includes(item.key)
   }
   
   
   return(
       <>
       <Navbar/>
         <h1 className="heading">Heading</h1>
         <div className="symContainer">
             <div style={{width:'50%'}}>
                 <Multiselect
                 class="symSearch"
                 isObject={false}
                 options={initialSymptom}
                 ref={multiselectRef}
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
             <div>
                 <button style={{border:'none',borderRadius:'5px',marginTop:'20px',padding:'6px 20px',backgroundColor:'black',color:'white',}} onClick={nextQuestionSubmit}>next</button>
             </div>
             
            
             

         </div>
       </>
   )
}

export default Symptom