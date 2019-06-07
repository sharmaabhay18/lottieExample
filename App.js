/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';

const {height, width} = Dimensions.get('window');
export default class App extends Component<Props> {

  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentWillMount() {
    // Animated.timing(this.state.fadeAnim,            // The animated value to drive
    //   {
    //   toValue: 50,
    //   easing: Easing.back(),
    //   duration: 2000,
    // }).start(() => this.setState({ fadeAnim: new Animated.Value(0) },
    // () => {
    //   Animated.timing(          // Animate over time
    //     this.state.fadeAnim, // The animated value to drive
    //     {
    //       toValue: -50,           // Animate to opacity: 1 (opaque)
    //       duration: 2000,       // 2000ms
    //     }
    //   ).start();
    //   }
    // ));
    
  }

  componentDidMount() {
    this.animation.play(0, 130);
    this.textAnimation();
  }

  textAnimation = () => {
    Animated.timing(this.state.fadeAnim,            // The animated value to drive
      {
      toValue: 50,
      easing: Easing.back(),
      delay: 1000,
      duration: 2000,
    }).start(() => this.setState({ fadeAnim: new Animated.Value(0) },
    () => {
      Animated.timing(          // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: -50,           // Animate to opacity: 1 (opaque)
          duration: 2000,       // 2000ms
        }
      ).start();
      this.animation.reset();
      }
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <LottieView 
        ref={animation => {
          this.animation = animation;
        }}
            source={require('./data2.json')}
            resizeMode='cover'
            // autoPlay
            // loop
            // style={{width}}
        />
        <Animated.View   style={{
    opacity: this.state.fadeAnim, // Binds directly
    transform: [{
      translateY: this.state.fadeAnim.interpolate({
        inputRange: [0, 2.5],
        outputRange: [10, 0]  // 0 : 150, 0.5 : 75, 1 : 0
      }),
    }],
  }}
>
            <Animated.Text style={styles.animatedText}>
                +5
            </Animated.Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
animatedText: {
    // fontFamily: 'Rubik-bold',
    // paddingTop: height * 0.25,
    fontWeight: 'bold',
    fontSize: 80,
    color: '#ffe214'
}
});
