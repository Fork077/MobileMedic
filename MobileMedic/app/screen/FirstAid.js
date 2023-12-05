import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

const FirstAid = (props) => {
    const [messages, setMessages] = useState([])

    const API_KEY = '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'

    const handleSend = async (newMessages = []) => {
        try{
            const userMessage = newMessages[0];

            setMessages(previousMessages => GiftedChat.append(previousMessages, userMessage));
            const messageText = userMessage.text.toLowerCase();
            const keywords = ['treat', 'cure', 'medicine', 'instruction'];
            if (!keywords.some(keyword => messageText.includes(keyword))){
                const botMessage = {
                    _id: new Date().getTime() + 1,
                    text: "I'm your mobile medic, ask me anything about health and first aid.\n\nPlease take note contact/notfiy emergency personels or authorities before performing first aid\n\nPlease do not perform first aid if you are not qualified.",
                    createdAt: new Date(),
                    user: {
                        _id:2,
                        name: 'Mobile Medic'
                    }
                };
                setMessages(previousMessages => GiftedChat.append(previousMessages, botMessage));
                return;
            }
            const respo = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
                prompt: `Get me instruction for ${messageText}`,
                max_tokens: 1200,
                temperature: 0.2,
                n:1,
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                }
            });
            console.log(respo.data);

            const instruction = respo.data.choices[0].text.trim();
            const botMessage = {
                _id: new Date().getTime() + 1,
                text: instruction,
                createdAt: new Date(),
                user: {
                    _id:2,
                    name: 'Mobile Medic'
                }
            };
            setMessages(previousMessages => GiftedChat.append(previousMessages, botMessage));

        }catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
            <View style={styles.Image}>
                <ImageBackground style = {styles.Main} source={require('../assets/Onboard1.jpg')} />

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
                     FIRST AID TIPS
                    </Text>
            </View>
            <GiftedChat
                messages={messages}
                onSend={newMessages => handleSend(newMessages)}
                user={{_id: 1}}
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
        height: 150,
        borderColor: "grey",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },
    Pick: {
        borderColor: "grey", 
        borderWidth: 1, 
        borderRadius: 10, 
        width: "75%",
        height: 50,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    button: {
        borderColor: 'black',
        borderWidth: 0.5,
        padding: 13,
        borderRadius: 9,
        width: 150,
        height: 50,
        alignItems: "center",
        backgroundColor: "#D62424",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold"
    }
})

export default FirstAid;