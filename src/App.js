import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SearchExample extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchString: ''
        }
        this.handleChange=this.handleChange.bind(this);
    };
    handleChange (e){
        this.setState(state => ({searchString:e.target.value}));
    }

    render() {
        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();
        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return <div>
            <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />

            <ul>

                { libraries.map(function(l){
                    return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                }) }

            </ul>

        </div>;

    }
};

export default SearchExample;
