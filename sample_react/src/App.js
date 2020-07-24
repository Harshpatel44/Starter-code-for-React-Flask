import React, {Component} from 'react';
import './App.css';
import Axios from "axios";

class App extends Component {

    async componentDidMount() {
        const body = {
            sample_data: "this is the data"
        };
        const data = await Axios.post("http://127.0.0.1:5000/data", body);
        console.log(data.data);
    }

    render() {
        return (
            <div className="App">
                <h1>This is a sample React page, with flask as a backend.</h1>
                <p>You can use flask for 2 purposes. First is only to send GET POST requests and receive responses.
                Second is to render web pages in addition to GET POST requests. This sample follows second approach.</p>
            </div>
        );
    }
}

export default App;
