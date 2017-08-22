// @flow
import endpoints from './endpoints';
import request from 'request-promise';

function headerForToken(token) {
    return `Bearer ${token}`;
}

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
    const result = await request({
        uri: userEndpoint,
        json: true,
        headers: {
            'X-Access-Token': headerForToken(adminToken)
        }
    });
    return result.user;
}

async function getEvents({ adminToken }) {
    const result = await request({
        uri: endpoints.eventsEndpoint,
        json: true,
        headers: {
            'X-Access-Token': headerForToken(adminToken)
        }
    });
    return result.events;
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
            'X-Access-Token': headerForToken(adminToken)
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
