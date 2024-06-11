from flask import Flask, request, jsonify, session
from flask_cors import CORS
import psycopg2
import json
from datetime import datetime
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()



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



@app.route("/", methods=["POST","GET"])
def Home():
    
    if session.get('username') is not None:
        username = session.get('username')
        
        cur.execute("SELECT phone_number FROM user_info WHERE username = %s", (username))
        phonenumber=cur.fetchone()
        
        user_info = [username, phonenumber]

        return jsonify({"message": True,"userinfo": user_info})
    else :   
        return jsonify({"message" : False}), 401

@app.route("/signUp", methods=["POST"])
def sign_up_user():
    try:
        data = json.loads(request.data)
        username = data["username"]
        password = data["password"]
        phone_number = data["phone_number"]

        
        cur.execute("SELECT * FROM user_info WHERE username = %s OR phone_number = %s", (username, phone_number))
        if cur.fetchone():
            return jsonify({"message": False}), 400

        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        query = "INSERT INTO user_info (username, user_password, phone_number) VALUES (%s, %s, %s)"
        cur.execute(query, (username, hashed_password, phone_number))
        conn.commit()

        return jsonify({"message": True}), 200

    except Exception as e:
        print(str(e))
        return jsonify({"message": False}), 500




@app.route("/login", methods=["POST","GET"])
def login():
    try:
        data = json.loads(request.data)
        phonenumber = data["phoneNumber"]
        password = data["password"]



        cur.execute("SELECT * FROM user_info WHERE phone_number = %s", (phonenumber,))
        user = cur.fetchone()
        
        if user is not None:
            if bcrypt.check_password_hash(user[2], password):
                session['username'] = user[1]
                session.permanent = True
                return jsonify({"message": True}), 200
            else:
                return jsonify({"message": False}), 401
        else:
            return jsonify({"message": False}), 401

    except Exception as e:
        print(str(e))
        return jsonify({"message": False}), 500


@app.route("/orders", methods=['POST'])
def save_orders():
    
    try:
        data = request.get_json()

        numberofproduct = data['numberofproduct']
        price = data['price']
        total_amount = data['total_amount']
        
        username = session.get('username')


        cur.execute("SELECT id FROM user_info WHERE username = %s", (username))
        userid = cur.fetchone()
        if userid is None:
                return jsonify({'message': False}), 404

        
        query = "INSERT INTO orders (numberofproduct, price , total_amount , userid) VALUES (%s, %s, %s, %s)"
        cur.execute(query, (numberofproduct, price, total_amount, userid))

        
        return jsonify({'message': True}), 200
    except Exception as e:
        return jsonify({'message': False + str(e)}), 500
    

@app.route("/getorders", methods=['GET'])
def get_orders():
    
    username = session.get('username')
    
    cur.execute("SELECT id FROM user_info WHERE username = %s",(username))
    user = cur.fetchone()
    
    userid = user[0]
    
    cur.execute("SELECT * FROM orders WHERE userid = %s",(userid))
    orders =cur.fetchall()
    return jsonify({"orders": orders})


@app.route("/userextrainfo", methods=['POST'])
def userextrainfo():
    
    try:
        data = request.get_json()

        province = data['province']
        city = data['city']
        address = data['address']
        code_posty = data['code_posty']
        
        username = session.get('username')

        cur.execute("SELECT id FROM user_info WHERE username = %s", (username))
        userid = cur.fetchone()
        
        if userid is None:
                    return jsonify({'message': False}), 404
        
        query = "INSERT INTO user_extrainfo (province, city , address, code_posty , userid) VALUES (%s, %s, %s, %s, %s)"
        cur.execute(query, (province, city , address, code_posty , userid))
        
        return jsonify({'message': True}), 200
    except Exception as e:
        return jsonify({'message': False + str(e)}), 500


@app.route("/request", methods=['POST'])
def requests():
    
    try:
        data = request.get_json()

        textinfo = data['textinfo']
        
        t = datetime.now()
        req_date = '{}/{}/{}'.format(t.year, t.month, t.day)
        req_time = '{}:{}:{}'.format(t.hour, t.minute, t.second)
        request_date = req_date + '  ' +  req_time
        
        
        username = session.get('username')


        cur.execute("SELECT id FROM user_info WHERE username = %s", (username))
        userid = cur.fetchone()
        if userid is None:
                return jsonify({'message': False}), 404

        
        query = "INSERT INTO request (text_info, request_date , userid) VALUES (%s, %s, %s, %s)"
        cur.execute(query, (textinfo, request_date , userid))

        
        return jsonify({'message': True}), 200
    except Exception as e:
        return jsonify({'message': False + str(e)}), 500
    

    

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
    app.run(debug=True)



