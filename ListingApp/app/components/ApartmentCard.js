import React from 'react'
import {View,StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {faker} from '@faker-js/faker'
import ApartmentDetails from './ApartmentDetails';

const ApartmentCard = ({item, navigation}) => {
    const images = faker.image.urlPicsumPhotos();

    const handleTitlePress = (apartmentID) => {
        navigation.navigate('ApartmentDetails', { apartmentID: apartmentID });
    };
    const {title, price, details, aptID} = item;
    return (
        <View style={styles.container}>
            <Image source={{uri:images}} style={styles.img}/>
            <View style={styles.content}>
                <Text style={{fontWeight: 'bold', fontSize:18, margin:2}}>
                    {title}
                </Text>
                <Text style={{fontSize:15,  margin:2}}>
                    {price}
                </Text>
                <Text style={{fontSize:15,  margin:2}}>
                    {details}
                </Text>
                
                <TouchableOpacity onPress={() =>
                    navigation.navigate('ApartmentDetails', {apartmentID: item.id})
                }>
                    <Text style={styles.details}>View Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 'auto',
        height: 300,
        borderRadius: 8,
        borderColor: '#000000',
        backgroundColor: 'white',
        marginVertical: 15,
        padding: 10
    },
    img:{
        width: 300,
        height: 180,
    },
    content:{
        padding: 3
    },
    details:{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#3498db',
    }
})


export default ApartmentCard;
