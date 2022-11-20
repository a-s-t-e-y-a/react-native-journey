import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';
const {signupFields} = require('./constant.js');
const fields = signupFields;
const Register = props => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [countrycode, setcountrycode] = useState('');

  return (
    <View style={[tw`bg-black`]}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <Text
            style={[tw`font-bold text-4xl text-white mb-4 text-center mt-16 `]}>
            Welcome on board!
          </Text>
        </View>
        <View>
          <Image
            source={require('../../assets/images/taxi-astronaut.png')}
            style={[tw`ml-24`]}></Image>
        </View>
        <KeyboardAvoidingView enabled>
          <View>
            <TextInput
              style={[
                tw`mx-8 my-2 border-2 border-white p-2 rounded-lg text-2xl`,
              ]}
              onChangeText={username => setusername(username)}
              placeholder="Enter username"
            />
          </View>
          <View>
            <TextInput
              style={[
                tw`mx-8 my-2 border-2 border-white p-2 rounded-lg text-2xl`,
              ]}
              onChangeText={password => setpassword(password)}
              placeholder="Enter pasword"
            />
          </View>
          <View>
            <TextInput
              style={[
                tw`mx-8 my-2 border-2 border-white p-2 rounded-lg text-2xl`,
              ]}
              onChangeText={email => setemail(email)}
              placeholder="Enter email"
            />
          </View>
          <View>
            <TextInput
              style={[
                tw`mx-8 my-2 border-2 border-white p-2 rounded-lg text-2xl`,
              ]}
              onChangeText={phone => setphone(phone)}
              placeholder="Enter username"
            />
          </View>
          <View>
            <TextInput
              style={[
                tw`mx-8 my-2 border-2 border-white p-2 rounded-lg text-2xl`,
              ]}
              onChangeText={countrycode => setcountrycode(countrycode)}
              placeholder="Enter countrycode"
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
module.exports = Register;
