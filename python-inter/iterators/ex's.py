import math

# Ex 1:


def my_enumerate(iter, start = 0):
    index = start - 1
    for item in iter:
        index += 1
        yield (index, item)

for index, elem in my_enumerate([10, 20, 30, 40]):
  print(index, elem) 

for index, elem in my_enumerate([10, 20, 30, 40], 10):
  print(index, elem)  


# Ex 2:

def my_accumulate(iter):
    sum = 0
    for item in iter:
        sum += item
        yield sum

for elem in my_accumulate([1,2,3,4,5]):
  print(elem) 

# Ex 3:

def get_prime_factors_generator(num):
     
    while num % 2 == 0:
        yield 2
        num = num / 2
        
    for i in range(3,int(math.sqrt(num))+1,2):
         
        while num % i== 0:
            yield i
            num = num / i
             
    if num > 2:
        yield int(num)

# for x in get_prime_factors_generator(60):
#   print(x) 

# Ex 4:

class CircleIter:

    def __init__(self, iter, num) -> None:
       self.iter = iter
       self.num = num


    def __iter__(self):
        self.counter = 0
        self.index = 0
        return self

    def __next__(self):

        if self.counter >= self.num:
            raise StopIteration
        if self.index >= len(self.iter):
            self.index = 0
        val = self.iter[self.index]
        self.index += 1
        self.counter += 1
        return val


for x in CircleIter([1,2],5):
  print(x, end=" ") 

print() 



for x in CircleIter([1,2,3],4):
  print(x, end=" ")
  for y in CircleIter([5,6],3):
    print(y, end=" ")
  print() 

