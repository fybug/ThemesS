const autoprefixer = require("autoprefixer");
const atimport = require("postcss-import");
const cssnanao = require("cssnano");
const apply = require('postcss-apply');
const nested = require('postcss-nested');

module.exports = {
    plugins: [
        atimport,
        apply, nested,
        autoprefixer({
            browsers: ['last 2 version']
        }),
        cssnanao
    ]
};
/*
npm install postcss-cli -g

npm init -y

npm install autoprefixer --save-dev
npm install cssnano --save-dev
npm install postcss-import --save-dev
npm install postcss-apply --save-dev
npm install postcss-nested --save-dev
*/