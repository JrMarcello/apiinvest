/* eslint no-param-reassign:0, no-useless-escape:0 */
/**
 * Module dependencies.
 */
import * as _ from 'lodash'
import glob from 'glob'

/**
 * Get files by glob patterns
 * @param {String|Object} globPatterns - globPatterns
 * @param {String|Object} excludes - excludes
 * @returns {String|Object} Returns the path
 */
const getGlobbedPaths = (globPatterns, excludes) => {
  // URL paths regex
  const urlRegex = new RegExp('^(?:[a-z]+:)?//', 'i')

  // The output array
  let output = []

  // If glob pattern is array so we use each pattern in a recursive way, otherwise we use glob
  if (_.isArray(globPatterns)) {
    globPatterns.forEach(globPattern => {
      output = _.union(output, getGlobbedPaths(globPattern, excludes))
    })
  } else if (_.isString(globPatterns)) {
    if (urlRegex.test(globPatterns)) {
      output.push(globPatterns)
    } else {
      let files = glob.sync(globPatterns)
      if (excludes) {
        files = files.map(file => {
          if (_.isArray(excludes)) {
            Object.keys(excludes).forEach(key => {
              if (key) {
                file = file.replace(excludes[key], '')
              }
            })
          } else {
            file = file.replace(excludes, '')
          }
          return file
        })
      }
      output = _.union(output, files)
    }
  }

  return output
}

module.exports.getGlobbedPaths = getGlobbedPaths
