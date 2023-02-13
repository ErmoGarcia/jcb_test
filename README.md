# jcb_test

A test Python Web App that returns random data

# Usage

Install the necesary dependencies with `pip install -r requirements.txt`. From the comand line run `python app.py` to start the server. The web app will be accessible at [http://localhost:5000].

# Considerations

- The app can also be executed in a docker container using `docker-compose up`.
- The app exposes a third endpoint at [http://localhost:5000/swagger.json] with its OpenAPI specification.

# Improvements

- For the app to be production ready, a WSGI server should be used.
- At the moment, the whole app runs from a single .py file. To make it more scalable, it should be structured in separate files and directories. The Flask factory pattern could be used.
- The app could me hard to maintain with its current structure. Instead of using Vue from a CDN in the browser, separate projects could be created for the frontend and the backend.
