
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function LoginFormScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SignIn Screen</Text>
            <Link href="/register">Cadastrar</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 0,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 16,
        marginBottom: 64,
        alignSelf: 'center',
        fontFamily: 'PoppinsBold'
    }
})