'use strict';
const fs = require('fs-extra');
const crypto = require('crypto');
// jwt = require('jsonwebtoken');

// https://github.com/brianloveswords/node-jws/blob/master/lib/sign-stream.js
// https://github.com/brianloveswords/node-jwa/blob/master/index.js
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
let privateKeyPath = 'path'
let publicKeyPath = 'path'
const privateKey = fs.readFileSync(privateKeyPath);
const publicKey = fs.readFileSync(publicKeyPath);

let header = {
	'alg': 'RS256',
	'typ': 'jwt',
	'kid': 'somecompany' 
}

function JWT() {
	// let header = header;
	// let payload = payload;
	// let secretKey = privateKey;
	// let encoding = 'utf8';
	// let algo = header.alg;
	return {
    sign: sign,
    verify: verify,
  }
}

function verify(payload, signature, publicKey) {
	if (!bufferOrString(publicKey))
		throw typeError('key must be a string or a buffer');
	payload = normalizeInput(payload);
	signature = toBase64(signature);
	var verifier = crypto.createVerify('RSA-SHA' + 256);
	verifier.update(payload);
	return verifier.verify(publicKey, signature, 'base64');
}

function sign(payload, privateKey) {
	if (!bufferOrString(privateKey) && !(typeof privateKey === 'object'))
		throw typeError('key must be a string, a buffer or an object');
	payload = normalizeInput(payload);
	var signer = crypto.createSign('SHA256');
	var sig = (signer.update(payload), signer.sign(privateKey, 'base64'));
	return fromBase64(sig);
}

function fromBase64(base64) {
  return base64
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function toBase64(base64url) {
  base64url = base64url.toString();

  var padding = 4 - base64url.length % 4;
  if (padding !== 4) {
    for (var i = 0; i < padding; ++i) {
      base64url += '=';
    }
  }

  return base64url
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
}

 function normalizeInput(thing) {
  if (!bufferOrString(thing))
    thing = JSON.stringify(thing);
  return thing;
}
 function bufferOrString(obj) {
  return Buffer.isBuffer(obj) || typeof obj === 'string';
}


let jwt = JWT();
let signature = jwt.sign(payload, privateKey);
let ver = jwt.verify(payload, signature, publicKey);



console.log(signature);
console.log();
console.log(ver);
