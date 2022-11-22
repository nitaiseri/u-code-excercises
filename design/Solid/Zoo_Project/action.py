import abc
from food import Food

class AnimalActions(abc.ABC):

    @abc.abstractmethod
    def print_details(self):
        pass

    @abc.abstractmethod
    def get_food(self) -> Food:
        pass