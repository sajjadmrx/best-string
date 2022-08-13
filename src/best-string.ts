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

    build(): string {
        return this.string
    }
}

