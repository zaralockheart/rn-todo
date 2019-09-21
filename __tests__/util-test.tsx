import React from "react"
import {isNotEmpty} from "../src/util/string_util"

it('if empty return string', () => {
	expect(isNotEmpty("")).toBe('Required')
})

it('if not empty return undefined', () => {
	expect(isNotEmpty("hoho")).toBe(undefined)
})
