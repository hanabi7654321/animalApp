'use strict';
const $ = require('jquery');
const global = Function('return this;')();
global.jQuery = $;
const bootstrap = require('bootstrap');
const resultAnimal = $('#result-animal');

resultAnimal.on('click', () => {
  block.animate({ opacity: '0.5'}, 2000);
})




