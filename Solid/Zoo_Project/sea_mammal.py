from fish import Fish
from mammal import Mammal
from food import Food

class SeaMammal(Mammal, Fish):
    
    def __init__(self, name: str, species: str, food: Food, preganncy_duration: float, max_depth: int) -> None:
        Mammal.__init__(self, name, species, food, preganncy_duration)
        Fish.__init__(self, name, species, food, max_depth)

    def print_details(self):
        Mammal.print_details(self)
        print("Max depth can swim: {meter}".format(meter=self.max_depth))
    