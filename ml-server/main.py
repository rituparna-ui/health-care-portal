from fastapi import FastAPI
from fastapi.params import Body

import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn import tree
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import SGDClassifier
from scipy.stats import mode


from sklearn.preprocessing import LabelEncoder
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier


df = pd.read_csv('final_diabetes_data.csv')
df1=pd.read_csv('PCOS_data_final.csv')
df2=pd.read_csv('depression_data.csv')

#Diabetes prediction
X = df.drop(["Diabetes_012"], axis=1)
Y = df["Diabetes_012"]

rfc = RandomForestClassifier()
rfc.fit(X, Y)




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

data = pd.read_csv('./Training.csv',header=0).dropna(axis = 1)
encoder = LabelEncoder()
data["prognosis"] = encoder.fit_transform(data["prognosis"])
XDisease = data.iloc[:,:-1]
yDisease = data.iloc[:, -1]
symptoms = data.columns.values

final_svm_model = SVC()
final_nb_model = GaussianNB()
final_rf_model = RandomForestClassifier(random_state=18)
final_svm_model.fit(XDisease, yDisease)
final_nb_model.fit(XDisease, yDisease)
final_rf_model.fit(XDisease, yDisease)

symptoms = X.columns.values
 
# Creating a symptom index dictionary to encode the
# input symptoms into numerical form
symptom_index = {}
for index, value in enumerate(symptoms):
    symptom = " ".join([i.capitalize() for i in value.split("_")])
    symptom_index[symptom] = index
 
data_dict = {
    "symptom_index":symptom_index,
    "predictions_classes":encoder.classes_
}
 
# Defining the Function
# Input: string containing symptoms separated by commmas
# Output: Generated predictions by models
def predictDisease(symptoms):
    symptoms = symptoms.split(",")
     
    # creating input data for the models
    input_data = [0] * len(data_dict["symptom_index"])
    for symptom in symptoms:
        index = data_dict["symptom_index"][symptom]
        input_data[index] = 1
         
    # reshaping the input data and converting it
    # into suitable format for model predictions
    input_data = np.array(input_data).reshape(1,-1)
     
    # generating individual outputs
    rf_prediction = data_dict["predictions_classes"][final_rf_model.predict(input_data)[0]]
    nb_prediction = data_dict["predictions_classes"][final_nb_model.predict(input_data)[0]]
    svm_prediction = data_dict["predictions_classes"][final_svm_model.predict(input_data)[0]]
     # making final prediction by taking mode of all predictions
    final_prediction = mode([rf_prediction, nb_prediction, svm_prediction])[0][0]
    predictions = {
        "rf_model_prediction": rf_prediction,
        "naive_bayes_prediction": nb_prediction,
        "svm_model_prediction": nb_prediction,
        "final_prediction":final_prediction
    }
    return predictions['final_prediction']

def nextSet(st,selected):
  res=''
  st=set(st.split(','))
  selected=st.split(',')
  for i in selected:
    st=st.intersection(neighbours[i])
  for r in st:
    res+=r+','
  if res=='':
    return res
  else:
    return res[:-1]

mat=data.to_numpy()[:,:-1]
neighbours={}
for symp in range(0,mat.shape[1]):
  ls=[]
  for row in range(0,mat.shape[0]):
    if mat[row][symp]==1:
      for itr in range(0,mat.shape[1]):
        if itr!=symp and mat[row][itr]==1 and not symptoms[itr] in ls:
          ls.append(symptoms[itr])
  neighbours[symptoms[symp]] = set(ls)

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


@app.post('/disease')
def predictDepression(body:dict=Body(...)):
    sum=0
    for i in body:
        sum=sum+body[i]
    
    answer=predictDisease(body['symptoms'])

    return {"answer":answer.tolist()}
