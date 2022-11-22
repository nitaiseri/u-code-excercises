
class Food:
    def __init__(self, food_type, amount, units="Kg") -> None:
        self.type = food_type
        self.amount = amount
        self.units = units
    
    def get_type(self) -> str:
        return self.type

    def get_amount(self) -> float:
        return self.amount
    
    def display(self) -> str:
        return '{amount} {units} {type} per day.'.format(amount=self.amount, units=self.units, type=self.type)

