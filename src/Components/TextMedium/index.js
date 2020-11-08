import React from 'react'
import { Text } from 'react-native'
import styles from './styles';

const TextMedium = (props) => {
    return (
        <Text style={[styles.text, props.style]}>
            {props.children}
        </Text>
    )
}

export default TextMedium;