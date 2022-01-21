import pandas as pd
import numpy as np

from sklearn import linear_model

df = pd.read_csv("home.csv")

model = linear_model.LinearRegression()
model.fit(df[['names']].values,df.price.values)
