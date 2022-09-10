# Ex 1:

state = "France"

heads_of_states = {
    "Italy": {
        "president": "Sergio Mattarella",
        "prime minister": "Giuseppe Conte"
    },
    "India": {
        "president": "Ram Nath Kovind",
        "prime minister": "Narendra Modi"
    },
    "France": {
        "president": "Emmanuel Macron",
        "prime minister": "Edouard Philippe"
    }
}

print(f'The president of {state} is {heads_of_states[state]["president"]} and the prime minister is {heads_of_states[state]["prime minister"]}')


# Ex 2:

user_id = 3058
bonus_months = 3

user_months = {
    1552: 18,
    7021: 2,
    532: 12,
    3058: 9,
    1102: 4
}

user_months[user_id] += bonus_months

print("Giving user " + str(user_id) + " an extra " + str(bonus_months) + " month bonus")


# Ex 3:

country_populations = {}
country_populations["Ghana"] = 28
country_populations["Brazil"] = 209
country_populations["Mongolia"] = 3

country = "Ghana"

if country_populations[country] >= 50:
    print(f'{country} is a big country')
else:
    print(f'{country} is a small country')


# Ex 4:

tomato = "Tomato Soup"
onion = "Onion Soup"
carrot = "Carrot Soup"

user_preferences = {
    "Sarah": tomato,
    "Sheila": carrot,
    "Fernando": tomato,
    "Jovan": onion,
    "Simona": carrot
}

soup_recipes = {
    tomato: "Get a bunch of tomatoes, cut them up, and throw them in boiling water",
    onion: "Be prepared to cry",
    carrot: "Find a rabbit, ask him how to make a carrot soup"
}

user = "Jovan"

print(soup_recipes[user_preferences[user]])


# Extention:

def get_5common(line):
    word_appearience = {}
    for word in line.split(" "):
        word_appearience[word] = word_appearience.get(word, 0) + 1
    return [(k, v) for k, v in sorted(word_appearience.items(), key=lambda item: item[1])][-5:]

line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"
print(get_5common(line))


# Extention:

