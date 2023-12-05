import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
    {
      title: 'Welcome to \n\nMobile Medic',
      text: 'This is a mobile application that is open for the \npublic to use, which can aid their medical questions ',
      image: require('../app/assets/Onboard1.jpg'),
      bg: '#59b2ab',
    },
    {
      title: 'FREE',
      text: 'Free to use, no membership fee, no plan needed. \nit only requires your mobile device and your time.',
      image: require('../app/assets/Onboard2.jpg'),
      bg: '#febe29',
    },
    {
      title: 'SIMPLE AND EASY',
      text: "Developed to be simple and easy to use in order to \nbe used by anoyone at any age.",
      image: require('../app/assets/Onboard3.jpg'),
      bg: '#22bcb5',
    },
    {
      title: 'GAIN KNOWLEDGE AND \nHAVE A HEALTHY LIFESTYLE',
      text: "Try the app to gain knowledge and have a healthy \nlifestyle from it. \n\nits better to know something than nothing.",
      image: require('../app/assets/Onboard4.jpg'),
      bg: '#22bcb5',
    },
  ];

const Onboard = (props) => {

  const  renderItem = ({item}) => {
    return(
    <ImageBackground style={styles.image} source={item.image} >
      <View style={styles.slide}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
      </View> 
      </ImageBackground>
    )
  }
 
const keyExtractor = (item) => item.title;

  return(
  <View style={{flex: 1}}>
    <StatusBar translucent backgroundColor="transparent" />
    <AppIntroSlider
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      prevLabel='Back'
      skipLabel='Skip'
      showPrevButton
      showSkipButton
      activeDotStyle={styles.pagination}
      dotStyle={styles.inactivePagination}
      data={data}
      onDone={() => props.navigation.replace('Home')}
    />
  </View>
  
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  text: {
    marginVertical: 50,
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
  },

  pagination: {
    backgroundColor: 'red',
  },

  inactivePagination: {
    backgroundColor: 'white',
  }
});

export default Onboard;
