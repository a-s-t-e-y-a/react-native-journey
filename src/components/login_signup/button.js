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
    <View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <Image
            source={require('../../assets/images/taxi-astronaut.gif')}></Image>
        </View>
        <KeyboardAvoidingView enabled>
          <View>
            <TextInput
              style={[tw``]}
              onChangeText={username => setusername(username)}
              placeholder="Enter username"
            />
          </View>
          <View>
            <TextInput
              style={[tw``]}
              onChangeText={password => setpassword(password)}
              placeholder="Enter pasword"
            />
          </View>
          <View>
            <TextInput
              style={[tw``]}
              onChangeText={email => setemail(email)}
              placeholder="Enter email"
            />
          </View>
          <View>
            <TextInput
              style={[tw``]}
              onChangeText={phone => setphone(phone)}
              placeholder="Enter username"
            />
          </View>
          <View>
            <TextInput
              style={[tw``]}
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
