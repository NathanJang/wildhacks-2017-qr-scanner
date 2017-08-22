// @flow

import api from '../app/util/wildhacks-api';

const userEmail = 'willie@northwestern.edu';
const adminEmail = 'steve@me.com';

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
        password: 'hunter2'
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
        password: 'hunter2'
    }))()).resolves.toBeDefined();
    const user = result.user;
    expect(user.email).toBe(adminEmail);
    expect(user.privilege).toBe('admin');
    expect(user.password).toBeDefined();
    expect(user.token.value).toBeDefined();
    adminToken = user.token.value;
});

it('gets user details', async () => {
    expect.assertions(2);
    expect(adminToken).not.toBeNull();
    expect(async () => await api.getUserDetails({
        userEmail,
        adminToken
    })).resolves.toBeDefined();
});

it('gets events', async () => {
    expect.assertions(2);
    expect(adminToken).not.toBeNull();
    expect(async () => await api.getEvents({
        adminToken
    })).resolves.toBeDefined();
});
