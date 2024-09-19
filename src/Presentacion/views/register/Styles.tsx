import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '30%',
    },
    form: {
        width: '100%',
        height: '75%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign:'center',
        marginTop:0,
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 0,

    },
    formInput: {
        flexDirection: 'row',
        marginTop: 10,
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15,
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },

    formRegisterText: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '3%',
        alignItems: 'center'
    },
    logoImage: {
        width: 90,
        height: 90,
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 5,
        fontWeight: 'bold',
    },
});

export default RegisterStyles;