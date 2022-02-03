import React,{useState} from 'react'
import './form.css'
import Navbar from './Navbar';
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import axios from 'axios';
export default function Diabetes(){
  const[pos,setPos]=useState(0)
  const[data,setData]=useState("")
   const[submitButton,setSubmitButton]=useState(true)
  const[buttonClick,setButtonClick]=useState(true)
  const[displayResult,setDisplayResult]=useState(false)
  const[result,setResult]=useState()

  const initialValue={
    
  }
  const[formData,setFormData]=useState(initialValue)
  var questions = [
    {question:"Do you have high BP (Yes/No)",option:{},type:'text',name:'highBp'},
    {question:"Do you have high Cholestrol (Yes/No)",option:{},type:'text',name:'highCol'},
    {question:"Have you checked your cholestorl in last 5 years(Yes/No)?",option:{},type:'email',name:'checkCol'},
    {question:"Have you smoked at least 100 cigarettes in your entire life? [Note: 5 packs = 100 cigarettes](Yes/No)",option:{},type:'text',name:'smoker'},
    {question:"Do you ever had stroke (Yes/No)",option:{},type:'text',name:'stroke'},
   
    {question:"physical activity in past 30 days - not including job(Yes/No)",option:{},type:'text',name:'phyAct'},
    {question:"Consume Fruit 1 or more times per day (Yes/No)",option:{},type:'text',name:'fruits'},
    
    {question:"Heavy drinkers (adult men having more than 14 drinks per week and adult women having more than 7 drinks per week)(Yes/No)",option:{},type:'text',name:'heavyAlcohol'},
    {question:"Would you say that in general your health is: (scale 1-5 => 1 = excellent 2 = very good 3 = good 4 = fair 5 = poor)",option:{},type:'text',name:'genHlt'},
    {question:"Now thinking about your mental health, which includes stress, depression, and problems with emotions, for how many days it has been bad in past 30days",option:{},type:'text',name:'menHlt'},
    {question:"Now thinking about your physical health, which includes physical illness and injury, for how many days during the past 30 days you have been ill",option:{},type:'text',name:'phyHlt'},
    {question:"Do you have serious difficulty walking or climbing stairs?(Yes/No)",option:{},type:'text',name:'diffWlk'},
    {question:"Gender (male/female) ",option:{},type:'text',name:'gender'},
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
    else if(value.toString().toLowerCase()==="female"){
      value=0.0
      console.log(value)
    }
    else if(value.toString().toLowerCase()==="male"){
      value=1.0
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
    console.log(BMI)
    console.log(formData)
    console.log('age',formData.age)
    formData.age=((formData.age-18)/5)
    formData.age=formData.age+1
    formData.age=Math.floor(formData.age)
    console.log('age',formData.age)
    
    const{highBp,highCol,checkCol,smoker,stroke,phyAct,fruits,heavyAlcohol,genHlt,menHlt,phyHlt,
    diffWlk,gender,age}=formData
    console.log(highBp)
    axios.post('http://localhost:5000/api/v1/ml/diabetes',{
       highBp,
       highCol,
       checkCol,
       BMI,
       smoker,
       stroke,
       phyAct,
       fruits,
       heavyAlcohol,
       genHlt,
       menHlt,
       phyHlt,
       diffWlk,
       gender,
       age

       

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
      
     {displayResult ?
     (
      <>
     <Navbar/>
      {
          result.map((key,val)=>{
            if(key===0){
               return <div class='infoDiabetic'>
                 <h2 style={{color:'green',fontFamily:'Bebas Neue',fontSize:'60px'}}>You're not diabetic</h2>
                 <div class='preventDiabetes'>
                   <h6>
                      You need to improve your daily lifestyle to keep yourself 
                      away from the risk of diabetes.
                   </h6>
                   <ul>
                     <li>Reduce your total carb intake</li>
                     <li>Exercise Regularly</li>
                     <li>Drink water as you primary beverage</li>
                     <li>Try to loose excess weight</li>
                     <li>Quit smoking</li>
                     <li>Reduce your portion sizes</li>
                     <li>Cut back on sedentary behaviours</li>
                     <li>Follow a high Fibre diet</li>
                   </ul>
                   <a href="https://www.healthline.com/nutrition/prevent-diabetes#8.-Follow-a-high-fiber-diet">read more...</a>
                 </div>
               </div>
            }else if(key==1){
              return <div class='infoDiabetic'>
                 <h2 style={{color:'orange',fontFamily:'Bebas Neue',fontSize:'60px'}}>You're Pre diabetic</h2>
                 <div class='preventDiabetes'>
                   <h4>
                   Is prediabetes reversible?
                   </h4>
                   Absolutely! You can turn back your prediabetes by adopting lifestyle changes, including:
                   <ul>
                     
                     <li>Monitor your blood sugar with your doctor. </li>
                     <li>Ensure you get enough sleep.</li>
                     <li>Reduce your stress. </li>
                     <li>Embrace regular exercise. </li>
                     <li>Choose the right beverages. Don't drink sweetend beverages and always stay hydrated</li>
                     <li>Avoid certain food like trans-fats,fried food,high calorie and high fat foods </li>
                     <li> Shed a few pounds. </li>
                     
                   </ul>
                   <p>note ** We recommend you to visit your doctor for necessary medication and proper guidance</p>
                   <a href="https://www.cdc.gov/diabetes/basics/prediabetes.html">read more...</a>
                 </div>
               </div>
            }else if(key===2){
              return <div class='infoDiabetic'>
              <h2 style={{color:'red',fontFamily:'Bebas Neue',fontSize:'60px'}}>You're Diabetic</h2>
              <div class='preventDiabetes'>
                <h5>
                Diabetes management requires awareness. Know what makes your blood sugar level rise and fall — and how to control these day-to-day factors.
                </h5>
                <p>Food</p>
                <ul>
                  <li>Learn about carbohydrate counting and portion sizes.  </li>
                  <li>Make every meal well balanced.</li>
                  <li>Coordinate your meals and medications.</li>
                  <li>Avoid sugar-sweetened beverages.</li>
                  
                  
                </ul>
                <p>Exercise</p>
                <ul>
                  <li>Keep an exercise schedule.   </li>
                  <li>Check your blood sugar level.</li>
                  <li>Stay hydrated. .</li>
                  <li>Adjust your diabetes treatment plan as needed.</li>
                  
                  
                </ul>
                <p>Medication</p>
                <ul>
                  <li>Store insulin properly.  </li>
                  <li>Be cautious with new medicine</li>
                  <li>Report problems to your doctor. .</li>
                 
                  
                </ul>
                <p>note ** We recommend you to visit your doctor for necessary medicine and proper guidance</p>
                <a href="https://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/diabetes-management/art-20047963">read more...</a>
              </div>
            </div>
            }
          })
      }
      </>

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
