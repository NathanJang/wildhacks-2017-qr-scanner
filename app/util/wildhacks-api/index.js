// @flow
import endpoints from './endpoints';
import request from 'request-promise';

async function ping() {
    return await request({
        uri: endpoints.pingEndpoint,
        json: true
    });
}

async function signAdminIn({ email, password }) {
    return await request({
        method: 'POST',
        uri: endpoints.loginEndpoint,
        body: { email, password },
        json: true
    });
}

async function getUserDetails({ userEmail, adminToken }) {
    const userEndpoint = endpoints.userEndpointForUserWithEmail(userEmail);
    return await request({
        uri: userEndpoint,
        json: true,
        headers: {
            'X-Access-Token': adminToken
        }
    });
}

async function getEvents({ adminToken }) {
    return await request({
        uri: endpoints.eventsEndpoint,
        json: true,
        headers: {
            'X-Access-Token': adminToken
        }
    });
}

async function checkUserIn({ userId, eventId, adminToken }) {
    return await request({
        uri: endpoints.checkUserInEndpoint,
        method: 'POST',
        json: true,
        body: {
            'event_id': eventId,
            'user_id': userId
        },
        headers: {
            'X-Access-Token': adminToken
        }
    });
}

export default {
    ping,
    signAdminIn,
    getUserDetails,
    getEvents,
    checkUserIn
};
