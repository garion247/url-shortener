const { shorten, resolve, isValidUrl } = require('./urlShortener');

// Test URL validation
console.log('=== URL Validation Tests ===');
console.log('Valid HTTPS:', isValidUrl('https://example.com') ? 'PASS' : 'FAIL');
console.log('Valid HTTP:', isValidUrl('http://example.com') ? 'PASS' : 'FAIL');
console.log('Invalid (no protocol):', !isValidUrl('example.com') ? 'PASS' : 'FAIL');
console.log('Invalid (ftp):', !isValidUrl('ftp://example.com') ? 'PASS' : 'FAIL');
console.log('Invalid (empty):', !isValidUrl('') ? 'PASS' : 'FAIL');
console.log('Invalid (random text):', !isValidUrl('not a url') ? 'PASS' : 'FAIL');

// Test shortening
console.log('');
console.log('=== Shortening Tests ===');
const result = shorten('https://github.com');
console.log('Valid URL shortens:', result.id ? 'PASS' : 'FAIL');
console.log('Returns short URL:', result.shortUrl ? 'PASS' : 'FAIL');

const invalid = shorten('not-a-url');
console.log('Invalid URL returns error:', invalid.error ? 'PASS' : 'FAIL');

// Test resolving
console.log('');
console.log('=== Resolve Tests ===');
const resolved = resolve(result.id);
console.log('Resolves correctly:', resolved === 'https://github.com' ? 'PASS' : 'FAIL');
console.log('Unknown ID returns null:', resolve('xyz123') === null ? 'PASS' : 'FAIL');
