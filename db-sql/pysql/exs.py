from unicodedata import category
import pymysql


# Ex 1:

create_products_table_query = "CREATE TABLE products(\
                                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
                                name VARCHAR(20),\
                                price INT,\
                                category INT,\
                                FOREIGN KEY(category) REFERENCES categories(id));"

create_category_table_query = "CREATE TABLE categories(\
                                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
                                name VARCHAR(20),\
                                UNIQUE (name)\
                                );"

categories = ["Vegetables", "Fruits", "Milks", "Vegetables"]

class Product:
    def __init__(self, name, category, price) -> None:
        self.name = name
        self.category = category
        self.price = price

p_names = ["tomato", "cucamber", "apple", "pineapple", "butter"]
p_categories = [1, 1, 2, 2, 3]
p_prices = [1, 2, 3, 4, 5]

products = [Product(p_names[i], p_categories[i], p_prices[i]) for i in range(len(p_names))]

def create_db(name):
    try:
        connection = pymysql.connect(
        host="localhost",
        user="root",
        password="",
        charset="utf8",
        cursorclass=pymysql.cursors.DictCursor
        )
        with connection.cursor() as cursor:
            query = 'CREATE DATABASE ' + name
            cursor.execute(query)
            connection.commit()
    except pymysql.Error as e:
        print(e.args[1])

def run_query(data_base, query):
    try:
        connection = pymysql.connect(
        host="localhost",
        user="root",
        password="",
        db=data_base,
        charset="utf8",
        cursorclass=pymysql.cursors.DictCursor
        )
        with connection.cursor() as cursor:
            query = query
            try:
                cursor.execute(query)
            except:
                a = 1
            result = cursor.fetchall()
            connection.commit()
            return result
    except pymysql.Error as e:
        print(e.args[1])

def create_insert_query(table_name, vals, **kwargs):
    return f'INSERT INTO {table_name}\
            VALUES({"null, " if kwargs["null"] else ""}{str(vals)[1:-1]});'

# create_db("grocery_store")
# run_query("grocery_store", create_category_table_query)
# run_query("grocery_store", create_products_table_query)

def insert_categories(categories):
    for category in categories:
        run_query("grocery_store", create_insert_query("categories", [category], null=True))


def insert_products(names, prices, categories):
    for product in zip(names, prices, categories):
        run_query("grocery_store", create_insert_query("products", list(product), null=True))

insert_categories(categories)
insert_products(p_names, p_prices, p_categories)

select_query = 'SELECT p.name\
                FROM products as p, categories as c\
                WHERE p.category = c.id AND c.name = "Fruits";'

select_p_by_id_query = 'SELECT *\
                        FROM products as p\
                        WHERE p.id = 3;'

result = run_query("grocery_store", select_p_by_id_query)
for product in result:
    print(product["name"])