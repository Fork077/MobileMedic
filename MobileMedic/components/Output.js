import React from 'react';
import { Text, View, FlatList, StyleSheet, Image} from 'react-native';

const Output = ({data, query, setQuery}) => {
    return (
        <View>
            <FlatList contentContainerStyle={{paddingBottom: 190}} data={data} renderItem={({item}) =>{
                if(query === ""){
                    return (
                        <View style={styles.box}>
                                                       
                        </View>
                    )
                }
                if(item.name.toLowerCase().includes(query.toLowerCase())){
                    return (
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
                    )
                }
            }}/>
        </View>
        
    );
}

const styles = StyleSheet.create ({
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
    Txt:{
        marginRight: 5,
        marginLeft: 5,
    }
})

export default Output;