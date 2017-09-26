// @flow

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        flexDirection: 'column', // main axis
        justifyContent: 'center', // main axis
        alignItems: 'center', // cross axis
        backgroundColor: '#171938',
    },
    row: {
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: '#ED8580',
        borderColor: '#ED8580',
        flexDirection: 'column',  // main axis
        justifyContent: 'space-around', // main axis
        alignItems: 'center', // cross axis
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 18,
        paddingRight: 16,
        width: 300,
    },
    activity_rows: {
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: '#ED8580',
        borderColor: '#ED8580',
        flexDirection: 'column',  // main axis
        justifyContent: 'space-around', // main axis
        alignItems: 'center', // cross axis
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 18,
        paddingRight: 16,
        width: 300,
        marginTop: 80,
    },
    space: {
        backgroundColor: '#ED8580',
        height: 75,
    },
    item: {
        color: '#FFF',
        includeFontPadding: false,
        fontSize: 30,
        padding: 10,
        height: 44,
        marginBottom: 10,
        fontFamily: 'Menlo',
    },
});
