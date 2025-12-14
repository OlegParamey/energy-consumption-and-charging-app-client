import type { DayKeyType } from '../EnergyPieChart.types';

const getTextByDayKey = (dayKey: DayKeyType) => {
	switch (dayKey) {
		case 'today':
			return 'Today';
		case 'tomorrow':
			return 'Tomorrow';
		case 'day-after-tomorrow':
			return 'The Day After Tomorrow';
	}
};

export default getTextByDayKey;
