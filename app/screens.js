import { Navigation } from 'react-native-navigation';

import Events from './components/Events';
import Scanner from './components/Scanner';

// register all screens of the app (including internal ones)
export default function registerScreens() {
    Navigation.registerComponent('Events', () => Events);
    Navigation.registerComponent('Scanner', () => Scanner);
}
