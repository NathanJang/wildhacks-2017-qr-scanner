import {Navigation} from 'react-native-navigation';
import registerScreens from './screens';

registerScreens()

Navigation.startSingleScreenApp({
    screen: {
        screen: 'Events',
        title: 'Wild Check-Ins 2017'
    }
})
