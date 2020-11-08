import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import TextRegular from '../TextRegular';
import styles from './styles';
import TextMedium from './../TextMedium/index';

const Variation = (props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            accessible={true}
            accessibilityLabel="Book variation"
            accessibilityHint={`${props.title} at ${props.price}`}
            onPress={{}}
        >

            <TextMedium style={styles.title}
            >
                {props.title}
            </TextMedium>

            <TextRegular style={styles.price}>
                {props.price}
            </TextRegular>

        </TouchableOpacity>

    )
};

export default Variation;