const { StyleSheet } = require("react-native");
import { appTheme } from './../../Utils/index';
import fonts from './../../assets/fonts/index';
const { vh } = require("../../Units");


const styles = StyleSheet.create({
    text: {
        fontSize: 2.5 * vh,
        color: appTheme.skyGreen,
        fontFamily: fonts.PFM
    }
});

export default styles;