from fastapi import FastAPI
from fastapi.params import Body

import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier

df = pd.read_csv('kek.csv')

X = df.drop(["Diabetes_012"], axis=1)
Y = df["Diabetes_012"]

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X,
                                                    Y,
                                                    test_size=0.2,
                                                    random_state=51)

rfc = RandomForestClassifier()
rfc.fit(X_train, y_train)

app = FastAPI()


@app.post('/diabetes')
def predictDiabetes(body: dict = Body(...)):
    answer = rfc.predict_proba([[
        body['a'], body['b'], body['c'], body['d'], body['e'], body['f'],
        body['g'], body['h'], body['i'], body['j'], body['k'], body['l'],
        body['m'], body['n'], body['o'], body['p']
    ]])
    return {"answer": answer[0].tolist()}
