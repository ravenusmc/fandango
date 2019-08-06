#This file will contain all of the data manipulation that I do for this project.

#importing supporting libraries
import numpy as np
import pandas as pd

class Data():

    def __init__(self):
        self.data = pd.read_csv('./data/data.csv')

    #This is just a test method that's used for for testing ideas out. This method
    #is only meant to help me test out ideas and not to 'test' the application
    def basic_info(self):
        print(self.data.head())
        #This will get me all unique values in a column
        #print(self.data.MARITAL_STATUS.unique())

    #This method will get the mean for the rotten tomatoe ratings
    def get_rotten_tomatoe_data(self):
        rot_tomatoes = self.data['RottenTomatoes']
        rot_tomatoes_user = self.data['RottenTomatoes_User']
        #This list will hold the means
        mean_list = []
        #Getting the means and then formating them.
        professional_score_mean = format(rot_tomatoes.mean(), '.2f')
        mean_list.append(professional_score_mean)
        user_score_mean = format(rot_tomatoes_user.mean(), '.2f')
        mean_list.append(user_score_mean)
        return mean_list


data = Data()
data.get_rotten_tomatoe_data()
