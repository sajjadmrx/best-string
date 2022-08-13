import BestString from "../src";

describe('replaceGlobal()', function () {
    it('should return text', () => {
        const text: string = 'Hello'
        const finallyText: string = new BestString(text).replaceGlobal('{username}', 'mr x').build();
        expect(finallyText).toBe(text)
    })

    it('should jack be replaced by username globally', () => {
        const text: string = 'hello {username},ABVASmohrmwioioesfk oef {username}';
        const finallyText: string = new BestString(text).replaceGlobal('{username}', 'jack').build()
        expect(finallyText).toBe('hello jack,ABVASmohrmwioioesfk oef jack')
    })

    it('should work with replace multiple', () => {
        const text: string = 'blue,red,green';
        const finallyText: string = new BestString(text)
            .replaceGlobal('blue', 'red')
            .replaceGlobal('green', 'red')
            .build();
        expect(finallyText).toBe('red,red,red')
    })
});