import React,{useState} from 'react'
import './form.css'
import Navbar from './Navbar';
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import axios from 'axios';
export default function PCOSPrediction(){
  const[pos,setPos]=useState(0)
  const[data,setData]=useState("")
  const[submitButton,setSubmitButton]=useState(true)
  const[buttonClick,setButtonClick]=useState(true)
  const[displayResult,setDisplayResult]=useState(false)
  const[result,setResult]=useState([])

  const initialValue={
    
  }
  const[formData,setFormData]=useState(initialValue)
  var questions = [
    {question:"Pulse rate(bpm)",option:{},type:'text',name:'pulseRate'},
    {question:"Respiration Rate(breath/min)",option:{},type:'text',name:'respRate'},
    {question:"Regularity of menstrual Cycle (Regular/irregular)",option:{},type:'text',name:'cycle'},
    {question:"Menstrual Cycle length",option:{},type:'text',name:'cycleLength'},
    {question:"measurement of hip(inch)",option:{},type:'text',name:'hip'},
   
    {question:"measurement of waist(inch)",option:{},type:'text',name:'waist'},
    {question:"Are you Gaining weight recently (Yes/No)",option:{},type:'text',name:'weightGain'},
    
    {question:"Is your hair growth normal (Yes/no)",option:{},type:'text',name:'hairGrowth'},
    {question:"Are you experiencing skin Darkening (Yes/No)",option:{},type:'text',name:'skinDark'},
    {question:"Are you facing Hairfall issues (Yes/No)",option:{},type:'text',name:'hairFall'},
    {question:"Are you getting lot of pimples(Yes/no)",option:{},type:'text',name:'pimple'},
    {question:"Do you eat junk food a lot?(Yes/No)",option:{},type:'text',name:'fastfood'},
    {question:"Do you exercise regularly ?(Yes/No)",option:{},type:'text',name:'exercise'},
    {question:"Height in cm",option:{},type:'text',name:'height'},
    {question:"weight in kg",option:{},type:'text',name:'weight'},
    {question:"Age",option:{},type:'text',name:'age'},

    
  
  ]

  function clickHandler(event){
    event.preventDefault()
   
     pos===questions.length-2?setSubmitButton(false):setSubmitButton(true)
     pos < questions.length-1? setPos(pos+1):setPos(0) 
     
   
    setData("")
    setButtonClick(!buttonClick)
   
    

    
  }
  
    
  
  function handleChange(event) {
    setData(event.target.value)
    var{name,value}=event.target
    if(value.toString().toLowerCase()==="yes"){
      value=1.0
      console.log(value)
    }else if(value.toString().toLowerCase()==="no"){
      value=0.0
      console.log(value)
    }
    else if(value.toString().toLowerCase()==="regular"){
      value=2.0
      console.log(value)
    }
    else if(value.toString().toLowerCase()==="irregular"){
      value=4.0
      console.log(value)
    }
    setFormData({
      ...formData,
      [name]:value,
    })

   
  }
  function reset(){
    setButtonClick(!buttonClick)
    
  }
  function submitHandler() {
    var BMI = (formData.weight)/(formData.height)
    BMI= BMI/formData.height
    BMI=BMI*10000
    var WHR=formData.waist/formData.hip
    console.log(BMI)
    console.log(formData)
    
    const{pulseRate,respRate,cycle,cycleLength,hip,waist,weightGain,hairGrowth,skinDark,hairFall,
        pimple,fastfood,exercise,height,weight,age}=formData
    
    axios.post('http://localhost:5000/api/v1/ml/pcos',{
       age,
       weight,
       height,
       BMI,
       pulseRate,
       respRate,
       cycle,
       cycleLength,
       hip,
       waist,
       WHR,
       weightGain,
       hairGrowth,
       skinDark,
       hairFall,
        pimple,
        fastfood,
        exercise,

       

    }).then(res=>{
      console.log(res)
     
      setResult(res.data.probabilityArray.answer)
      setDisplayResult(true)
      
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
      <>
       <Navbar/>
     {displayResult ?
     (
      <>
      
      {
       result.map((key,val)=>{
          if(key===0){
            return <div class='infoDiabetic'>
            <h2 style={{color:'green',fontFamily:'Bebas Neue',fontSize:'60px'}}>You don't have PCOS</h2>
            <div class='preventDiabetes'>
              <p>
              Polycystic Ovary Syndrome (PCOS) is the most common hormonal condition in 
              reproductive age women. It usually affects up to 10% of women.
              PCOS can’t be prevented entirely because most cases are genetically acquired, though it doesn't necessarily
              mean you have PCOS since it may only develop if other risk factors are present in some cases
              </p>

              <p>
              Your lifestyle habits greatly contribute to the development of the disease. 
              All women are encouraged to do the following activities 
              </p>
              <ul>
                <li>Eat a healthy diet</li>
                <li>exercise to maintain their ideal weight</li>
                <li> avoid more than moderate alcohol and caffeine</li>
                <li>Manage stress</li>
                <li>Women with infertility, 
              irregular periods or abnormal hair growth should see a physician.</li>
              </ul>
              <a href="https://www.openaccessgovernment.org/everything-to-know-about-pcos/74236/">know more...</a>
            </div>
          </div>
          }else if(key===1){
            return <div class='infoDiabetic'>
            <h1 style={{color:'red',fontFamily:'Bebas Neue',fontSize:'60px'}}>You have PCOS</h1>
            <div class='preventDiabetes' >
              <p>
              Polycystic Ovary Syndrome (PCOS) is the most common hormonal condition in 
              reproductive age women. It usually affects up to 10% of women.
              PCOS can’t be prevented entirely because most cases are genetically acquired, though it doesn't necessarily
              mean you have PCOS since it may only develop if other risk factors are present in some cases
              </p>

              <p>
              Good management of PCOS can greatly reduce the symptoms and the long-term effects on your health. 
              </p>

              <p>The aim of managing your PCOS includes</p>
              <ul>
                <li>Getting care that is individualised to your needs</li>
                <li>Reducing symptoms</li>
                <li>Improving psychological and emotional heath</li>
                <li>preventing related long-term health conditions</li>
                <li>assisting with fertility and improving pregnancy outcomes, if required.</li>
              </ul>
              <p>The keys to achieving good management of PCOS include:</p>
              <ul>
                <li>a good understanding of PCOS</li>
                <li>a healthy approach to eating and physical activity</li>
                <li>appropriate medical therapies.</li>
              </ul>
              <a href="https://www.jeanhailes.org.au/health-a-z/pcos/management-treatment">know more...</a>
            </div>
          </div>
          }
       })
      }
      </>

     )
     :(
       <div>
        
         <div class='fullFrame'>
          <div class='heading mt-3'>PCOS Prediction</div>
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
       </div>
     
     )
     }
     
      

      
      
      
      </>
  )
}
