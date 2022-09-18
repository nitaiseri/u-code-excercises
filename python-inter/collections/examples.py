x = 10
y = x
print(id(x))
print(id(y))
print(id(10))  

print(id(x) == id(y))
print(id(y) == id(10)) 

a = [1,2]
b = [1,2]
print(a == b) # True 
print(a is b) # False 


s1 = "Kush"
s2 = "Kush"
print(s1 == s2)           # True
print(s1 is s2)           # True
print(id(s1), id(s2))     # same numbers

list_ = [3, 4, "Bobby"]
list_str = str(list_)
print(list_str) 

dict = {3 : "kuku"}
dict_str = str(dict)
print(dict_str) 