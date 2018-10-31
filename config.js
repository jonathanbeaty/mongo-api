'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://test1:test11@ds243963.mlab.com:43963/blog-api' || 'mongodb://localhost/blog-app';
exports.PORT = process.env.PORT || 8080;

console.log(process.env);