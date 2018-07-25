import React,{ Component } from 'react';
import Navbar from "./Navbar";
import Banner from "./Banner";

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return(
            <div>
                <Navbar />
                <Banner />
            </div>
        )
    }
}

export default Home