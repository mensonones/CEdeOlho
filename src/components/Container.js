import React from 'react';
import { SafeAreaView, Platform } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Gradient = (props) => {
    const defaultProps = Object.assign({
        colors: ['#a1c1da', '#f2f5fb'],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 }
    }, props, { children: undefined, isIos: undefined });

    const _style = {
        ...props.style,
        paddingTop: props.isIos ? 0 : getStatusBarHeight(true)
    };

    return <LinearGradient {...defaultProps} style={_style}>{props.children}</LinearGradient>
}

const Container = ({ variant, children }) => {
    const isIos = Platform.OS === 'ios';
    const Wrapper = isIos ? SafeAreaView : React.Fragment;

    const _style = {
        flex: 1,
        flexDirection: variant
    }

    return <Wrapper style={{flex: 1}}>
        <Gradient isIos={isIos} style={_style}>{children}</Gradient>
    </Wrapper>
};

export default Container;