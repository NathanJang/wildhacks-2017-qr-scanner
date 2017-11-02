// @flow
import endpoints from './endpoints';

const GATEKEY = 'fuckoff'

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

async function getUserDetails({ userEmail }) {
    const userEndpoint = endpoints.userEndpointForUserWithEmail(userEmail);
    const response = await fetch(userEndpoint, {
        headers: {
            'x-access-gatekey': GATEKEY
        }
    });
    const result = await response.json()
    return result.user;
}

async function getEvents() {
    const response = await fetch(endpoints.eventsEndpoint, {
        headers: {
            'x-access-gatekey': GATEKEY
        }
    });
    const result = await response.json()
    return result.events;
}

async function checkUserIn({ userId, eventId, adminToken }) {
    const response = await fetch(endpoints.checkUserInEndpoint, {
        method: 'POST',
        body: JSON.stringify({
            'event_id': eventId,
            'user_id': userId
        }),
        headers: {
            'x-access-gatekey': GATEKEY,
            'Content-Type': 'application/json'
        }
    });
    const result = await response.json()
    return result
}

export default {
    ping,
    signAdminIn,
    getUserDetails,
    getEvents,
    checkUserIn
};
