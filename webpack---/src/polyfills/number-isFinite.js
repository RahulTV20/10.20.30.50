export const isFiniteNumber = Number.isFinite || function(value) {
    return typeof value === 'number' && isFinite(value);
};



// WEBPACK FOOTER //
// ./src/polyfills/number-isFinite.js