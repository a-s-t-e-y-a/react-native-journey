import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
const Button = ({title}) => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest.';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <View>
      <Text
        style={[
          tw`text-4xl  rounded-lg px-12 py-4 text-center m-2 text-white bg-black`,
        ]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Button;
