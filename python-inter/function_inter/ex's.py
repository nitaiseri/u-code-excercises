# Reduce :

from array import array


def reduce(func, iter, initial = None):
    if initial:
        accumulator = initial
    else:
        accumulator = iter[0]
        iter = iter[1:]
    for item in iter:
        accumulator = func(accumulator, item)
    return accumulator

print(reduce(lambda x, y :x*y, [1, 2, 3, 4, 5]))
print(reduce(lambda x, y :x*y, [1, 2, 3, 4, 5], 0.5))


# Max arguments:

def max_arguments():
    max_args = 0

    def inner(*args):
        nonlocal max_args
        max_args = max(max_args, len(args))
        return max_args
    
    return inner

func = max_arguments()

print(func())           # 0
print(func(1,2,3,7))    # 4
print(func(9,2))        # 4
print(func(1,2,3,4,5))  # 5 

# Increase:

def generate(object):
    object_ = object
    def inner(key, amount = 1):
        nonlocal object_
        object_[key] += amount  
    return inner

employee = {
  "name": "Momo",
  "age": 61,
  "salary": 10000
} 

increase = generate(employee)
increase("age")
increase("salary", 1000)
print(employee)

# Splice Challenge:

def splice(array, start, delete_count = None, *items):
    deleted = []
    # delete_count = len(array) if delete_count is None else delete_count
    start = len(array) if start > len(array) else start
    items = list(items)

    #delete
    for i in range(start, len(array)):
        if delete_count is None:
            nums = array[:start]
            deleted = array[start:]
            return nums, deleted
        elif delete_count:
            deleted.append(array.pop(i))
            delete_count -= 1
    #add
    for item in items[::-1]:
        array.insert(start, item)

    return array, deleted


# remove 1 element
nums = [1, 2, 3]
nums, deleted = splice(nums, 0, 1)
assert nums == [2, 3]

# add 1 element
nums = [1, 2, 3]
nums, deleted = splice(nums, 0, 0, 0)
assert nums == [0, 1, 2, 3]

# add 2 elements
nums = [1, 2, 3]
nums, deleted = splice(nums, 0, 0, -1, 0)
assert nums == [-1, 0, 1, 2, 3]

# replace 1 element
nums = [1, 2, 3]
nums, deleted = splice(nums, 1, 1, 55)
assert nums == [1, 55, 3]

# delete all elements from index to end
nums = [1, 2, 3, 4, 5]
nums, deleted = splice(nums, 1)
assert nums == [1]

# returns list of deleted elements as the second parameter
nums = [1, 2, 3]
nums, deleted = splice(nums, 1)
assert deleted == [2, 3]

# returns an list of the deleted element (1 element)
nums = [1, 2, 3]
nums, deleted = splice(nums,1, 1)
assert deleted == [2]

# returns an empty list when no elements are deleted
nums = [1, 2, 3]
nums, deleted = splice(nums,1, 0, 5)
assert deleted == []

# delete all but 2 last ones
nums = [1, 2, 3, 4]
nums, deleted = splice(nums, -2)
assert deleted == [3, 4] 
