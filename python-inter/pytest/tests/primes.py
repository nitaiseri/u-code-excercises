
def is_prime(number):
  for i in range(2,number):
    if (number%i) == 0:
      return False
  return True

def are_prime_numbers(*args):
    for num in args:
        if not is_prime(num):
            return False
    return True