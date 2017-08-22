// @flow

import api from '../app/util/wildhacks-api';

// MAKE SURE THERE ARE AT LEAST 2 TEST USERS IN THE DB, ONE OF WHICH IS AN ADMIN, WITH THESE CREDENTIALS.
// ALSO THERE SHOULD BE AT LEAST 1 EVENT TO TEST THE CHECK IN FUNCTION.
// RUN MYSQL AND THE BACKEND SERVER BEFORE RUNNING THIS TEST SUITE.
// SIDE EFFECTS: THIS TEST SUITE WILL CHECK WILLIE IN TO ALL EVENTS AS A TEST.
const userEmail = 'willie@northwestern.edu';
const adminEmail = 'steve@me.com';
const password = 'hunter2'; // same

it('pings', async () => {
    expect.assertions(2);
    let result = null;
    await expect((async () => result = await api.ping())()).resolves.toBeDefined();
    expect(result).toEqual({ pong: true });
});

let adminToken = null;

let user = null;

it('signs user in', async () => {
    expect.assertions(4);
    let result = null;
    await expect((async () => result = await api.signAdminIn({
        email: userEmail,
        password
    }))()).resolves.toBeDefined();
    user = result.user;
    expect(user.email).toBe(userEmail);
    expect(user.password).toBeDefined();
    expect(user.token.value).toBeDefined();
});

it('signs admin in', async () => {
    expect.assertions(5);
    let result = null;
    await expect((async () => result = await api.signAdminIn({
        email: adminEmail,
        password
    }))()).resolves.toBeDefined();
    const user = result.user;
    expect(user.email).toBe(adminEmail);
    expect(user.privilege).toBe('admin');
    expect(user.password).toBeDefined();
    expect(user.token.value).toBeDefined();
    adminToken = user.token.value;
});

it('gets user details', async () => {
    expect.assertions(4);
    expect(adminToken).not.toBeNull();
    expect(typeof adminToken).toBe('string');
    let user = null;
    await expect((async () => user = await api.getUserDetails({
        userEmail,
        adminToken
    }))()).resolves.toBeDefined();
    expect(user.email).toBe(userEmail);

});

let events = null;

it('gets events', async () => {
    expect.assertions(4);
    expect(adminToken).not.toBeNull();
    expect(typeof adminToken).toBe('string');
    await expect((async () => events = await api.getEvents({
        adminToken
    }))()).resolves.toBeDefined();
    expect(events instanceof Array).toBe(true);
});

it('checks user in', async () => {
    expect(adminToken).not.toBeNull();
    expect(typeof adminToken).toBe('string');
    expect(user).not.toBeNull();
    expect(typeof user.id).toBe('number');
    expect(events instanceof Array).toBe(true);

    expect.assertions(events.length * 3 + 5); // total assertions in this test case
    async function expectCheckInToResolve(event) {
        let result = null;
        await expect((async () => result = await api.checkUserIn({
            userId: user.id,
            eventId: event.id,
            adminToken
        }))()).resolves.toBeDefined();
        // maybe we're already checked in, but if the request was successful, there are 2 response fields
        expect(result.success).toBeDefined();
        expect(result.message).toBeDefined();
    }
    for (const event of events) {
        await expectCheckInToResolve(event);
    }
});
