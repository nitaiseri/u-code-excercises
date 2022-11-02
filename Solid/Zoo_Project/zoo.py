from animal import Animal
from mammal import Mammal
from fish import Fish
from bird import Bird
from food import Food

class Zoo:
    def __init__(self) -> None:
        self.animals = []
        self.food_suplly = {}
    
    def add_animal(self, new_animal: Animal) -> None:
        self.animals.append(new_animal)

    def print_zoo_details(self) -> None:
        for animal in self.animals:
            animal.print_details()
    
    def get_food(animal: Animal) -> Food:
        pass
    
    def feed_zoo(self) -> None:
        for animal in self.animals:
            animal.eat(self.get_food(animal))
    
    def refill_supply(self, food_type):
        pass

if __name__ == "__main__":
    my_zoo = Zoo()
    my_zoo.add_animal(Mammal("Simba", "lion"))
    my_zoo.add_animal(Mammal("Nala", "lion"))
    my_zoo.add_animal(Fish("Willy", "whale"))
    my_zoo.add_animal(Bird("Akka", "goose"))
    my_zoo.add_animal(Bird("Hedwig", "snowy owl"))
    my_zoo.add_animal(Fish("Nemo", "clownfish"))
    my_zoo.add_animal(Fish("Marlin", "clownfish"))

    