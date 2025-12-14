import type { DisplayDataArrayType, GenerationMixType } from '../EnergyPieChart.types';

const generateDisplayDataForGenerationMix = (
	generationMix: GenerationMixType
): DisplayDataArrayType => {
	const { biomass, coal, imports, gas, nuclear, other, hydro, solar, wind } =
		generationMix;

	return [
		{ value: biomass, label: 'Biomass', color: '#00a779' },
		{ value: coal, label: 'Coal', color: '#424242' },
		{ value: imports, label: 'Imports', color: '#ff2f92' },
		{ value: gas, label: 'Gas', color: '#ab56ff' },
		{ value: nuclear, label: 'Nuclear', color: '#ffd441' },
		{ value: other, label: 'Other', color: '#a9a9a9' },
		{ value: hydro, label: 'Hydro', color: '#00d4fb' },
		{ value: solar, label: 'Solar', color: '#ffa900' },
		{ value: wind, label: 'Wind', color: '#4180ff' },
	];
};

export default generateDisplayDataForGenerationMix;
