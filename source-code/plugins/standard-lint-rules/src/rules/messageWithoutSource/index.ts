// TODO: remove ignore comment
// @ts-ignore
import type { InlangModule } from "@inlang/module"
import { messageWithoutSourceRule } from "./messageWithoutSource.js"

export default {
	lintRules: [messageWithoutSourceRule],
} satisfies InlangModule
