// @flow

const apiUrl = 'http://wildhacks.org/api';

// To be used to sign an admin in with POST
// Expects an email and password in request body
const loginEndpoint = `${apiUrl}/auth/login`;

// To be used to get a user's details with GET and `id` query param
const userEndpoint = `${apiUrl}/user`;
function userEndpointForUserWithId(userId) {
    const encodedUserId = encodeURIComponent(userId);
    return `${userEndpoint}?id=${encodedUserId}`;
}

// TODO
const eventsEndpoint = `${apiUrl}/events`;

// TODO
const checkUserInEndpoint = `${apiUrl}/admin/check-user-in`;

export default {
    loginEndpoint,
    userEndpointForUserWithId,
    eventsEndpoint,
    checkUserInEndpoint
};
