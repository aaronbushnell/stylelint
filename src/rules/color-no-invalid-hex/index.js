import {
  ruleMessages,
  valueIndexOf
} from "../../utils"

export const ruleName = "color-no-invalid-hex"

export const messages = ruleMessages(ruleName, {
  rejected: c => `Invalid hex color "${c}"`,
})

export default function () {
  return function (css, result) {
    css.eachDecl(function (decl) {
      const value = decl.value

      valueIndexOf({ value, char: "#" }, hashIndex => {
        const hexValue = /^#[0-9A-Za-z]+/.exec(value.substr(hashIndex))[0]

        if (!/^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(hexValue)) {
          result.warn(messages.rejected(hexValue), { node: decl })
        }
      })
    })
  }
}