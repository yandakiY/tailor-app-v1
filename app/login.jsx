import { router } from "expo-router";
import LoginScreen from "../screens/LoginScreen";

export default function LoginRoute({navigation}) {

    const goToRegister = () => {
        router.replace('/register')
    }

    return (
        <LoginScreen 
            onRegister={goToRegister}
            onLogin={(u, p) => {
                // Valider les infos, puis naviguer
                navigation.replace('Home');
            }}
        />
    )
}