// URL Shortener Service
const urlDatabase = {};

function isValidUrl(url) {
    try {
        const parsed = new URL(url);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
        return false;
    }
}

function shorten(originalUrl) {
    if (!isValidUrl(originalUrl)) {
        return { error: 'Invalid URL. Must start with http:// or https://' };
    }
    const id = Math.random().toString(36).substring(2, 8);
    urlDatabase[id] = {
        url: originalUrl,
        createdAt: new Date().toISOString()
    };
    return { id, shortUrl: 'http://short.url/' + id };
}

function resolve(shortId) {
    const entry = urlDatabase[shortId];
    return entry ? entry.url : null;
}

module.exports = { shorten, resolve, isValidUrl };
