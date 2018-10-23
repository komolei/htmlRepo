module.exports = {
    "plugins": {
        // 'autoprefixer': {
        //     cascade: false,
        //     add: true,
        //     remove: false,
        //     supports: true,
        //     flexbox: true,
        //     grid: false,
        //     // stats: {
        //     //     "ie": {
        //     //         "6": 0.01,
        //     //         "7": 0.4,
        //     //         "8": 1.5
        //     //     },
        //     //     "chrome": {
        //     //     },
        //     // },
        //     browsers: ['last 0 version'],
        // },
        // "postcss-import": {},
        "postcss-preset-env": {
            stage: 3,
            features: ['css-nesting'],
            browsers: ['last 2 versions', '> 5%'],
        },
        // "postcss-url": {},
        "postcss-aspect-ratio-mini": {},
        "postcss-write-svg": {
            utf8: false
        },
        // "postcss-cssnext": {},
        "postcss-px-to-viewport": {
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore', '.hairlines'],
            minPixelValue: 1,
            mediaQuery: false,
            exclude: /(\/|\\)(node_modules)(\/|\\)/
        },
        "postcss-viewport-units": {},
        "cssnano": {
            preset: "advanced",
            autoprefixer: false,
            "postcss-zindex": false
        }
    }
}