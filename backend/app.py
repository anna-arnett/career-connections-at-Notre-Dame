from flask import Flask, render_template, request, jsonify, session
from flask_cors import CORS
import mysql.connector
import bcrypt 

app = Flask(__name__)
CORS(app, supports_credentials=True)  # Enable CORS with support for credentials
app.secret_key = 'bui'

# MySQL database configuration
db = mysql.connector.connect(
    host='localhost',
    user='sqluser',
    password='password',
    database='Career_Connections'
)

cursor = db.cursor()

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Check the credentials in the database
    query = "SELECT * FROM users WHERE username = %s"
    cursor.execute(query, (username,))
    user = cursor.fetchone()

    if user and bcrypt.checkpw(password.encode('utf-8'), user[2].encode('utf-8')):
        # The hashed password in the database is at index 2 (change if needed)
        session['username'] = username
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'error': 'Invalid login credentials'}), 401
    
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')

        # Check if the username and email already exist
        check_query = "SELECT * FROM users WHERE username = %s OR email = %s"
        cursor.execute(check_query, (username, email))
        existing_user = cursor.fetchone()

        if existing_user:
            return jsonify({'error': 'Username or email already exists'}), 400

        # Hash the password using bcrypt
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        # Insert new user into the database with hashed password
        insert_query = "INSERT INTO users (username, password, email) VALUES (%s, %s, %s)"
        cursor.execute(insert_query, (username, hashed_password, email))
        db.commit()

        return jsonify({'message': 'Signup successful'})

    return render_template('signup.html')

@app.route('/dashboard')
def dashboard():
    if 'username' in session:
        return jsonify({'message': f"Welcome, {session['username']}! This is your dashboard."})
    else:
        return jsonify({'error': 'Unauthorized'}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9065, debug=True)