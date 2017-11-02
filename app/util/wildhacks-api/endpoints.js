const apiUrl = (() => {
    if (__DEV__) {
        return 'http://10.105.171.39:8080'
    }
    return 'http://wildhacks.org/api';
})();

// To be used to get a user's details with GET and `id` query param
function userEndpointForUserWithEmail(userEmail) {
    const userEndpoint = `${apiUrl}/admin/user`;
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
    userEndpointForUserWithEmail,
    eventsEndpoint,
    eventEndpointForEventWithId,
    checkUserInEndpoint
};
