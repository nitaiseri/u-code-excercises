def is_palindrom(word):
    # return word[0] == word[-1] and True if len(word[1:-1]) < 2 else is_palindrom(word[1:-1])
    return word == word[::-1]

print(is_palindrom("dood"))

def reverse_word(line):
    return " ".join([w[::-1] for w in line.split(" ")])

print(reverse_word("ab cd"))

def swap(a, b):
    return b, a

def sum_even(num_list):
    return sum(num_list[1::2])

print(sum_even([1, 2, 1, 3, 1, 6])) # 11

def duplicate(list_):
    return list_ + list_

print(duplicate([1, 2, 3]))


def change_spaces(str_):
    return "@".join(str_.split(" "))

print(change_spaces("a b c"))

def number_of_spaces(str_):
    return len(str_) - len(str_.split(" "))

print(number_of_spaces("a a a"))

def number_of_all_spaces(str_):
    return len(str_.strip()) - len(str_.strip().split(" "))

print(number_of_all_spaces("a  a            \
    \
     a"))

def largest_lexicographically(str_):
    return sorted(str_.replace(".", "").split(" "))[-1]

print(largest_lexicographically("Imagination is .more important than knowledge."))


def longest_word(str_):
    return max([len(w) for w in str_.replace(".", "").split(" ")])

print(longest_word("If you can't explain it simply you don't understand it well enough."))

def reverse_sentence(str_):
    return str_[::-1]

print(reverse_sentence("ab cd"))

def reverse_word_order(str_):
    return " ".join(str_.split(" ")[::-1])

print(reverse_word_order("hello dear world"))

def factorial(num):
    return num * (1 if num == 1 else factorial(num - 1))

print(factorial(6))

def fibonacci(num):
    return 1 if num <= 2 else (fibonacci(num - 1) + fibonacci(num - 2))

print(fibonacci(6))

def remove_duplicates(list_):
    return list(set(list_))

print(remove_duplicates([1,2,1,3,3,2,2]))
