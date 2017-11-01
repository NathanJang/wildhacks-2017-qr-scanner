import { Navigation } from 'react-native-navigation';

import ActivityView from './components/ActivityView';
import Scanner from './components/Scanner';

// register all screens of the app (including internal ones)
export default function registerScreens() {
    Navigation.registerComponent('ActivityView', () => ActivityView);
    Navigation.registerComponent('Scanner', () => Scanner);
}
