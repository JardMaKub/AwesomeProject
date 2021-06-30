/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Input } from 'react-native-elements'
import React from 'react';
import type {Node} from 'react';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import firestore from '@react-native-firebase/firestore';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {

  firestore().collection('Users').doc('ABC').get().then((user)=>{
    console.log(user)
  });

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={{fontSize:50}}>Wadee</Text>
      <Input placeholder="Hint"></Input>
      <TextInput style={{backgroundColor:"#DDDDDD"}} keyboardType="default"></TextInput>
 
      <Button
        icon={
          <Icon
          name="arrow-right"
          size={15}
          color="white"
        />
      }
      title=" Button with icon component"
    />
    <ScrollView style={styles.scrollView}>
      <Image
        source={{ uri: 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.6435-9/35302363_1954116074899525_9190251246227816448_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGiJWCCA-0Bo9uAds8D5P02MMn52_9j9xowyfnb_2P3Gorj7vW3rnaNYAWvPELPQGqeq4XzByTDN-8kLhX8QGht&_nc_ohc=62Otf5k8AQQAX-s5p-r&_nc_oc=AQmyHT6Ev5XwYCtFdaMaioQE-V3LgZljvX_67P__xTX4TGG0ORLrXLz04eQ2mtdr45w&_nc_ht=scontent.fbkk12-1.fna&oh=3076a314f77c8bdfec9f129514119115&oe=60D80EC5 '}}
        style={{ width: 200, height: 200 ,marginLeft: '5%',marginTop: '5%'}}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Image
        source={{ uri: 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.6435-9/35302363_1954116074899525_9190251246227816448_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGiJWCCA-0Bo9uAds8D5P02MMn52_9j9xowyfnb_2P3Gorj7vW3rnaNYAWvPELPQGqeq4XzByTDN-8kLhX8QGht&_nc_ohc=62Otf5k8AQQAX-s5p-r&_nc_oc=AQmyHT6Ev5XwYCtFdaMaioQE-V3LgZljvX_67P__xTX4TGG0ORLrXLz04eQ2mtdr45w&_nc_ht=scontent.fbkk12-1.fna&oh=3076a314f77c8bdfec9f129514119115&oe=60D80EC5 '}}
        style={{ width: 200, height: 200 ,marginLeft: '5%',marginTop: '5%'}}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Image
        source={{ uri: 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.6435-9/35302363_1954116074899525_9190251246227816448_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGiJWCCA-0Bo9uAds8D5P02MMn52_9j9xowyfnb_2P3Gorj7vW3rnaNYAWvPELPQGqeq4XzByTDN-8kLhX8QGht&_nc_ohc=62Otf5k8AQQAX-s5p-r&_nc_oc=AQmyHT6Ev5XwYCtFdaMaioQE-V3LgZljvX_67P__xTX4TGG0ORLrXLz04eQ2mtdr45w&_nc_ht=scontent.fbkk12-1.fna&oh=3076a314f77c8bdfec9f129514119115&oe=60D80EC5 '}}
        style={{ width: 200, height: 200 ,marginLeft: '5%',marginTop: '5%'}}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Image
        source={{ uri: 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.6435-9/35302363_1954116074899525_9190251246227816448_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGiJWCCA-0Bo9uAds8D5P02MMn52_9j9xowyfnb_2P3Gorj7vW3rnaNYAWvPELPQGqeq4XzByTDN-8kLhX8QGht&_nc_ohc=62Otf5k8AQQAX-s5p-r&_nc_oc=AQmyHT6Ev5XwYCtFdaMaioQE-V3LgZljvX_67P__xTX4TGG0ORLrXLz04eQ2mtdr45w&_nc_ht=scontent.fbkk12-1.fna&oh=3076a314f77c8bdfec9f129514119115&oe=60D80EC5 '}}
        style={{ width: 200, height: 200 ,marginLeft: '5%',marginTop: '5%'}}
        PlaceholderContent={<ActivityIndicator />}
      />
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
