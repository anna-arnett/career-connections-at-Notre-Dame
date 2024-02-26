#db.py
import mysql.connector

#use Career_Connections
#select * from classes;
#select * from users;


#int_data = pd.read_csv('', index_col=False, delimiter = ',')
#int_data.head()
# Establish a connection to the MySQL server
connection = mysql.connector.connect(
    host='localhost',
    user='sqluser',
    password='password'
)

# Create a cursor object to interact with the server
cursor = connection.cursor()

# Create a new database
db = 'Career_Connections'
cursor.execute(f"CREATE DATABASE IF NOT EXISTS {db}")
print(f"Database '{db}' created successfully")

# Switch to the newly created database
cursor.execute(f"USE {db}")

# Create a table
class_table = 'classes'
create_table_query = """
CREATE TABLE IF NOT EXISTS {table} (
  id INT AUTO_INCREMENT PRIMARY KEY,
  class VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  professor VARCHAR(255) NOT NULL,
  difficulty INT NOT NULL
)
"""

cursor.execute(create_table_query.format(table=class_table))
print(f"Table '{class_table}' created successfully")

# Data to be inserted
class_data = {
    'class': 'Open Source',
    'description': 'This class is awesome.',
    'professor': 'Bui',
    'difficulty': 1
}

#for i, row in int_data:
# Insert data into the table
insert_query = f"INSERT INTO {class_table} (class, description, professor, difficulty) VALUES (%s, %s, %s, %s)"
cursor.execute(insert_query, (class_data['class'], class_data['description'], class_data['professor'], class_data['difficulty']))
connection.commit()
print(f"Data inserted into '{class_table}' successfully")

# Print the ID of the inserted record
print(f"Data inserted with ID: {cursor.lastrowid}")


# Create users table
user_table = 'users'
create_table_query = """
CREATE TABLE IF NOT EXISTS {table} (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
"""

cursor.execute(create_table_query.format(table=user_table))
print(f"Table '{user_table}' created successfully")

# Add user data
user_data = {
    'username': 'chase',
    'password_hash': 'odyssey',
    'email': 'cdixon5@nd.edu'
}

insert_query = f"INSERT INTO {user_table} (username, password_hash, email) VALUES (%s, %s, %s)"
cursor.execute(insert_query, (user_data['username'], user_data['password_hash'], user_data['email']))
connection.commit()
print(f"Data inserted into '{user_table}' successfully")

# Close the cursor and connection
cursor.close()
connection.close()