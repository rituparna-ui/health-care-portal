from fastapi import FastAPI
from fastapi.params import Body


import pandas as pd
import numpy as np
from sklearn import linear_model
df = pd.read_csv("home.csv")
model = linear_model.LinearRegression()
model.fit(df[['names']].values,df.price.values)


# import pickle

# with open('model','rb') as file:
#   mp = pickle.load(file)

app = FastAPI()

@app.post('/')
def root(payload:dict=Body(...)):
  answer = model.predict([[payload['area']]])
  return {"answer":answer[0]}