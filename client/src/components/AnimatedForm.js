import React,{useState} from 'react'
import './form.css'

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
export default function AnimatedForm(){
  const[pos,setPos]=useState(0)
  const[data,setData]=useState("")
   const[submitButton,setSubmitButton]=useState(true)
  const[buttonClick,setButtonClick]=useState(true)
  const[displayResult,setDisplayResult]=useState(false)

  const initialValue={
    
  }
  const[formData,setFormData]=useState(initialValue)
  var questions = [
    {question:"Do you have high BP (Yes/No)",option:{},type:'text',name:'highBp'},
    {question:"Do you have high Cholestrol (Yes/No)",option:{},type:'text',name:'highCol'},
    {question:"Have you checked your cholestorl in last 5 years(Yes/No)?",option:{},type:'email',name:'checkCol'},
    {question:"Have you smoked at least 100 cigarettes in your entire life? [Note: 5 packs = 100 cigarettes](Yes/No)",option:{},type:'text',name:'smoker'},
    {question:"Do you ever had stroke (Yes/No)",option:{},type:'text',name:'stroke'},
    {question:"coronary heart disease (CHD) or myocardial infarction (MI)(Yes/No)",option:{},type:'heart',name:'heart'},
    {question:"physical activity in past 30 days - not including job(Yes/No)",option:{},type:'text',name:'phyAct'},
    {question:"Consume Fruit 1 or more times per day (Yes/No)",option:{},type:'text',name:'fruits'},
    {question:"Consume Vegetables 1 or more times per day(Yes/No)",option:{},type:'text',name:'veggies'},
    {question:"Heavy drinkers (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)(Yes/No)",option:{},type:'text',name:'heavyAlcohol'},
    {question:"Would you say that in general your health is: (scale 1-5 => 1 = excellent 2 = very good 3 = good 4 = fair 5 = poor)",option:{},type:'text',name:'genHlt'},
    {question:"Now thinking about your mental health, which includes stress, depression, and problems with emotions, for how many days it has been bad in past 30days",option:{},type:'text',name:'menHlt'},
    {question:"Now thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days you have been ill",option:{},type:'text',name:'phyHlt'},
    {question:"Do you have serious difficulty walking or climbing stairs?(Yes/No)",option:{},type:'text',name:'diffWlk'},
    {question:"Gender (male/female) ",option:{},type:'text',name:'gender'},
    {question:"Age",option:{},type:'text',name:'age'},

    
  
  ]

  function clickHandler(event){
    event.preventDefault()
    console.log(pos)
     pos===questions.length-2?setSubmitButton(false):setSubmitButton(true)
     pos < questions.length-1? setPos(pos+1):setPos(0) 
     
   
    setData("")
    setButtonClick(!buttonClick)
   
    

    
  }
  console.log(submitButton)
    
  
  function handleChange(event) {
    setData(event.target.value)
    const{name,value}=event.target
    setFormData({
      ...formData,
      [name]:value,
    })

    console.log(formData)
    
  }
  function reset(){
    setButtonClick(!buttonClick)
    
  }
  function submitHandler() {
    console.log(formData)
    setDisplayResult(true)
    
  }
  return (
      <>
     {displayResult ?
     (
      <h1>Result</h1>
     )
     :(
       <div class='fullFrame'>
          <div class='heading mt-3'>Diabetes Prediction</div>
          <hr style={{width:'30%',backgroundColor:' #F49F0A',borderWidth:'3px' }}></hr>
         
       <div class='center'>
      
      <div id='register'>
     
      <div class='d-flex flex-column'>
        <div class='d-flex flex-row customLabel align-items-start' >
        <h1 style={{fontSize:'12px',marginRight:'10px'}}>{pos+1+'/'+questions.length}</h1>
      <label class='customLabel'>
        {questions[pos].question}
      </label>
        </div>
      <div class='d-flex flex-row'>
      <input class='custominputField' name={questions[pos].name} value={buttonClick?data:('' ,reset())} onChange={handleChange} type={questions[pos].type}  ></input>
   {
     Object.entries(questions[pos].option).map(([key,val])=>(
       <p>{val}</p>
     ))
   }
    
    <button class='arrowButton' onClick={clickHandler}>
      <ArrowForwardIcon fontSize='large' ></ArrowForwardIcon>
    </button>
      </div>
    <div>
      </div>
    {submitButton?'':<button class='customSubmitButton' onClick={submitHandler}>SUBMIT</button>}
    </div>
      
      </div>
    </div>
       </div>
     
     )
     }
     
      

      
      
      
      </>
  )
}
