from flask import Flask, jsonify, request
from flask_cors import CORS

#importing code that I wrote
from data import *

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app)

#Getting the average scores for rotten tomatoes
@app.route('/getRottenTomatoeAverages', methods=['GET'])
def getRottenTomatoeAverages():
    data = Data()
    mean_list = data.get_rotten_tomatoe_data()
    return jsonify(mean_list)

#Getting the mean scores for metacritic reviews
@app.route('/getMetaCriticScores', methods=['GET'])
def getMetaCriticScores():
    data = Data()
    mean_list = data.get_meta_critic_data()
    return jsonify(mean_list)

if __name__ == '__main__':
    app.run()
