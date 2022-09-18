from primes import *

def test_is_three_prime():
    assert is_prime(3)

def test_five_six_seven():
    assert are_prime_numbers(5, 6, 7)

def test_one():
    assert is_prime(0) == False