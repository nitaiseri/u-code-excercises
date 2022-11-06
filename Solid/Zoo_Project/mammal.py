from animal import Animal
from food import Food

class Mammal(Animal):
    def __init__(self, name: str, species: str, food: Food, preganncy_duration: float) -> None:
        Animal.__init__(self, name, species, food)
        self.pregnancy_duration = preganncy_duration

    def print_details(self):
        Animal.print_details(self)
        print("Duration of pregnancy: {num}".format(num=self.pregnancy_duration))

    