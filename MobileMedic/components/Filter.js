import React from 'react';
import { Text, View, FlatList, StyleSheet, Button} from 'react-native';

const Filter = ({data, query, setQuery}) => {

    return (
        <View>
            <FlatList contentContainerStyle={{paddingBottom: 190}} data={data} renderItem={({item}) =>{
                if(query === ""){
                    return (
                        <View 
                        style={styles.box}>
                            <Text 
                            style={{color: "white", 
                            marginBottom: 3, 
                            borderBottomColor: "#fff", 
                            borderBottomWidth: 1,}}>
                                {item.name}
                            </Text>
                            <Text 
                            style={styles.bottomList}>
                                {item.text}
                            </Text>
                        </View>
                    )
                }
                if(item.name.toLowerCase().includes(query.toLowerCase())){
                    return (
                        <View 
                        style={styles.box}>
                            <Text 
                            style={{color: "white", 
                            marginBottom: 3, 
                            borderBottomColor: "#fff", 
                            borderBottomWidth: 1,}}>
                                {item.name}
                            </Text>
                            <Text 
                            style={styles.bottomList}>
                                {item.text}
                            </Text>
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
        marginLeft: 15,
        marginRight:15,
    },
    bottomList: {
        color: 'white',
        marginBottom: 13,
        padding: 3,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    }
})

export default Filter;