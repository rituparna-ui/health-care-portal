from fastapi import FastAPI
from fastapi.params import Body

import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier

df = pd.read_csv('final_diabetes_data.csv')
df1=pd.read_csv('PCOS_data_final.csv')
df2=pd.read_csv('depression_data.csv')

#Diabetes prediction
X = df.drop(["Diabetes_012"], axis=1)
Y = df["Diabetes_012"]

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X,
                                                    Y,
                                                    test_size=0.2,
                                                    random_state=51)

rfc = RandomForestClassifier()
rfc.fit(X_train, y_train)

df1['Fast food (Y/N)'].fillna(df1['Fast food (Y/N)'].median(),inplace=True)

#PCOS prediction
X1=df1.drop("PCOS (Y/N)",axis=1)
Y1=df1["PCOS (Y/N)"]

rfc1=RandomForestClassifier(criterion='gini',max_depth=12,max_features='log2',n_estimators=200,n_jobs=1)
rfc1.fit(X1,Y1)

#Depression prediction
Y2=df2['Category']
X2=df2.drop('Category',axis=1)

rfc2=RandomForestClassifier()
rfc2.fit(X2,Y2)

app = FastAPI()


@app.post('/diabetes')
def predictDiabetes(body: dict = Body(...)):
    print(body)
    answer=(rfc.predict([[
        body['highBp'], body['highCol'], body['checkCol'], body['BMI'], body['smoker'], body['stroke'],
        body['phyAct'], body['fruits'], body['heavyAlcohol'], body['genHlt'], body['menHlt'], body['phyHlt'],
        body['diffWlk'], body['gender'], body['age']
    ]]))
    
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



