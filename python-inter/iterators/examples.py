numbers = [11,3,64,17,94]
for i,v in enumerate(numbers, 100):
  print(i, v) 

def my_gen():
  n = 1
  print('This is printed in the first call')
  yield n
  n += 1
  print('This is printed second')
  yield n
  n += 1
  print('This is printed at last')
  yield n 

iter_gen = my_gen() 
# print(iter_gen)
# print(next(iter_gen))
# print(next(iter_gen))
# print(next(iter_gen))
# print(next(iter_gen))

list_comprehension = [x for x in range(20)]
print(list_comprehension)
print(type(list_comprehension)) 

gen = (x for x in range(20))
print(gen)
print(type(gen)) 
print(list(gen))
