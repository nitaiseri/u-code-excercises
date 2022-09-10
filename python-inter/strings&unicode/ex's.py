# Ex 1 :

from tkinter import W


def to_upper(letter):
    if 97 <= ord(letter) <= 122:
        return chr(ord(letter) - 32)
    return letter

print(to_upper("d"))    # "D"
print(to_upper("Q"))    # "Q" (no change)
print(to_upper("!"))    # "!" (no change) 


def upper(line):
    return "".join([to_upper(l) for l in line])

print(upper("I love Python!"))    # "I LOVE PYTHON!" 


# Ex 2:

# def encode(msg):
#     return " ".join([str(ord(c)) for c in msg])

# def decode(msg):
#     return "".join([chr(int(n)) for n in msg.split(" ")])

# print(decode("72 101 108 108 111"))   # "Hello"
# print(decode(encode("Hello")))        # "Hello" 

# Ex 3:

def get_word_value(word):
    return sum([ord(c) - 96 for c in word])

print(get_word_value("day"))    # 4 + 1 + 25 = 30 


# Ex 4:

def encode(msg, n):
    return "".join([chr(ord(c)+n) if ord(c) + n <= 90 else chr((ord(c)+n)%90+64) for c in msg])


def decode(msg, n):
    return "".join([chr(ord(c)-n) if ord(c) - n >= 65 else chr((ord(c)-n)+26) for c in msg])

print(encode("ABXYZ", 3))   # "DEABC" 
print(decode("DEABC", 3))    # "ABXYZ" 


def string_number_to_int(num):
    sum = 0
    for i, n in enumerate(num):
        sum += (ord(num[-1-i])-48) * 10**i
    return sum


print(string_number_to_int("10"))       # output: 10
print(string_number_to_int("123"))      # output: 123
print(string_number_to_int("99"))       # output: 99
print(string_number_to_int("ABC")) 