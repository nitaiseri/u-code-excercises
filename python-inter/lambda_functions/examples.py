vacation_sites = [
    {"name": "Hotsplace", "avg_temp": 32},
    {"name": "Warmsvenue", "avg_temp": 24},
    {"name": "Fairsplace", "avg_temp": 25},
    {"name": "Coldsburrow", "avg_temp": 20},
    {"name": "Shiversland", "avg_temp": 12}
]

def is_site_warm(site):
    return site["avg_temp"] > 24


filtered = list(filter(is_site_warm, vacation_sites))
print(filtered)

##############################

print("No hidden message, don't worry.")
numbers = [152, 57, 54, 243, 235, 216, 263, 254, 66, 149, 74, 277, 169, 71, 180, 188, 174, 297, 206, 159, 96, 160, 140, 151, 20, 266, 105, 241, 210, 250, 251, 193, 28, 286, 78, 123, 240, 72, 274, 224, 117, 52, 284, 280, 175, 46, 32, 19, 29, 109, 244, 35, 196, 279, 91, 144, 221, 187, 124, 289, 200, 195, 80, 13, 127, 238, 299, 101, 130, 75, 205, 76, 110, 108, 136, 225, 233, 119, 189, 86, 112, 37, 236, 268, 114, 190, 222, 50, 269, 179, 107, 248, 163, 45, 41, 7, 3, 204, 162, 129, 9, 31, 281, 111, 42, 173, 10, 135, 33, 36, 94, 197, 261, 122, 229, 213, 70, 208, 247, 298, 47, 128, 92]


def filter_42(num):
    return num < 42

filtered = list(filter(filter_42, numbers))
print(filtered)

##############################

menu = [
    {"name": "Beef stew", "vegetarian": False},
    {"name": "Beef sandwhich", "vegetarian": False},
    {"name": "Carrot on a stick", "vegetarian": True},
    {"name": "Beef eggroll", "vegetarian": False},
]

filtered = list(filter(lambda meal: meal["vegetarian"], menu))
print(filtered)

##############################

things = ["tree", "leaves", "green", "letter",
          "envelope", "cost", "money", "check"]

mapped = list(map(lambda word: len(word), things))
print(mapped)

##############################

code = {
    "0": "A",
    "1": "E",
    "2": "O",
    "3": "U",
    "4": "G",
    "5": "R",
    "6": "T",
    "7": "U",
    "8": "Y"
}

encrypted_message = '82705145106'

message1 = "".join(list(map(lambda c: code[c], [*encrypted_message])))
message2 = "".join([code[c] for c in encrypted_message])

print(message1)
print(message2)
