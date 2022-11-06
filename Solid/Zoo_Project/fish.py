from animal import Animal
from food import Food

class Fish(Animal):
    def __init__(self, name: str, species: str, food: Food, max_depth: int) -> None:
        Animal.__init__(self, name, species, food)
        self.max_depth = max_depth

    def print_details(self):
        Animal.print_details(self)
        print("Max depth can swim: {meter}".format(meter=self.max_depth))

    
    