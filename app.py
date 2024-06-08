from flask import Flask, request, jsonify, session
from flask_cors import CORS
import psycopg2
import json

app = Flask(__name__)
CORS(app)
app.secret_key = 'djaflsfjljehrw7343682yg'


conn = psycopg2.connect(
    host="localhost",
    database="ProjectDb",
    user="postgres",
    password="81139913"
)

cur = conn.cursor()

@app.route("/signUp", methods=["POST"])
def signUp_user():
    
    # import pdb; pdb.set_trace()
    try:
        data = json.loads(request.data)
        username = data["username"]
        password = data["password"]
        phonenumber =data["phoneNumber"]

        cur.execute("SELECT * FROM user_info WHERE username = %s OR phone_number = %s", (username, phonenumber))
        if cur.fetchone():
            return jsonify({"message": "Username or phone number already exists"}), 400
        
        query = "INSERT INTO user_info (username, user_password, phone_number) VALUES (%s, %s, %s)"
        cur.execute(query, (username, password, phonenumber))

        conn.commit()
        session['username'] = username
        session['phonenumber'] = phonenumber

        return jsonify({"message": "User registered successfully","username": username , "phonenumber": phonenumber})
        

    
    
    except Exception as e:
        # Handle any unexpected errors
        return jsonify({"message": "An error occurred"}), 500


@app.route("/login", methods=["POST"])
def login():
    
    data = json.loads(request.data)
    phonenumber =data["phoneNumber"]
    password =data["password"]

    cur = conn.cursor()

    cur.execute("SELECT * FROM user_info WHERE phone_number = %s AND user_password = %s", (phonenumber, password))
    user = cur.fetchone()
    session['phonenumber'] = phonenumber
    session.permanent = True
    
    
    if user and user[2] == password:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid phonenumber or password"}), 401


@app.route("/products", methods=["GET"])
def get_products1():
    
    cur.execute("SELECT * FROM products WHERE product_category = 'HP_MODEL'")
    products = cur.fetchall()
    # product_data = []
    # for product in products:
    #     product_dict = {
            
    #         "stock": product[2],
    #         "title": product[3],
    #         "picture": product[4]
    #     }
    #     product_data.append(product_dict)
   
    return jsonify({"products": products})

@app.route("/products2", methods=["GET"])
def get_products2():
    
    cur.execute("SELECT * FROM products WHERE product_category = 'CANON_MODEL'")
    products = cur.fetchall()
    #product_data = []
  #  for product in products:
      #  product_dict = {
          #  "stock": product[2],
           # "title": product[3],
           # "picture": product[4]
    
      #  product_data.append(product_dict)
    
    return jsonify({"products": products})

@app.route("/products3", methods=["GET"])
def get_products3():
    
    cur.execute("SELECT * FROM products WHERE product_category = 'EPSON_MODEL'")
    products = cur.fetchall()
   
    return jsonify({"products": products})




# cur.close()
# conn.close()


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")





if session["mohammad"]:
   pass 

session["mohammad"] = True
session['username'] = "mohammad"
session['username'] = "mwhdi"