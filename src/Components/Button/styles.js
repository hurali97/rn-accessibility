const { StyleSheet } = require("react-native");
import { vh, vw } from './../../Units/index';
import { appTheme } from './../../Utils/index';


const styles = StyleSheet.create({
    image: {
        width: 6 * vw,
        height: 6 * vw,
        resizeMode: 'contain',

    },
    imageContainer: {
        backgroundColor: appTheme.darkGreen,
        borderTopLeftRadius: 3 * vw,
        borderBottomLeftRadius: 3 * vw,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4 * vw
    },
    button: {
        width: 70 * vw,
        backgroundColor: appTheme.greenish,
        borderRadius: 3 * vw,
        flexDirection: 'row',
        height: 8 * vh

    },
    text:{
        color: appTheme.white,
        alignSelf: 'center',
        textAlign: 'center', 
        width: '80%'
    }
});

export default styles;