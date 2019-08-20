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

#Getting the mean scores for metacritic reviews
@app.route('/getFandangoScores', methods=['GET'])
def getFandangoScores():
    data = Data()
    mean = data.get_fandango_mean()
    return jsonify(mean)

#Getting the score for a single movie
@app.route('/singleMovieRating', methods=['GET', 'POST'])
def getSingleMovieRating():
    if request.method == 'POST':
        data = Data()
        post_data = request.get_json()
        movie = post_data['movie']
        ratings = data.get_single_movie_ratings(movie)
        return jsonify(ratings)

#Getting the average movie score for all three rating groups
@app.route('/firstGraph', methods=['GET'])
def firstGraph():
    data = Data()
    movie_rating_data = data.get_average_movie_ratings()
    return jsonify(movie_rating_data)

#Getting the average movie score for all three rating groups based on users
@app.route('/secondGraph', methods=['GET'])
def secondGraph():
    data = Data()
    movie_rating_data_user = data.get_average_movie_ratings_user()
    return jsonify(movie_rating_data_user)

if __name__ == '__main__':
    app.run()
