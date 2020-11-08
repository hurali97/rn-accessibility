const { StyleSheet } = require("react-native");
import { vh, vw } from './../../Units/index';
import { appTheme } from './../../Utils/index';
import fonts from './../../assets/fonts/index';

const styles = StyleSheet.create({

    topView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    bearHeading: {
        width: 36*vw,
        fontSize: 6 * vw,
        fontFamily: fonts.PFSB
    },
    scrollView: {

        flex: 1,
        backgroundColor: appTheme.white
    },
    contentContainerStyle: { 
        paddingTop: 3 * vh,
        paddingHorizontal: 6 * vw,
        paddingBottom: 3*vh
    },
    currency: {
        lineHeight: 2.5 * vh,
        marginRight: 1 * vw,
        fontSize: 1.7 * vh,
        fontFamily: fonts.PFSB
    },
    priceContainer: {
        flexDirection: 'row',
    },
    price: {
        // color: appTheme.skyGreen,
        fontFamily: fonts.PFSB
    },
    bearwhostared: {
        width: 88 * vw,
        height: 88 * vw / 1.414239482200647,

        resizeMode: 'contain',
        marginTop: 4 * vh,
        borderRadius: 5 * vw,

    },
    bearImagStyle: {
        borderRadius: 5 * vw,
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 3 * vh,
        marginBottom: 4 * vh, 
    },
    rowAuthor:{
        flexDirection: 'row',
        alignItems: 'center', 
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center', 
    },
    name: {
        fontSize: 2.7 * vh,
        marginLeft: 1 * vw
    },
    rating: {
        width: 6 * vw,
        height: 6 * vw,
        resizeMode: 'contain',
        marginLeft: 2 * vw,
    },
    description: {
        color: appTheme.gray,
        fontSize: 2.3 * vh
    },
    ratingText: {
        lineHeight: 3.6 * vh
    },
    variationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 4 * vh,
        marginBottom: 6 * vh
    },
    heart: {
        width: 6 * vw,
        height: 6 * vw,
        resizeMode: 'contain',
    },
    heartContainer: {
        borderRadius: 3 * vw,
        backgroundColor: '#e7e6e6',
        height: 8 * vh,
        paddingHorizontal: 4 * vw,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;