Looking at https://github.com/brandonfujii/wildhacks-2017-backend/blob/master/src/app/README.md, it looks like only admins are ever gonna use this app.
So, I'm guessing the workflow of this app might look like this:

Setup:
1. **POST** `/auth/login` with the previously-registered admin credentials
2. Save an admin token or something from that request. Assuming every admin each has his or her own device, signing in will be a one-time thing.

Checking people in day-of:
1. Scan the attendee's QR code to get his or her email or id (exact QR format TBD)
2. **GET** `/user` with the email or id.
3. Admin verifies user details
4. Admin confirms the check-in by pressing a button in the app
5. **POST** something like `/admin/check-user-in` => `success?`
  - Request body includes user's email or id
  - Response gives back whether the check-in was successful

All of those requests should include the admin token.
