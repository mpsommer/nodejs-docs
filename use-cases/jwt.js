'use strict';
const fs = require('fs-extra');
const crypto = require('crypto');
const util = require('util');

// https://jwt.io/
// https://github.com/auth0/node-jsonwebtoken
// https://github.com/brianloveswords/node-jws
// https://github.com/brianloveswords/node-jwa
// Regarding generating key pairs in Nodejs, it looks like it is close to being 
// part of the crypto module (https://github.com/nodejs/node/pull/22660).

// Creating keys:
// ssh-keygen -t rsa -b 2048 -f node_key.pem
// chmod 600 node_key.pem
// ssh-keygen -f node_key.pem.pub -m 'PEM' -e > node_key.pub.pem
// chmod 600 node_key.pub.pem

let yearFromNow = new Date().setFullYear(new Date().getFullYear() + 1)

// Optional: 'secret': 'password',
let payload = {
  'issuer': 'mycompany.com',
  'kid': 'mycompany.com-001',
  'audience': 'someproduct',
  'exp': yearFromNow,
  'subject': 'some.user'
}

let privateKeyPath = 'path to pem'
let publicKeyPath = 'path to pub.pem'
const privateKey = fs.readFileSync(privateKeyPath);
const publicKey = fs.readFileSync(publicKeyPath);

let header = {
  'alg': 'RS256',
  'typ': 'jwt',
  'kid': 'somecompany'
}

function JWT() {
  return {
    sign: sign,
    verify: verify,
  }
}


/**
 * 
 * @param {string} jwt 
 * @param {string} publicKey 
 */
function verify(jwt, publicKey) {
  if (!bufferOrString(publicKey)) {
    throw new TypeError('key must be a string or a buffer');
  }
  let signature = getJWTSignature(jwt);
  // First and second part of JWT string
	let headerAndPayload = getHeaderAndPayload(jwt);
	// Ensures headerAndPayload is a string.
  headerAndPayload = serializeInput(headerAndPayload);
  // signature = toBase64(signature);
  var verifier = crypto.createVerify('RSA-SHA256');
  verifier.update(headerAndPayload);
  return verifier.verify(publicKey, signature, 'base64');
}

function sign(payload, privateKey) {
  if (!bufferOrString(privateKey) && !(typeof privateKey === 'object'))
    throw new TypeError('key must be a string, a buffer or an object');
  payload = serializeInput(payload);
  var signer = crypto.createSign('RSA-SHA256');
  var securedInput = jwsSecuredInput(header, payload, 'utf8');
  var signature = (signer.update(securedInput), signer.sign(privateKey, 'base64'));
  return util.format('%s.%s', securedInput, signature);
}

function jwsSecuredInput(header, payload, encoding) {
  encoding = encoding || 'utf8';
  var encodedHeader = base64url(toBuffer(header));
  var encodedPayload = base64url(toBuffer(payload));
  return util.format('%s.%s', encodedHeader, encodedPayload);
}


function toBuffer(val, encoding) {
  if (Buffer.isBuffer(val)) {
    return val;
  }
  if (typeof val === 'string') {
    return Buffer.from(val, encoding || 'utf8');
  }
  if (typeof val === 'number') {
    // This won't work for very large or very small numbers, but is consistent
    // with previous behaviour at least
    val = val.toString();
    return Buffer.from(val, 'utf8');
  }
  return Buffer.from(JSON.stringify(val), 'utf8');
};

function base64url(buf) {
  return buf
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}


function serializeInput(thing) {
  if (!bufferOrString(thing)) {
		thing = JSON.stringify(thing);
  }
  return thing;
}

function bufferOrString(obj) {
  return Buffer.isBuffer(obj) || typeof obj === 'string';
}

function getJWTSignature(jwsSig) {
  return jwsSig.split('.')[2];
}

function getHeaderAndPayload(jwsSig) {
  return jwsSig.split('.', 2).join('.');
}


let jwtTool = JWT();
let jwt = jwtTool.sign(payload, privateKey);
// console.log(`jwt: ${jwt}`);

let ver = jwtTool.verify(jwt, publicKey);




// console.log(ver);
// console.log();

// // console.log(publicKey.toString('utf8'));
// console.log(`header: ${header}`);
// console.log(`toBuffer(header): ${toBuffer(header)}`);
// console.log(`base64url(toBuffer(header)): ${base64url(toBuffer(header))}`);
// console.log(`JSON.stringify(header): ${JSON.stringify(header)}`);
// console.log(`JSON.stringify(header): ${header.toString()}`);