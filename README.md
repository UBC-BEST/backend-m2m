# Backend Microservices  

This is repository for all of our backend microservices (servers) used to receive, store and process data from the mobile app.

We will be using a [Reactive Architecture](https://medium.com/ceoquest/in-the-loop-chapter-24-reactive-systems-and-microservices-architecture-e92493ea60) for our services. Specifically we will be using two different servers and a [RabbitMQ](https://www.rabbitmq.com/) Event bus to process our data, and a [MongoDB database](https://www.mongodb.com/).

*But what does that mean????* 🤯  

We are writing code that is analyzing a large amount of sensor data, and ideally, we want to do that in 'real-time'. However, processing data requires a lot of system resources and is usually slower than other operations like reading and writing data to the database. 

By using different microservices for simple user operations like login/authentication, we can offload the majority of the workload to a seperate processing service, which can scale up and down based on the amount of data it needs to process. This way we save money, compute resources, and servers don't crash due to excess load.  

The way that we achieve this is by using asynchronous messaging using Rabbit and our gateway microservice: 

- When the user wants to login, they make a POST API request to an endpoint - `m2m.com/login` for example, with their username and password. Since this is a simple operation, the gateway verifies the password for a user in the database and returns a token the user can use for subsequent requests. 

- Now the user is logged in and starts playing the game. The phone records sensor data from the glove and at the end of the game, sends the score, and all of this sensor data with the user's authentication token to another endpoint, let's call it `m2m.com/game` 

- The gateway service verifies the user's token so that it's valid, and creates a new ProcessingEvent. This event is just a JSON file that contains all the sensor data which needs to be processed by our algorithms to gauge 'progress' and a unique identifier. This ProcessingEvent is pushed to the Rabbit queue, the metadata for the game is stored in the database, and the request returns a 200 OK response.

- Now, our processing-service see's that there is a new event in Rabbit, and decides to process it. It retrieves the event, runs whatever algorithms that need to be run to analyze the data, and saves the processed data to the database. Once the data is successfully saved, it creates a ReconciliationEvent and pushes it to RabbitMQ. 

- The ReconciliationEvent tells the gateway service that a ProcessingEvent was completed, and hence the particular user needs to be notified. It will then sync the data on the database with the data on the user's phone so they can view their latest progress. 


## Getting started with development 

You can develop most features without installing Rabbit locally (for now, as we move forward I'll be making changes to this part so we can all run rabbit locally using Docker or something else). 

To start, clone the repository and cd to the root of the repository in the terminal.

### Gateway (Node)

First install all dependencies:

```bash
$ cd gateway 
$ npm i
```

Once they are installed, you can use `npm run dev` to start a development server locally. To stop the server, you can use ctrl+c in the terminal.

### Processing Service (Python)

Before installing dependencies, we need to create a [virtual environment](https://www.geeksforgeeks.org/create-virtual-environment-using-venv-python/) for our Python Project, so that there are no conflicts between modules on your system, and modules specific to this project.
```bash
cd processing-service
python -m venv venv
```
This creates a new Python virtual environment in a 'venv' folder. You can activate the environment install dependencies by running:
```
source venv/bin/activate 
pip install -r requirements.txt
```
Once the dependencies are done, you can run the app using `python app.py`

You can exit the virtual environment by typing `deactivate` in a terminal running the virtualenv. 

**Important Notes**: 
- Unlike Node, Flask isn't configured to auto-restart when files are changed. For now, just stop the server using ctrl+c and start it again to test changes until I find a solution. 
- If you are using VSCode, select the virtual environment you just created to be the Python Interpreter (ctrl+shift+p -> Select Python Interpreter -> ./venv/bin/python3)

## IDE Setup (VSCode)

Install the following extensions: Python, Javascript, ESLint, Prettier. The project is configured to use the Airbnb Code Style, and Prettier will automatically format the document or VSCode will throw errors for syntax/code style. 

You can change the theme/layout/icons based on personal preference. 