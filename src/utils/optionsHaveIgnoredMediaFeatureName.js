import matchesStringOrRegExp from "./matchesStringOrRegExp"

/**
 * Check if an options object contains a user-defined string or regex that
 * matches the passed in Node.
 *
 * @param {object} options
 * @param {Node} postcss node
 * @return {boolean} If `true`, a match was found
 */
export default function optionsHaveIgnoredAtRule(options, mediaFeatureNode) {
  return !!(
    options &&
    options.ignoreMediaFeatureNames &&
    matchesStringOrRegExp(mediaFeatureNode.value.toLowerCase(), options.ignoreMediaFeatureNames)
  )
}
