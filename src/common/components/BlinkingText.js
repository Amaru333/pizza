import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';

export default function BlinkingText(props) {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnimation, {
          toValue: 1,
          duration: props.duration,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnimation, {
          toValue: 0,
          duration: props.duration,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: props.repeat_count,
      },
    ).start();
  });
  return (
    <View>
      <Animated.View style={{opacity: fadeAnimation}}>
        {props.children}
      </Animated.View>
    </View>
  );
}
