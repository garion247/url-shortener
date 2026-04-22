// Click Tracking Module

const clickData = {};

/**
 * Records a click for a short URL.
 * @param {string} shortId - The short URL identifier
 */
function recordClick(shortId) {
    if (!clickData[shortId]) {
        clickData[shortId] = { clicks: 0, lastAccessed: null };
    }
    clickData[shortId].clicks++;
    clickData[shortId].lastAccessed = new Date().toISOString();
}

/**
 * Gets click statistics for a short URL.
 * @param {string} shortId - The short URL identifier
 * @returns {Object|null} Click stats or null if no data
 */
function getStats(shortId) {
    return clickData[shortId] || null;
}

module.exports = { recordClick, getStats };
