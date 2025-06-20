import LoginScreen from "../screens/LoginScreen";

export default function LoginRoute({navigation}) {
    return (
        <LoginScreen 
            onRegister={() => navigation.navigate('Register')}
            onLogin={(u, p) => {
                // Valider les infos, puis naviguer
                navigation.replace('Home');
            }}
        />
    )
}