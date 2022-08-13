import {BestString} from "../src/best-string";

describe('noScriptTag()', function () {

    it('should return empty string when only script tags', () => {
        const text: string = '<script>alert("Hacked by X")</script>'
        const finallyText: string = new BestString(text).noScriptTag().build()
        expect(finallyText).toBeFalsy()
    })

    it('should return only hello', () => {
        const text: string = 'hello <script>alert("Hacked by X")</script>'
        const finallyText: string = new BestString(text).noScriptTag().build()
        expect(finallyText).toBe('hello')
    })


    it('should return html tags', () => {
        const text: string = 'hello <h1>Cj</h1>'
        const finallyText: string = new BestString(text).noScriptTag().build()
        expect(finallyText).toBe(text)
    })


});