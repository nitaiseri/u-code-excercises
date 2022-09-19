import requests

class Client:
    
    def __init__(self, name, money) -> None:
        self.name = name
        self.money = money


    def get_price(self, item = None):
        if not item:
            item = input("Insert item name please!")
        price = requests.get(f'http://localhost:8000/store/{item}').text
        print(price)


    def buy(self):
        item = input("Insert item name you want to buy please!")
        price = requests.get(f'http://localhost:8000/store/{item}').text
        if self.money >= int(price):
            if requests.get(f'http://localhost:8000/store/buy/{item}'):
                inventory =  requests.get(f'http://localhost:8000/store/count/{item}').text
                print(f"Congratulations, you've just bought {item} for {price}. There are {inventory} left now in the store.")
        else:
            print("Get a job *****")

first_client = Client("Nit", 800)
first_client.buy()
