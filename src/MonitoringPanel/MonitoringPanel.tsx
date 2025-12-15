import EnergyPieChartSection from './Sections/EnergyPieChart/EnergyPieChartSection';
import OptimalChargingTimeSection from './Sections/OptimalChargingTime/OptimalChargingTimeSection';

const MonitoringPanel = () => {
	return (
		<div className="relative flex min-h-screen w-full flex-col">
			<div className="mx-auto flex h-full w-full max-w-7xl grow flex-col p-4">
				<header>
					<h1 className="py-2 text-3xl text-center font-black bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent sm:text-4xl md:text-5xl">
						Great Britain's Clean Energy Panel
					</h1>
				</header>
				<main className="flex flex-col gap-3">
					<EnergyPieChartSection />
					<OptimalChargingTimeSection />
				</main>
			</div>
		</div>
	);
};

export default MonitoringPanel;
