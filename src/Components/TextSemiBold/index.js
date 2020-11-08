import React from 'react'
import { Text } from 'react-native'
import styles from './styles';

export default TextSemiBold = (props) => {
    return (
        <Text style={[styles.text,props.style]}>
            {props.children}
        </Text>
    )
}
