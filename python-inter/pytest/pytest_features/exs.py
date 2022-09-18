# Ex 1:
def fibonacci(n):
    if n < 0:
        print("Incorrect input")
    elif n == 0:
        return 0
    elif n == 1 or n == 2:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Ex 2:



# Ex 3:
def anagram(str1, str2):
    return sorted(str1)== sorted(str2)
