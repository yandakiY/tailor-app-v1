
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

export default function RegisterScreen({onRegister}) {

    const router = useRouter();
    const styles = createStyle()

    const [form, setForm] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const updateField = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    
    const handleRegister = () => {
        // Ici tu peux ajouter validation / appel API
        console.log('Registering user:', form);
        router.replace('/'); // redirige vers l’écran principal
    };


    return (
        <View style={styles.container}>
            <Text style={styles.header}>TAILOR APP</Text>
            <Text style={styles.subtitle}>Inscrivez vous</Text>

            <TextInput
                label="Username"
                value={form.username}
                onChangeText={text => updateField('username', text)}
                mode="flat"
                left={<TextInput.Icon icon="account" />}
                style={styles.input}
            />
            <TextInput
                label="Password"
                value={form.password}
                onChangeText={text => updateField('password', text)}
                mode="flat"
                secureTextEntry
                left={<TextInput.Icon icon="lock" />}
                style={styles.input}
            />
            <TextInput
                label="First Name"
                value={form.firstName}
                onChangeText={text => updateField('firstName', text)}
                mode="flat"
                left={<TextInput.Icon icon="account-circle" />}
                style={styles.input}
            />
            <TextInput
                label="Last Name"
                value={form.lastName}
                onChangeText={text => updateField('lastName', text)}
                mode="flat"
                left={<TextInput.Icon icon="account-circle-outline" />}
                style={styles.input}
            />
            <TextInput
                label="Email"
                value={form.email}
                onChangeText={text => updateField('email', text)}
                mode="flat"
                keyboardType="email-address"
                left={<TextInput.Icon icon="email" />}
                style={styles.input}
            />
            <TextInput
                label="Phone"
                value={form.phone}
                onChangeText={text => updateField('phone', text)}
                mode="flat"
                keyboardType="phone"
                left={<TextInput.Icon icon="phone" />}
                style={styles.input}
            />

            <Button
                mode="contained"
                onPress={handleRegister}
                style={styles.registerButton}
                contentStyle={styles.registerContent}
            >
                S'INSCRIRE
            </Button>

            <TouchableOpacity onPress={() => router.replace('/login')}>
                <Text style={styles.signInText}>
                Vous avez déjà un compte ?<Text style={styles.signInLink}>Se connecter ici</Text>
                </Text>
            </TouchableOpacity>
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
            marginBottom: 54,
            fontSize: 24,
            fontWeight: 'bold',
        },
        subtitle: {
            fontSize:18,
            fontWeight:'bold',
            marginBottom:15,
            textAlign:'center'
        },
        input: {
            marginVertical: 6,
        },
        registerButton: {
            marginTop: 24,
            borderRadius: 4,
        },
        registerContent: {
            paddingVertical: 8,
        },
        signInText: {
            alignSelf: 'center',
            marginTop: 16,
            fontSize: 14,
            color: '#333',
        },
        signInLink: {
            fontWeight: 'bold',
            color: '#6200ee',
        },
    })
}