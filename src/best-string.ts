export class BestString {
    constructor(private string: string) {
    }

    removePersianChar(): this {
        return this
    }

    build(): string {
        return this.string
    }
}

