export declare class BestString {
    private string;
    constructor(string: string);
    noScriptTag(): this;
    replaceGlobal(to: string, text: string): this;
    noRtlCharacters(): this;
    build(): string;
}
