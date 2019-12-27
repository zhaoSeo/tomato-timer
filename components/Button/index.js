import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Stylesheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Button({iconName, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <FontAwesome name={iconName} size={80} color="#fff"></FontAwesome>
        </TouchableOpacity>
    );
}

Button.prototype = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default Button;