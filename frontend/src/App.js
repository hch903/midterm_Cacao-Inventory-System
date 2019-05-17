import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import socketIoClient from 'socket.io-client';
import axios from 'axios';

import Blog from './containers/Blog';

const url = "http://localhost:4000";

class App extends Component {
    componentDidMount() {
        const socket = socketIoClient("http://localhost:4000");
        if(socket !== undefined){
            console.log("socket connected!")
            // socket.on("init")
            axios.get(url)
                .then(res => {
                    let text = res.text();
                    console.log(text);
                })
                .catch(err => {
                    console.log(err);
                })
            axios.get(url+"/summary")
                .then(res => {
                    let text = res.text();
                    console.log(text);
                })
                .catch(err => {
                    console.log(err);
                })
            }
        }
    
    render() {
        return (
            <BrowserRouter>
                <div className = "App">
                    <Blog />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
