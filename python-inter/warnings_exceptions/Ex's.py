# Ex 2:

def get_list_element(my_list, index):
    try:
        print(my_list[index]) 
    except IndexError:
        print (f'index is at most {len(my_list)-1}')

my_list = [1,2,3]
get_list_element(my_list, 4)


# Ex 3:
try:
    age = int(input("How old are you? ")) 
except ValueError:
    print("Enter a number")


# Ex 4:

def divide(x, y):
  try:
    print(f'{x}/{y} is {x / y}')
  except ZeroDivisionError as e:
    print(e)
  except TypeError as e:
    print(e)
  except ValueError as e:
    print(e) 


def divide(x, y):
  try:
    print(f'{x}/{y} is {x / y}')
  except (ZeroDivisionError, TypeError, ValueError) as e:
    print(e)

