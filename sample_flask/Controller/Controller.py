import json

from flask import Blueprint, render_template, request, jsonify

controller = Blueprint('controller', __name__,
                       static_folder='../sample_react/build/static/',
                       template_folder='../sample_react/build/'
                       )

@controller.route('/')
def hello_world():
    return render_template("index.html")

@controller.route("/data", methods=["POST"])
def data_post():
    data = json.loads(request.data.decode("utf-8"))
    print(data['sample_data'])
    return jsonify(data['sample_data'])
