/**
 * MediaSource helper
 */

export function getMediaSource() {
    if (typeof window !== 'undefined') {
        return window.MediaSource || window.WebKitMediaSource;
    }
}



// WEBPACK FOOTER //
// ./src/utils/mediasource-helper.js