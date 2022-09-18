from functools import wraps
from re import A
import time

def print_time(func):
    @wraps(func)
    def inner(*args, **kwargs):
        start = time.time()
        res = func(*args, **kwargs)
        total_time = time.time() - start
        print(f"function runtime:  {str(total_time)} seconds")
        return res
    return inner

@print_time
def sum_many(num):
    sum = 0
    for i in range(num):
        sum += i
    return sum


@print_time
def sum_many_more(num):
    sum = 0
    for i in range(num):
        sum += i
    return sum

# sum1 = sum_many(10000000)
# sum2 = sum_many_more(50000000) 


# Ex 2:

def print_info(func):
    @wraps(func)
    def inner(*args, **kwargs):
        print(f"func name: {func.__name__}")
        print(f"args: {args}")
        print(f"kwargs: {kwargs}")
        res = func(*args, **kwargs)
        print(f"return value: {res}")
        print(f"return type: {type(res)}")
        return res
    return inner

def add_(a, b, age = None, text = None):
    return a + b

add = print_info(add_)
# add(1, 2, age=3, text="hello") 


# Ex 3:

def slow_down(func):
    @wraps(func)
    def inner(*args, **kwargs):
        time.sleep(1)
        res = func(*args, **kwargs)
        return res
    return inner

def add(a, b):
    return a + b

slow_add = slow_down(add_)
# print(slow_add(1, 2) )

# Ex 4:

def calls_tracker(func):
    counter = 0
    @wraps(func)
    def inner(*args, **kwargs):
        nonlocal counter
        counter += 1
        res = func(*args, **kwargs)
        print (counter)
        return res
    return inner

def add(a, b):
    return a + b

# add_ = calls_tracker(add_)
# add_(1, 2)
# add_(1, 2)
# add_(1, 2)
# add_(1, 2)


# Ex 5:

def cache(func):
    calculated = {}
    @wraps(func)
    def inner(*args, **kwargs):
        nonlocal calculated
        if args in calculated.keys():
            return calculated[args]
        else:
            res = func(*args, **kwargs)
            calculated[args] = res
        return res
    return inner

def add(a, b):
    print(f"calculate: {a}, {b}")
    return a + b

add_ = cache(add)
add_(1, 2)
add_(1, 2)
add_(1, 2)
add_(1, 2)

@cache
def fibonacci(n):
    print(f"calculate: {n}")
    if n < 0:
        print("Incorrect input")
    elif n == 0:
        return 0
    elif n == 1 or n == 2:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(2))
print(fibonacci(4))


