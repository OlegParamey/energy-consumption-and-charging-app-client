import getTextByDayKey from './getTextByDayKey';

test('Returns a day tezt based on dayKey', () => {
	expect(getTextByDayKey('today')).toEqual('Today');
	expect(getTextByDayKey('tomorrow')).toEqual('Tomorrow');
	expect(getTextByDayKey('day-after-tomorrow')).toEqual('The Day After Tomorrow');
});
