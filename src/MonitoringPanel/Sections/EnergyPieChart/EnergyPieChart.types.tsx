export type EnergySourceType =
	| 'biomass'
	| 'coal'
	| 'imports'
	| 'gas'
	| 'nuclear'
	| 'other'
	| 'hydro'
	| 'solar'
	| 'wind';

export type DayKeyType = 'today' | 'tomorrow' | 'day-after-tomorrow';

type CleanEnergyPercentType = number;

export type GenerationMixType = Record<EnergySourceType, number>;

type EnergyMixObjectType = {
	dayKey: DayKeyType;
	cleanEnergyPercent: CleanEnergyPercentType;
	generationMix: GenerationMixType;
};

type DisplayDataType = {
	value: number;
	label: Capitalize<EnergySourceType>;
	color: `#${string}`;
};

export type DisplayDataArrayType = DisplayDataType[];

export type EnergyMixResponseArrayType = EnergyMixObjectType[];

export type EnergyPieChartContainerProps = EnergyMixObjectType;

export interface EnergyPieChartProps {
	displayData: DisplayDataArrayType;
}

export type EnergyLabelProps = DisplayDataType;
