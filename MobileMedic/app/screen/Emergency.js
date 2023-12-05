import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Filter from '../../components/Filter';
import { AntDesign } from '@expo/vector-icons';

const Emergency = (props) => {

    const words =[
        {
            name: "Sinait",
            text: "PNP HOTLINE:\n\t09985985051\n\t09952066910\n\nBFP HOTLINE:\n\t09171861911\n\nMDRRMO:\n\t09534058005",
            id: "1",
        },
        {
            name: "Cabugao",
            text: "PNP HOTLINE:\n\t09455036459\n\nBFP HOTLINE:\n\t09063225559\n\nMDRRMO:\n\t09356746728",
            id: "2",
        },
        {
            name: "San Juan",
            text: "PNP HOTLINE:\n\t09557411241\n\nBFP HOTLINE:\n\t09171849911\n\nMDRRMO:\n\tN/A",
            id: "3",
        },
        {
            name: "Magsingal",
            text: "PNP HOTLINE:\n\t09774589959\n\nBFP HOTLINE:\n\tN/A\n\nMDRRMO:\n\tN/A",
            id: "4",
        },
        {
            name: "Santo Domingo",
            text: "PNP HOTLINE:\n\t09179805624\n\nBFP HOTLINE:\n\t09979427747\n\nMDRRMO:\n\t09163947221\n\t09279261618",
            id: "5",
        },
        {
            name: "Bantay",
            text: "PNP HOTLINE:\n\t09177772708\n\t09177772705\n\nBFP HOTLINE:\n\t09159343405\n\nMDRRMO:\n\t09158687536",
            id: "6",
        },
        {
            name: "San Ildefonso",
            text: "PNP HOTLINE:\n\t09154005222\n\nBFP HOTLINE:\n\tN/A\n\nMUNICIPAL HEALTH OFFICE:\n\t09175850679",
            id: "7",
        },
        {
            name: "San Vicente",
            text: "PNP HOTLINE:\n\t09178417242\n\nBFP HOTLINE:\n\tN/A\n\nMDRRMC:\n\t09275029168\n\t09179983968",
            id: "8",
        },
        {
            name: "Santa Catalina",
            text: "PNP HOTLINE:\n\t09267232138\n\nBFP HOTLINE:\n\t09171145085\n\nRESCUE TEAM:\n\t09555410789\n\t09153285322",
            id: "9",
        },
        {
            name: "Vigan City",
            text: "PNP HOTLINE:\n\t166\n\t722-0890\n\nBFP HOTLINE:\n\t1600\n\t722-0990\n\nHEALTH OFFICE:\n\t722-6785",
            id: "10",
        },
        {
            name: "Caoayan",
            text: "PNP HOTLINE:\n\t09177994233\n\t09985985060\n\nBFP HOTLINE:\n\t09159343416\n\t077-722-1197\n\nMDRMMO:\n\t09063440666",
            id: "11",
        },
    ];

    const [query, setQuery] = useState("");

    return (
        <View style={{flex: 1, backgroundColor: 'red',}}>
            <View style={styles.Image}>
            <ImageBackground style = {styles.Main} source={require('../assets/Ambulance.jpg')} />

            <TouchableOpacity 
                style={{position: "absolute", left: 10, top: 10}}
                onPress={() => props.navigation.replace('Home')} >
            <AntDesign 
                name="back" 
                size={35} 
                color="red" />
            </TouchableOpacity>

                <Text style={styles.Txt}>
                    Emergency Hotlines
                </Text>
            </View>
            <View style= {styles.SearchBardDiv}>
                <TextInput
                    value={query}
                    onChangeText={(text) => setQuery(text)}
                    style = {styles.SearchBar}
                    autoCapitalize='none'
                    placeholder='Search a Municipality e.g Bantay'/>
            </View>

                <Filter
                data={words} 
                query={query} 
                setQuery={setQuery}
                />
            
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
        color: "white",
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
    },
    Image: {
        alignItems: "center",
        justifyContent: "center",
    },
    List: {
        marginRight: 5,
    },
})

export default Emergency;