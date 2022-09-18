class Restaurant:

    def __init__(self, name, ratings, is_vegetarian) -> None:
        self.name = name
        self.ratings = ratings
        self.is_vegetarian = is_vegetarian

    def get_menu(self):
        if self.is_vegetarian:
            print("We have vegetables")
        else:
            print("We have meat")

r1 = Restaurant("Zoozaazo", 4, False)
r2 = Restaurant("Top La Pompei", 3, False)
r3 = Restaurant("El Viego", 5, True) 

r3.get_menu()

class Artist:
  def __init__(self, name, income):
    self.name = name
    self.income = income

  def perform(self):
    print(self.name + " is performing now") 

class Actor(Artist):
  def __init__(self, name, income, most_known):
    super().__init__(name, income)
    self.most_known = most_known

a = Actor("Al", 24, "Scar")
a.perform()
print(a.most_known) # outputs: Scar 


class Rectangle:
    def __init__(self, width, height) -> None:
       self.width = width
       self.height = height

    def calculate_area(self):
        return self.height * self.width

    def calculate_perimeter(self):
        return 2*(self.height + self.width)

class Square(Rectangle):
    def __init__(self, length) -> None:
       super().__init__(length, length)

    def calculate_perimeter(self):
        return 4*self.width

s = Square(2)
print(s.calculate_perimeter()) # outputs: 8
print(s.calculate_area()) # outputs: 4 
