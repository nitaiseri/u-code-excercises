from food import Food
from action import AnimalActions

class Animal(AnimalActions):
    def __init__(self, name: str, species: str, food: Food) -> None:
        self.name = name
        self.species = species
        self.food_per_day = food
    
    
