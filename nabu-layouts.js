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
  console.log("LAYTOUSTS");

  // var layouts = nabu.utils.findFilesInFolder(nabu.files, contentFolder);

  // // Update file list
  // nabu.files = nabu.utils.removePaths(nabu.files, layouts);

  // var layoutsObject = {};
  // layouts.forEach(function(layout) {
  //   layoutsObject[path.basename(layout.split('.')[1])] = layout;
  // });
  nabu.site.layouts = {};
  
  next(null, nabu);
};