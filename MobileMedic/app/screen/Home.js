import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const Home = (props) => {
    return (
     <View style= {styles.Main}>
       <TouchableOpacity 
       style= {styles.Btn} 
       onPress={() => props.navigation.navigate('Health')}>
            <ImageBackground 
            style={styles.Bgn} 
            source={require('../assets/Healthtips.jpg')}>
               <Text style={styles.Txt}>
                    HEALTH TIPS
                </Text> 
            </ImageBackground>
       </TouchableOpacity>
            
       <TouchableOpacity 
       style= {styles.Btn} 
       onPress={() => props.navigation.navigate('FirstAid')}>
            <ImageBackground 
            style={styles.Bgn} 
            source={require('../assets/Onboard1.jpg')}>
                <Text style={styles.Txt}>
                    FIRST AID TIPS
                </Text>
            </ImageBackground>
       </TouchableOpacity>

       <TouchableOpacity 
       style= {styles.Btn} 
       onPress={() => props.navigation.navigate('Emergency')}>
            <ImageBackground 
            style={styles.Bgn} 
            source={require('../assets/Ambulance.jpg')}>
                <Text style={styles.Txt}>
                    EMERGENCY HOTLINES
                </Text>
            </ImageBackground>
       </TouchableOpacity>
     </View>   
    )
}

const styles = StyleSheet.create ({
    Main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        justifyContent: "space-evenly",
    },
    Btn: {
        width: 340,
        height: 165,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    Bgn: {
        borderRadius: 10,
        width: 340,
        height: 165,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    Txt: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 3,
    }
});

export default Home;