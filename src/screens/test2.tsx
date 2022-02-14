import React from "react";
import { Alert, KeyboardAvoidingView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";
import { styles } from "../styles/Styles";

class Test2 extends React.Component{
  render(){
    return(
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View style={styles.buttonContainer}>
          <Text style={{color: "black"}}>Hello world{"\n\n"}Here you can view your inbox{"\n\n"}</Text>

        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Test2;
