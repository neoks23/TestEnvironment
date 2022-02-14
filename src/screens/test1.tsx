import React, { useEffect } from "react";
import {
    Alert, KeyboardAvoidingView,
    Platform,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View
} from "react-native";
import { styles } from "../styles/Styles";

const Test1 = () => {
    return(
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.buttonContainer}>
                <Text style={{color: "black"}}>Hello world!{"\n\n"}Here you can manage your account{"\n\n"}</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Test1;
