// @flow
import endpoints from './endpoints';

import env from '../../env'
const GATEKEY = env.GATEKEY

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
    if (result.events instanceof Array) {
        return result.events
    }
    throw new Error('Unexpected server response')
}

async function checkUserIn({ userId, eventId }) {
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
    getUserDetails,
    getEvents,
    checkUserIn
};
