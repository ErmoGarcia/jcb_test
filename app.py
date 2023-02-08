from flask import Flask, render_template
import pandas as pd

import numpy as np
from numpy.random import default_rng

import logging

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/data")
def json_data():
    df = get_df()
    return df.to_json()

def get_df():
    a = default_rng(100).random((1000))*100
    b = a.copy() % 10
    df = pd.DataFrame({"a": a, "b": b})
    return df

app.run(debug=True)
