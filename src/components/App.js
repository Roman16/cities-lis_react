import React, {Component} from 'react';

import {GetCitiesList} from '../actions/cities';
import CitiesList from "./CitiesList";
import CreateCityBlock from './CreateCityBlock';

import 'bootstrap/dist/css/bootstrap.min.css';

class City {
    constructor(name) {
        this.id = new Date().getTime();
        this.name = name;
    }
};

class App extends Component {
    state = {
        sities: [],
        newSityName: ''
    };

    addCity = () => {
        let exceptionalName = true;
        this.state.sities.forEach(sity => {
            if(sity.name.toLowerCase() === this.state.newSityName.toLowerCase())
                return exceptionalName = false;
        });

        if (this.state.newSityName && exceptionalName) {
            this.setState({
                sities: [
                    new City(this.state.newSityName),
                    ...this.state.sities
                ],
                newSityName: ''
            })
        }
    };

    removeCity = id => {
        this.setState({sities: this.state.sities.filter(sity =>  sity.id !== id)});
    };

    componentDidMount() {
        GetCitiesList()
            .then(res => {
                this.setState({sities: res.data});
            })
    };

    render() {
        return (
            <div className='w-50 mx-auto my-5 shadow p-3 mb-5 bg-white rounded'>
                <h2>Список городов Украины</h2>

                <CreateCityBlock
                    add={this.addCity}
                    name={this.state.newSityName}
                    changeName={e => this.setState({newSityName: e.target.value})}
                />

                <CitiesList
                    list={this.state.sities}
                    remove={this.removeCity}
                />
            </div>
        )
    }
}

export default App;