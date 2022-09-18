import json

with open("python-inter\lambda_functions\pokemon.json") as pokemon_file:
    pokemon_data = json.load(pokemon_file)

# Ex 1:

keys = ["id", "name", "type", "weight", "height", "weaknesses"]
pokemon_data = list(map(lambda p:
                         dict(zip(keys, [p["id"], p["name"], p["type"], p["weight"], p["height"], p["weaknesses"]]))
                         ,pokemon_data))
print(pokemon_data[0])

pokemon_names = list(map(lambda p: p["name"], pokemon_data))
print(pokemon_names[:5])


heavy_pokemon = list(filter(lambda p: p["weight"] > 100, pokemon_data))
print(len(heavy_pokemon))

weak_against_water_pokemon = list(filter(lambda p: "Water" in p["weaknesses"], pokemon_data))
names_weak_against_water_pokemon = list(map(lambda p: p["name"], weak_against_water_pokemon))
print(names_weak_against_water_pokemon)

one_line = [p["name"] for p in pokemon_data if "Water" in p["weaknesses"]]


# Extention:

numbers = [2, 3, 55, 4, 6, 8, 43, 10]

sum = sum(list(map(lambda x: x**2, sorted([n for n in numbers if n%2==0])[-4:])))
print(sum)
