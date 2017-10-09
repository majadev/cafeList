// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
      fontSize: 20

    }
  };

// make the component available to other parts of the app
export default Header;
