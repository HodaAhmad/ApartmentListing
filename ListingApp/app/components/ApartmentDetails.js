import React, {useState} from 'react'
import {View,StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {faker} from '@faker-js/faker'
import data from '../../apartments'

const ApartmentDetails = ({navigation, route}) => {
    //add random images
    const images = faker.image.urlPicsumPhotos();

    //fetch item with id
    const apartmentID = route.params.apartmentID;
    console.log("ID:"+apartmentID)
    const filteredApartments = data.filter(item => item.id == apartmentID);

   
    return (
        <View style={styles.container}>
            <Image source={{uri:images}} style={styles.img}/>
            <View style={styles.content}>
            {filteredApartments.map(item => (
                <View key={item.id}>
                    <Text style={{fontWeight: 'bold', fontSize:18, margin:2}}>
                        {item.title}
                    </Text>
                    <Text style={{fontSize:15,  margin:2}}>
                        {item.price}
                    </Text>
                    <Text style={{fontSize:15,  margin:2}}>
                        {item.details}
                    </Text>
                </View>
            ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 300,
        borderRadius: 8,
        borderColor: '#000000',
        marginVertical: 15,
        padding: 10
    },
    img:{
        width: '100%',
        height: 300,
    },
    content:{
        padding: 10,
        backgroundColor: '#ececec',
    },
})


export default ApartmentDetails;
