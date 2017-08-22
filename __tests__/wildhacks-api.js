// @flow

import api from '../app/util/wildhacks-api';

// MAKE SURE THERE ARE AT LEAST 2 TEST USERS IN THE DB, ONE OF WHICH IS AN ADMIN, WITH THESE CREDENTIALS
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

it('signs user in', async () => {
    expect.assertions(4);
    let result = null;
    await expect((async () => result = await api.signAdminIn({
        email: userEmail,
        password
    }))()).resolves.toBeDefined();
    const user = result.user;
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

it('gets events', async () => {
    expect.assertions(4);
    expect(adminToken).not.toBeNull();
    expect(typeof adminToken).toBe('string');
    let events = null;
    await expect((async () => events = await api.getEvents({
        adminToken
    }))()).resolves.toBeDefined();
    expect(events instanceof Array).toBe(true);
});
