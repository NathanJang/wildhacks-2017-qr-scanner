// @flow
import endpoints from './endpoints';
import { Promise } from 'react-native';

function signAdminIn(...credentials) {
    return new Promise((resolve, reject) => {
        const loginEndpoint = endpoints.loginEndpoint;
        // TODO
        const result = {}; // something
        resolve(result);
    });
}

function getUserDetails(userId) {
    return new Promise((resolve, reject) => {
        const userEndpoint = endpoints.userEndpoint;
        // TODO
        const userDetails = {}; // something
        resolve(userDetails);
    });
}

let events = null;

function getEvents(shouldRefresh) {
    return new Promise((resolve, reject) => {
        if (!shouldRefresh && events !== null) { return resolve(events); }

        const eventsEndpoint = endpoints.eventsEndpoint;
        // TODO
        events = []; // something
        resolve(events);
    });
}

function checkUserIn(userId, eventId) {
    return new Promise((resolve, reject) => {
        const checkUserInEndpoint = endpoints.checkUserInEndpoint;
        // TODO
        const result = {}; // something
        resolve(result);
    });
}

export default {
    signAdminIn,
    getUserDetails,
    getEvents
};
