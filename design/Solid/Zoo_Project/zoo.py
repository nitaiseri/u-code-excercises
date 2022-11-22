from animal import Animal
from mammal import Mammal
from fish import Fish
from bird import Bird
from food import Food
from sea_mammal import SeaMammal
from supply import FoodSupply

class Zoo:
    def __init__(self) -> None:
        self.animals = []
        self.food_suplly = FoodSupply()
    
    def add_animal(self, new_animal: Animal) -> None:
        self.animals.append(new_animal)

    def print_zoo_details(self) -> None:
        for animal in self.animals:
            animal.print_details()
            print("***")
    
    def feed(self, animal: Animal) -> None:
        food = animal.get_food()
        self.food_suplly.get_food(food.get_type(), food.get_amount())
    
    def feed_zoo(self) -> None:
        for animal in self.animals:
            self.feed(animal)

    def period_simulation(self, days: int) -> None:
        while days:
            self.feed_zoo()
            days -= 1

def add_given_animals(my_zoo):
    my_zoo.add_animal(Mammal("Simba", "lion", Food("meat", 6), 3.6))
    my_zoo.add_animal(Mammal("Nala", "lion", Food("meat", 6), 3.6))
    my_zoo.add_animal(SeaMammal("Willy", "whale", Food("plankton", 2000), 16, 2992))
    my_zoo.add_animal(Bird("Akka", "goose", Food("seeds", 1), 1.5))
    my_zoo.add_animal(Bird("Hedwig", "snowy owl", Food("worms", 0.1), 1.5))
    my_zoo.add_animal(Fish("Nemo", "clownfish", Food("algae", 0.003), 10))
    my_zoo.add_animal(Fish("Marlin", "clownfish", Food("algae", 0.003), 10))


if __name__ == "__main__":
    my_zoo = Zoo()    
    add_given_animals(my_zoo)
    my_zoo.period_simulation(12)

    