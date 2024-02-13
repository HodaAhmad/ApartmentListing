import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React,{useState, useEffect} from 'react';
import data from '../../apartments'
import ApartmentCard from './ApartmentCard';

export default function Home({navigation}) {

  //network failure so i will make  data static
  
  /*const getAllApts = async () => {
    try {
      const response = await fetch(
        'http://localhost:3000/apartments',
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };
  */
      /**used scrollview because i was testing on iPhone */

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
            <View>
                <Text style={{fontWeight: 'bold', fontSize:18, textAlign:'center'}}>
                    Apartments List
                </Text>
            </View>
            <View style={styles.list}>
                {data.map(item => <ApartmentCard item={item} key={item.id} navigation={navigation}/>)}
            </View> 
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f7f3f3',
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  list: {
    marginVertical: 15,
    padding: 10
  }
});

