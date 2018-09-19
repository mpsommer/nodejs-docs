'use strict';

jwt = require('jsonwebtoken');

// https://github.com/hokaccha/node-jwt-simple/blob/master/lib/jwt.js
// https://github.com/hokaccha/node-jwt-simple
// https://jwt.io/introduction/
// Regarding generating key pairs in Nodejs, it looks like it is close to being 
// part of the crypto module (https://github.com/nodejs/node/pull/22660).
// But for now will have to create own: 
// ssh-keygen -t rsa -b 2048 -f somecompany.com-001.pem

let yearFromNow = new Date().setFullYear(new Date().getFullYear() + 1)

// Optional:  'secret': 'password',
let payload = {
	'issuer': 'mycompany.com',
	'kid': 'mycompany.com-001',
	'audience': 'someproduct',
	'exp': yearFromNow,
	'subject': 'some.user'
}
const cert = fs.readFileSync(keyPath);

function createAccessToken(payload, keyPath) {
	// TODO: Make the sign() native.
  return jwt.sign(payload, cert, {
    algorithm: 'RS256',
    header: { kid: 'somecompany' }
  });
}
