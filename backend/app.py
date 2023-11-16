from flask import Flask, jsonify
from extensions import db, migrate
from models import User, Framework, Hobby

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:beno1989@localhost:3306/practica2'

db.init_app(app)
migrate.init_app(app, db)


@app.route('/api/profile', methods=['GET'])
def get_profile():
    user = User.query.first()
    return jsonify(user.to_dict())

if __name__ == '__main__':
    app.run(debug=True)
