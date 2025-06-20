import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";



export default function Index() {

    const style = createStyle()

    
    return (
        <SafeAreaView style={style.container}>
            <View>
                <Text>
                    Tailor App v1
                </Text>
                <Button mode="contained-tonal">
                    Se connecter
                </Button>
            </View>
        </SafeAreaView>
    )
}

function createStyle(){
    return StyleSheet.create({
        container: {
            flex:1,
            margin:40
        }
    })
}