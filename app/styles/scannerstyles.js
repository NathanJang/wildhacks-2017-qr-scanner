import { StyleSheet, Dimensions, } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    },
    scan_container: {
        flex: 1,
        padding: 8,
        flexDirection: 'column', // main axis
        justifyContent: 'center', // main axis
        alignItems: 'center', // cross axis
        backgroundColor: '#ED8580',
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
