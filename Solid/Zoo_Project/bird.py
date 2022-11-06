from animal import Animal
from food import Food

class Bird(Animal):
    def __init__(self, name: str, species: str, food: Food, wing_length: float) -> None:
        Animal.__init__(self, name, species, food)
        self.wing_length = wing_length

    def print_details(self):
        Animal.print_details(self)
        print("Wing span: {meter}".format(meter=self.wing_length))