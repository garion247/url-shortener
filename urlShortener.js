// URL Shortener Service

const urlDatabase = {};

/**
 * Validates whether a string is a valid HTTP or HTTPS URL.
 * @param {string} url - The URL string to validate
 * @returns {boolean} True if the URL is valid HTTP/HTTPS
 */
function isValidUrl(url) {
    try {
        const parsed = new URL(url);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
        return false;
    }
}

/**
 * Shortens a valid URL and stores it in the database.
 * @param {string} originalUrl - The URL to shorten
 * @returns {Object} Object with id and shortUrl, or error message
 */
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

/**
 * Resolves a short ID back to the original URL.
 * @param {string} shortId - The short URL identifier
 * @returns {string|null} The original URL, or null if not found
 */
function resolve(shortId) {
    const entry = urlDatabase[shortId];
    return entry ? entry.url : null;
}

module.exports = { shorten, resolve, isValidUrl };
