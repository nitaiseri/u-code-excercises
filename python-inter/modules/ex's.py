# Ex 1:
import calendar

print(calendar.isleap(2010))
print(calendar.isleap(2020))


start_year = 2020
last_year = 2080

def num_of_leap_years(start, end):
    num = 0
    for year in range(start, end):
        if calendar.isleap(year): 
            num += 1
    return num

print(num_of_leap_years(start_year, last_year))

wday = ['Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
print(wday[calendar.weekday(2028, 3, 14)])


# Ex 2:

from module1 import *

a = func1()
# b = func2()
c = num

# Ex 3:

# import f2

# from string_utils import s1


# Ex 4:

# main.py
import my_module
a = my_module.A()
a.foo()
b = my_module.B()
b.bar() 
