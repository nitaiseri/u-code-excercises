s = set()

print(type(s))
print(s)

s = { 3, 6, 'bibi', ('Simon', 'Garfunkel') }
s.add(5)
print(s)

s.update([11, 22], (55,), ('mimi',))
print(s)

s1 = {1, 3, 5}
s2 = {2, 4}


s1.union(s2) # {1,3,5,2,4}
 
print(s1 | s2) # bitwise operation => {1,3,5,2,4}


s1 = {1, 2, 3, 4}
s2 = {1, 5, 6, 7}
s3 = {5, 6, 7, 8}

print(s1.isdisjoint(s2))
print(s1.isdisjoint(s3))
print(s2.isdisjoint(s3))

s1 = {'a', 'b', 'c', 'd'}
s2 = {'a', 'b', 'c'}
s3 = {'a', 'b', 'e'}
s4 = {'a', 'b', 'c', 'd'}
s5 = set()

print(s1.issuperset(s2))
print(s1.issuperset(s3))
print(s1.issuperset(s4))
print(s1.issuperset(s5))

print()
print(s2.issubset(s1))
print(s2.issuperset(s1))