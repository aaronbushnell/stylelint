import {
  messages,
  ruleName,
} from ".."
import rules from "../../../rules"
import { testRule } from "../../../testUtils"

const rule = rules[ruleName]

testRule(rule, {
  ruleName,
  config: [true],

  accept: [ {
    code: "@media all and (monochrome) { }",
  }, {
    code: "@media all and (MONOCHROME) { }",
  }, {
    code: "@media (min-width: 700px) { }",
  }, {
    code: "@media (MIN-WIDTH: 700px) { }",
  }, {
    code: "@media (min-width: 700px) and (orientation: landscape) { }",
  }, {
    code: "@media (MIN-WIDTH: 700px) and (ORIENTATION: landscape) { }",
  }, {
    code: "@media (-webkit-min-device-pixel-ratio: 2) { }",
  }, {
    code: "@media (--viewport-medium) { }",
    description: "ignore css variables",
  } ],

  reject: [ {
    code: "@media screen and (unknown) { }",
    message: messages.rejected("unknown"),
    line: 1,
    column: 20,
  }, {
    code: "@media screen and (UNKNOWN) { }",
    message: messages.rejected("UNKNOWN"),
    line: 1,
    column: 20,
  }, {
    code: "@media screen and (unknown: 2) { }",
    message: messages.rejected("unknown"),
    line: 1,
    column: 20,
  }, {
    code: "@media screen and (UNKNOWN: 2) { }",
    message: messages.rejected("UNKNOWN"),
    line: 1,
    column: 20,
  }, {
    code: "@media (min-width: 700px) and (unknown: landscape) { }",
    message: messages.rejected("unknown"),
    line: 1,
    column: 32,
  }, {
    code: "@media (min-width: 700px) and (UNKNOWN: landscape) { }",
    message: messages.rejected("UNKNOWN"),
    line: 1,
    column: 32,
  } ],
})

testRule(rule, {
  ruleName,
  config: [ true, { ignoreMediaFeatureNames: [ "/^my-/", "custom" ] } ],

  accept: [ {
    code: "@media screen and (my-media-feature-name) { }",
  }, {
    code: "@media screen and (MY-MEDIA-FEATURE-NAME) { }",
  }, {
    code: "@media screen and (custom: 10px) { }",
  }, {
    code: "@media screen and (CUSTOM: 10px) { }",
  } ],

  reject: [ {
    code: "@media screen and (unknown) { }",
    message: messages.rejected("unknown"),
    line: 1,
    column: 20,
  }, {
    code: "@media screen and (UNKNOWN) { }",
    message: messages.rejected("UNKNOWN"),
    line: 1,
    column: 20,
  } ],
})
