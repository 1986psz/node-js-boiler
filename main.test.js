import { main } from './main';

describe('test main', () => {
    
    it('should return number incremented by 1', () => {
		const sampleNumber = 12;
        expect(main(sampleNumber)).toBe(13);
    });

});

