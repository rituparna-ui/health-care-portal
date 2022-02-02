
@app.post('/diabetes')
def predictDiabetes(body: dict = Body(...)):
    print(body)
    answer=(rfc.predict([[
        body['highBp'], body['highCol'], body['checkCol'], body['BMI'], body['smoker'], body['stroke'],
        body['phyAct'], body['fruits'], body['heavyAlcohol'], body['genHlt'], body['menHlt'], body['phyHlt'],
        body['diffWlk'], body['gender'], body['age']
    ]]))
    
    print(accuracy_score())
    return {"answer": answer.tolist()}

@app.post('/pcos')
def predictPCOS(body:dict=Body(...)):
    answer=(rfc1.predict([[
        body['age'], body['weight'], body['height'], body['BMI'], body['pulseRate'], body['respRate'],
        body['cycle'], body['cycleLength'], body['hip'], body['waist'], body['WHR'], body['weightGain'],
        body['hairGrowth'], body['skinDark'], body['hairFall'], body['pimple'], 
        body['fastfood'],body['exercise']
    ]]))
    return {"answer":answer.tolist()}

@app.post('/depression')
def predictDepression(body:dict=Body(...)):
    sum=0
    for i in body:
        sum=sum+body[i]
    
    print(sum)
    answer=(rfc2.predict([[
        body['q3'],body['q5'],body['q10'],body['q13'],body['q16'],body['q17'],body['q21'],body['q24']
        ,body['q26'],body['q31'],body['q34'],body['q37'],body['q38'],body['q42'],sum
    ]]))

    return {"answer":answer.tolist()}



