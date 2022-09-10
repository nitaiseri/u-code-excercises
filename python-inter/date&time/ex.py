import time
import datetime


# Ex 1 :

print(datetime.datetime.today())

# Ex 2:


print("time:", datetime.datetime.today().strftime("%H:%M:%S"))
print("current1:", datetime.datetime.today().strftime("%m/%d/%Y, %H:%M:%S"))
print("current2:", datetime.datetime.today().strftime("%d/%m/%Y, %H:%M:%S"))

# Ex 3:
year = datetime.datetime.now().strftime("%Y")
day = datetime.datetime.now().strftime("%A")

print("year:", year)
print("day:", day)


# def birthday():
#     birthday = input("Insert BD format dd-mm-yyyy:")
#     day, month, year = str.split("-")
#     this_year = datetime.datetime.now().strftime("%Y")

#     print("Age: ", int(this_year) - int(year) - 1)
#     print("Until Birthday:")

# birthday("12-09-1993")


from datetime import datetime

birthday = input("Please enter your birthday in DD-MM-YYYY format: ")
date_format = "%d-%m-%Y"
birthday_datetime = datetime.strptime(birthday, date_format)
today = datetime.today()
print("Your age is:", today.year - birthday_datetime.year)
next_birthday = birthday_datetime.replace(year=today.year)

if next_birthday < today:
    next_birthday = birthday_datetime.replace(year=today.year + 1)
time_until_next_birthday = next_birthday - today  
print("The time until the next birthday is:", time_until_next_birthday) 