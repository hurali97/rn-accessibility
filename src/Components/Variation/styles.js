const { StyleSheet } = require("react-native");
import { appTheme } from './../../Utils/index';
import fonts from './../../assets/fonts/index';
import { vw } from './../../Units/index';
const { vh } = require("../../Units");


const styles = StyleSheet.create({
    title: {
        fontSize: 2.6 * vw,
        color: appTheme.skyGreen,
        fontFamily: fonts.PM
    },
    container: {
        borderWidth: 0.5 * vw,
        borderColor: appTheme.greenish,
        paddingHorizontal: 2 * vw,
        paddingVertical: 1 * vh,
        borderRadius: 2 * vw,
        width: 27*vw,
        marginRight: 3*vw
    },
    price: {
        fontSize: 1.9 * vh,
        marginTop: 1 * vh
    }

});

export default styles;