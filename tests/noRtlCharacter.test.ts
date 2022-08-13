import BestString from "../src";

describe('noRtlCharacter()', function () {
    it('should return trim text', () => {
        const text: string = 'Hello '
        const finallyText: string = new BestString(text).noRtlCharacters().build();
        expect(finallyText).toBe(text.trim())
    })

    it('should return text without rtl Characters', () => {
        const text: string = 'hello,سلام چطوری؟';
        const finallyText: string = new BestString(text).noRtlCharacters().build()
        expect(finallyText).toBe('hello,')
    })
    it('should to be eng', () => {
        const persian: string = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ';
        const eng: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        const fullText: string = persian + eng
        const finallyText: string = new BestString(fullText).noRtlCharacters().build();
        expect(finallyText).toBe(eng)
    })
});