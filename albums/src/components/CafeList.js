import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import CafeDetail from './CafeDetail';

class CafeList extends Component {
    state = { cafes: [] };
    componentWillMount() {
        axios.get('http://demo4435721.mockable.io/')
            .then(response => this.setState({ cafes: response.data }));
    }

    renderCafes() {
        return this.state.cafes.map(cafe => 
            <CafeDetail key={cafe.id} cafe={cafe} />
        );
    }

    render () {
        console.log(this.state);
        return (
            <View>
                {this.renderCafes()}
            </View>
        )
    };
};

export default CafeList;