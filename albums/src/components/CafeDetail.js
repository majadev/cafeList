import React from 'react';
import { Image, Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const CafeDetail = ({cafe}) => {
    return (
        <Card>
            <CardSection>
                
                <Image style={styles.imageStyle} source={{ uri: cafe.image }}>
                    <View style={styles.imageContainerStyle}>
                        <View style={styles.headerViewStyle}>
                            <Text style={styles.headerTextStyle}>{cafe.name}</Text>
                        </View>
                    </View>
                </Image>
                
            </CardSection>
            <Button />
        </Card>
    );
};

const styles = {  
    headerViewStyle: {
        flex: 6
    },  
    headerTextStyle: {
        fontSize: 28,
        color: '#fff'
    },
    imageStyle: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent:'center'
    },
    imageContainerStyle: {
        flex: 1,
        height: 300,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: 'purple', 
        opacity: 0.6
    }
};

export default CafeDetail;