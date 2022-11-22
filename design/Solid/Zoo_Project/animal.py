from food import Food
from action import AnimalActions

class Animal(AnimalActions):
    def __init__(self, name: str, species: str, food: Food) -> None:
        self.name = name
        self.species = species
        self.food_per_day = food
    
    def get_food(self) -> Food:
        return self.food_per_day
    
    def print_details(self):
        print("Name: {name}".format(name=self.name))
        print("Species: {species}".format(species=self.species))
        print("Food: " + self.food_per_day.display())



    
    