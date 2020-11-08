import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import TextRegular from '../TextRegular';
import allImages from './../../assets/images/index';
import styles from './styles';

const Button = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={props.onPress}
        // accessibilityActions={[
        //     { name: 'activate', label: 'activate' },
        // ]}
        // onAccessibilityAction={(event) => {
        //     if (event.nativeEvent.actionName == 'activate') {
        //         props.onPress();
        //     }
        // }}
        >

            <View style={styles.imageContainer}>
                <Image
                    source={allImages.images.cart}
                    style={styles.image}
                />
            </View>


            <TextRegular style={styles.text}>
                Buy Full Version
                </TextRegular>

        </TouchableOpacity>
    )
};

export default Button;
