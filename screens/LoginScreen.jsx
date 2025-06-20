import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";


export default function LoginScreen({onRegister, onLogin}) {

    const styles = createStyle()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>SIGN IN</Text>

            <TextInput
                label="Username"
                value={username}
                onChangeText={setUsername}
                mode="flat"
                left={<TextInput.Icon name="account"/>}
                style={styles.input}
            />

            <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                mode="flat"
                left={<TextInput.Icon name="lock" />}
                right={
                <TextInput.Icon
                    name={showPassword ? 'eye-off' : 'eye'}
                    onPress={() => setShowPassword(!showPassword)}
                />
                }
                style={styles.input}
            />

            <TouchableOpacity onPress={onRegister}>
                <Text style={styles.registerText}>
                Don’t have an account? <Text style={styles.registerLink}>Register Here</Text>
                </Text>
            </TouchableOpacity>

            <Button
                mode="contained"
                onPress={() => onLogin(username, password)}
                style={styles.loginButton}
                contentStyle={styles.loginContent}
            >
                LOGIN
            </Button>
        </View>
    )
}

function createStyle(){
    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 24,
            justifyContent: 'center',
            backgroundColor: '#fff',
        },
        header: {
            alignSelf: 'center',
            marginBottom: 32,
            fontSize: 24,
            fontWeight: 'bold',
        },
        input: {
            marginVertical: 8,
        },
        registerText: {
            alignSelf: 'center',
            marginTop: 16,
            fontSize: 14,
            color: '#333',
        },
        registerLink: {
            fontWeight: 'bold',
            color: '#6200ee',
        },
        loginButton: {
            marginTop: 24,
            borderRadius: 4,
        },
        loginContent: {
            paddingVertical: 8,
        },
    })
}