'use strict';
/*
 * nabu-layouts
 * https://github.com/mattmcmanus/nabu-cli
 *
 * Copyright (c) 2013 Matt McManus
 * Licensed under the MIT license.
 */

// Modules
var path = require('path');

// Vars
var contentFolder = '_layouts';

exports.process = function(nabu, next) {
  // Find all of the paths containing '_layouts'
  var layoutsPaths = nabu.files.findInFolder(nabu._files, contentFolder);

  // Transform the array into an object with appropriate keys
  var layouts = {};
  layoutsPaths.forEach(function(layout) {
    layouts[path.basename(layout.split('.')[1])] = layout;
  });

  nabu.site.layouts = layouts;
  
  next(null, nabu);
};