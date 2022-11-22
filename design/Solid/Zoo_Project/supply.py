from consts import *

class FoodSupply:

    def __init__(self) -> None:
        self.absolute_amounts = STORAGE_AMOUNTS
        self.current_storage = {}
        self.init_storage()
    
    def init_storage(self):
        self.current_storage[MEAT] = STORAGE_AMOUNTS[MEAT]
        self.current_storage[PLANKTON] = STORAGE_AMOUNTS[PLANKTON]
        self.current_storage[SEEDS] = STORAGE_AMOUNTS[SEEDS]
        self.current_storage[WORMS] = STORAGE_AMOUNTS[WORMS]
        self.current_storage[ALGEA] = STORAGE_AMOUNTS[ALGEA]

    def fill_supply(self, type: str) -> None:
        self.current_storage[type] = STORAGE_AMOUNTS[type]

    def print_shortage(self, type):
        print("###")
        print("We are short on {type}. Buying now.".format(type=type))
        print("###")
    
    def get_food(self, type: str, amount: float):
        if self.current_storage.get(type) < amount:
            self.print_shortage(type)
            self.fill_supply(type)
        self.current_storage[type] -= amount

        