import math

def more_is_better(*args):
  print(args)


more_is_better(1, 2, 3, 4) 
more_is_better(1, "hello", True)
more_is_better([1,2,3], 1,2,3)
more_is_better([1,2,3]) 

def print_suitcase(**suitcase):
  for item,ammount in suitcase.items():
    print(item, ammount) 

print_suitcase(shirts=3)
print_suitcase(shirts=4, shoes=2, watermelon=16)

def print_bag(bananas=0, apples=0):
  print("bananas", bananas)
  print("apples", apples)
print_bag(2,3)

fruits = {"apples": 4, "bananas": 5}
print_bag(**fruits) 


def hello(name = "Margo"):
  """this is a greeting function"""
  print(f'Hello {name.capitalize()}!') 

print("Documentation: ", hello.__doc__)
print("Name: ", hello.__name__)
print("Code at: ", hello.__code__)
print("defaults : ", hello.__defaults__) 

def get_power_of(num):
    def inner(x):
        return int(math.pow(x, num))
    return inner

calc_power_of_2 = get_power_of(2)
calc_power_of_4 = get_power_of(4)
print(calc_power_of_2(5))    # 5^2 = 25
print(calc_power_of_2(7))    # 7^2 = 49
print(calc_power_of_4(2))    # 2^4 = 16
print(calc_power_of_4(3)) 

g = 'I am global'

def func():
  global g
  g = 'overrideing global'
  print('func: ', g)

func()
print('outside: ', g) 


global_var = 10

def outer_func():
  local_var = 11
  def inner_func():
    global global_var
    global_var = 21
    print("inner_func global_var = ", global_var)
  inner_func()
  print("outer_func global_var = ", global_var)

outer_func()
print('outside global_var = ', global_var) 