import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#242424',
        flex: 1,
        flexDirection: 'column'
    },
    list: {
        flex: 1,
        flexDirection: 'column'
    },
    item: {
        paddingTop: 10
    },
    itemContent: {
        marginLeft: 15,
        paddingRight: 5,
        borderBottomWidth: 1,
        borderColor: '#3f3f3f',
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        flex: 11
    },
    caret: {
        flex: 1,
        opacity: 0.5
    },
    title: {
        color: '#8054ad',
        fontSize: 30,
        marginBottom: 10
    },
    subtitle: {
        color: '#a5a5a5'
    }
});
