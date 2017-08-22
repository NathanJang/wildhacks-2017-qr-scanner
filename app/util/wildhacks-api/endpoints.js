// @flow

const apiUrl = (() => {
    if (__DEV__) {
        return 'http://localhost:8080'
    }
    return 'http://wildhacks.org/api';
})();

const pingEndpoint = `${apiUrl}/ping`;

// To be used to sign an admin in with POST
// Expects an email and password in request body
// Request:
// {
//   "email": "willie@northwestern.edu",
//   "password": "hunter2"
// }
// Response:
// {
//    "user": {
//        "id": 1,
//        "email": "willie@northwestern.edu",
//        "password": "$2a$10$JC9xRi4W7ST9lYw2ChdsXOG5k0e3vcYP7dzSH2HsVk1fbsdpvlsL.",
//        "privilege": "user",
//        "type": "student",
//        "tokenId": 1,
//        "applicationId": null,
//        "createdAt": "2017-08-07T03:54:44.000Z",
//        "updatedAt": "2017-08-07T03:54:58.000Z",
//        "teamId": null,
//        "token": {
//            "id": 1,
//            "userId": 1,
//            "value": "eyJhbGciOiJIUz...42QZ8yE",
//            "createdAt": "2017-08-07T03:54:58.000Z",
//            "updatedAt": "2017-08-10T21:03:31.000Z"
//        },
//        "application": null,
//        "events": []
//    }
// }
const loginEndpoint = `${apiUrl}/auth/login`;

// To be used to get a user's details with GET and `id` query param
function userEndpointForUserWithId(userId) {
    const userEndpoint = `${apiUrl}/user`;
    const encodedUserId = encodeURIComponent(userId);
    return `${userEndpoint}?id=${encodedUserId}`;
}

// To be used to get a user's details with GET and `id` query param
function userEndpointForUserWithEmail(userEmail) {
    const userEndpoint = `${apiUrl}/user`;
    const encodedUserEmail = encodeURIComponent(userEmail);
    return `${userEndpoint}?email=${encodedUserEmail}`;
}

// GET all events
const eventsEndpoint = `${apiUrl}/event/all`;
// GET a single event
function eventEndpointForEventWithId(eventId) {
    const encodedEventId = encodeURIComponent(eventId);
    return `${apiUrl}/event?id=${encodedEventId}`
}

// POST as admin
// Request:
// {
//   "event_id": 4,
//   "user_id": 1
// }
// Response:
// {
//   success: true,
//   message: "willie@northwestern.edu checked into Meal #1"
// }
const checkUserInEndpoint = `${apiUrl}/user/check-in`;

export default {
    pingEndpoint,
    loginEndpoint,
    userEndpointForUserWithId,
    userEndpointForUserWithEmail,
    eventsEndpoint,
    eventEndpointForEventWithId,
    checkUserInEndpoint
};
