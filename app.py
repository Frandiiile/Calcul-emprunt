from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template('index.html')

@app.route('/anncte')
def anncte_page():
    return render_template('anncte.html')
@app.route('/amorcte')
def amorcte_page():
    return render_template('amorcte.html')
@app.route('/credits')
def credits_page():
    return render_template('credits.html')
if __name__ == '__main__':
    app.run(debug=True)
