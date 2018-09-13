const crypto = require('crypto');
const assert = require('assert');

const alice = crypto.createDiffieHellman(2048);
const alicePubKey = alice.generateKeys();

const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
// Returns public key in the specified encoding
const bobPubKey = bob.generateKeys();
// Gets the private key
const bobPrivateKey = bob.getPrivateKey('hex');
const bobPub = bob.getPublicKey('hex');
assert.strictEqual(bobPub, bobPubKey.toString('hex'))


// Exchange and generate the shared secret...
// Returns a shared secret.
const sharedSecretAlice = alice.computeSecret(bobPubKey);
const sharedSecretBob = bob.computeSecret(alicePubKey);

assert.strictEqual(sharedSecretAlice.toString('hex'),
	sharedSecretBob.toString('hex'));