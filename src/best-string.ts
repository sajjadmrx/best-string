export class BestString {
    constructor(private string: string) {
    }

    noScriptTag(): this {
        this.string = this.string.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").trim()
        return this
    }

    build(): string {
        return this.string
    }
}

