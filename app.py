from flask import Flask, request, jsonify
import psycopg2
import json

app = Flask(__name__)

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
    data = json.loads(request.data)
    username = data["username"]
    password = data["password"]
    phonenumber =data["phoneNumber"]


    
    query = "INSERT INTO user_info (username, user_password, phone_number) VALUES (%s, %s, %s)"
    cur.execute(query, (username, password, phonenumber))

    conn.commit()

    return jsonify({"message": "User registered successfully"})


@app.route("/login", methods=["POST"])
def login():
    
    data = json.loads(request.data)
    phonenumber =data["phoneNumber"]
    password =data["password"]

    cur = conn.cursor()

    cur.execute("SELECT * FROM user_info WHERE phone_number = %s AND user_password = %s", (phonenumber, password))
    user = cur.fetchone()
    if user and user[2] == password:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid phonenumber or password"}), 401


@app.route("/products", methods=["GET"])
def get_products():
    
    import pdb; pdb.set_trace()
    cur.execute("SELECT * FROM products")
    products = cur.fetchall()
    product_data = []
    for product in products:
        product_dict = {
            "stock": product[2],
            "title": product[3],
            "picture": product[4]
        }
        product_data.append(product_dict)
    
    return jsonify({"products": product_data})


# cur.close()
# conn.close()


if __name__ == "__main__":
    app.run(debug=True)
