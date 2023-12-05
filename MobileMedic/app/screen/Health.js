import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, 
        ImageBackground, TextInput, FlatList, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Health = (props) => {
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([
    {
        name: "SlEEPING",
        image: require('../assets/Sleeping.jpg'),
        text: "Good sleep habits (sometimes referred to as “sleep hygiene”) can help you get a good night’s sleep.\nSome habits that can improve your sleep health:\n\nBe consistent. Go to bed at the same time each night and get up at the same time each morning, including on the weekends\n\nMake sure your bedroom is quiet, dark, relaxing, and at a comfortable temperature\nRemove electronic devices, such as TVs, computers, and smart phones, from the bedroom\n\nAvoid large meals, caffeine, and alcohol before bedtime\nGet some exercise. Being physically active during the day can help you fall asleep more easily at night.",
        id: "1",
    },
    {
        name: "EATING",
        image: require("../assets/HealthyEating.jpg"),
        text: "Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations include low-fat or fat-free milk, lactose-free milk, and fortified soy beverages. Other plant-based beverages do not have the same nutritional properties as animal’s milk and soy beverages. Protein recommendations include seafood, lean meats and poultry, eggs, legumes (beans, peas, and lentils), soy products, nuts, and seeds.",
        id: "2",
    },
    {
        name: "EXERCISE",
        image: require('../assets/Exercise.jpg'),
        text: "Walking, swimming, cycling, jogging, skiing, aerobic dancing or any of dozens of other activities can help your heart. They all cause you to feel warm, perspire and breathe heavily without being out of breath and without feeling any burning sensation in your muscles. Whether it is a structured exercise program or just part of your daily routine, all exercise adds up to a healthier heart. Take the first step by walking. It's free, easy to do and when you have a walking companion, you're more likely to stay motivated.",
        id: "3",
    },
    {
        name: "HOBBY",
        image: require('../assets/Hobby.jpg'),
        text: "Finding a hobby that you love is a great, healthy escape from mundane daily chores and work stressors.  It allows you the opportunity to get lost in something that is not work related and completely occupies your thoughts for a short period of time.  A hobby can be something that the whole family enjoys together and strengthens that family bond or it can be something that you alone enjoy and benefit from.\n\n1. Have a hobby that makes you money\n2. Get a hobby that keeps you in shape\n3. Get a creative hobby\n4. Get a hobby to build knowledge\n5. Get a hobby to evolve your mindset",
        id: "4",
    },
  ]);

  const renderItem = ({ item }) => (
    <View>
        <Image 
        style={styles.image} 
        source={item.image}/>
            <View 
            style={styles.box}>
            <Text 
            style={{color: "black", 
            marginLeft: 10, 
            alignContent: 'center', 
            fontSize: 25,}}>
                {item.name}
            </Text>
            <Text 
            style={styles.bottomList}>
                {item.text}
            </Text>
        </View> 
    </View>
  );

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().indexOf(filter) === 0
  );

  return (
    <View style={{flex: 1}}>
        <View style={styles.Image}>
            <ImageBackground style = {styles.Main} source={require('../assets/Healthtips.jpg')} />
            <TouchableOpacity 
            style={{position: "absolute", left: 10, top: 10}}
            onPress={() => props.navigation.replace('Home')} >
            <AntDesign 
            name="back" 
            size={35} 
            color="red"
            />
            </TouchableOpacity>
            <Text style={styles.Txt}>
                 HEALTH TIPS
            </Text>
        </View>
        <View style= {styles.SearchBardDiv}>
            <TextInput
                value={filter}
                onChangeText={(text) => setFilter(text)}
                style = {styles.SearchBar}
                autoCapitalize='none'
                placeholder='Learn to be Healthy'/>
            
            <FlatList
                contentContainerStyle={{paddingBottom: 190}}
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toLocaleLowerCase()}
            />
        </View>
    </View>
    
);
}

const styles = StyleSheet.create ({
    Main: {
        flex: 1,
        width: 400,
        height: 145,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "Red",
    },
    Image: {
        alignItems: "center",
        justifyContent: "center",
    },
    Txt: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 3,
        paddingBottom: 48,
    },
    Output: {
        margin: 5,
        height: "82%",
        width: "98%",
        borderColor: "grey",
        borderWidth: 1,
        marginBottom: 15,
    },
    Pick: {
        borderColor: "grey", 
        borderWidth: 1, 
        borderRadius: 10, 
        width: "95%",
        height: 50,
        marginBottom: 10,
    },
    button: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 13,
        borderRadius: 9,
        width: 150,
        height: 50,
        alignItems: "center",
        backgroundColor: "red",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold"
    },
    SearchBardDiv: {
        marginTop: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    SearchBar: {
        borderRadius: 20,
        backgroundColor: "white",
        paddingLeft: 20,
        height: 40,
        width: '98%',
        borderWidth: 0.7
    },
    box: {
        marginTop: 5,
    },
    bottomList: {
        color: 'black',
        marginLeft: 10,
        textAlign:"justify",
        marginRight: 10,
    },
    image:{
        flex: 1,
        width: 383,
        height: 145,
        margin: 5,
    },
})
export default Health;
