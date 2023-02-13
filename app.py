from flask import Flask, render_template, jsonify
from apispec import APISpec
from apispec_webframeworks.flask import FlaskPlugin

import pandas as pd
import numpy as np
from numpy.random import default_rng

import logging

app = Flask(__name__)
rng = default_rng(100)

spec = APISpec(
    title = 'JCB Web App',
    version = '1.0.0',
    openapi_version = '3.0.3',
    plugins=[FlaskPlugin()]
)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/data")
def json_data():
    """Get data in json format.
    ---
    get:
        description: Get randomly generated data
        responses:
            200:
                description: Return data consisting of two columns. Column a consists of random numbers in the 0-100 range. Column b consists of column a data modulo 10.
                content:
                    application/json:
                        schema:
                            type: object
                            properties:
                                a:
                                    type: object
                                    additionalProperties:
                                        type: number
                                        minimum: 0
                                        maximum: 100
                                b:
                                    type: object
                                    additionalProperties:
                                        type: number
                                        minimum: 0
                                        maximum: 10
    """
    df = get_df()
    return df.to_json()

@app.route("/swagger.json")
def swagger_spec():
    return jsonify(spec.to_dict())

def get_df():
    a = rng.random((1000))*100
    b = a.copy() % 10
    df = pd.DataFrame({"a": a, "b": b})
    return df

if __name__ == "__main__":
    with app.test_request_context():
        spec.path(view=json_data)

    app.run(debug=True)
