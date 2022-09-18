# Ex 1:
my_tuple = True, 1, 1.1, "1", 'a', [], tuple(), dict()

# Ex 2:
print(my_tuple[3])
print(my_tuple[-4])

# Ex 3:

days = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
days = tuple([day for day in days if day != "Tuesday"])
print(days)

# Ex 4:

numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
print(tuple(list(numbers)[::-1]))

# Ex 5:

def ex_five(tup):
    return tup[1:][::-1]
    return tup[::-1][1:] 

print(ex_five((1,2,3,4)))