import re
from exs import *

import pytest

@pytest.mark.ex1
@pytest.mark.parametrize("index, result", [(2, 1), (0, 0), (5, 5), (10, 55)]) 
def test_fibonacci(index, result):
    assert fibonacci(index) == result

@pytest.fixture
def store():
  items = ("apple", "banana", "orange")
  amount = (2, 2, 1)
  return dict(zip(items, amount)) 

def buy_banana(store):
    if store["banana"] >=1:
        store["banana"] -=1
    else:
        print("out of stock")
    return store

def buy_two_bananas(store):
    if store["banana"] >=2:
        store["banana"] -=2
    else:
        print("out of stock")
    return store

@pytest.mark.ex2
def test_buy_banana(store):
    assert buy_banana(store)["banana"] == 1
    assert buy_banana(store)["banana"] == 0
    assert buy_banana(store)["banana"] == 0

@pytest.mark.ex2
def test_buy_two_bananas(store):
    assert buy_two_bananas(store)["banana"] == 0
    assert buy_two_bananas(store)["banana"] == 0

@pytest.mark.ex3
def test_anagram():
    assert anagram("elbow", "below") == True
    assert anagram("", "") == True
    assert anagram("Act", "cAt") == True
    assert anagram("low", "wo") == False