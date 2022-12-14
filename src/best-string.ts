export class BestString {
    constructor(private string: string) {
    }

    noScriptTag(): this {
        this.string = this.string.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").trim()
        return this
    }

    replaceGlobal(to: string, text: string): this {
        const reg: RegExp = new RegExp(to, 'gi')
        this.string = this.string.replace(reg, text)
        return this
    }

    noRtlCharacters(): this {

        // copied from:
        // https://github.com/ImanMh/persianRex/blob/63a619db167269327d7b27b805dbf1e2842e1aa0/src/main.js#L36 ❤️
        var rtlCharRegex: RegExp = new RegExp(['[\u06A9\u06AF\u06C0\u06CC\u060C',
            '\u062A\u062B\u062C\u062D\u062E\u062F',
            '\u063A\u064A\u064B\u064C\u064D\u064E',
            '\u064F\u067E\u0670\u0686\u0698\u200C',
            '\u0621-\u0629\u0630-\u0639\u0641-\u0654]'].join(''), 'g')

        const rtlPunctuations = new RegExp('(،|؟|«|»|؛|٬)', 'g')

        this.string = this.string.replace(rtlCharRegex, '').trim()
        this.string = this.string.replace(rtlPunctuations, '').trim()

        return this
    }


    build(): string {
        return this.string
    }
}

function combineRegExps() {
    var combined = '(';
    for (var i = 0; i < arguments.length; i++) {
        combined += '(';
        if (i != arguments.length - 1)
            combined += arguments[i] + ')|';
        else
            combined += arguments[i] + ')';
    }
    return combined + ')';
}
