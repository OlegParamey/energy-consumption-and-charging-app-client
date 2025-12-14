import EnergyPieChartSection from './Sections/EnergyPieChart/EnergyPieChartSection';
import OptimalChargeTimeSection from './Sections/OptimalChargeTime/OptimalChargeTimeSection';

const MonitoringPanel = () => {
	return (
		<div className="relative flex min-h-screen w-full flex-col">
			<div className="mx-auto flex h-full w-full max-w-7xl grow flex-col p-4">
				<header className="pt-3 pb-4">
					<h1 className="text-2xl text-center font-black text-gray-900 sm:text-4xl">
						Clean Energy Tracker for Great Britain
					</h1>
				</header>
				<main className="flex flex-col gap-3">
					<EnergyPieChartSection />
					<OptimalChargeTimeSection />
				</main>
			</div>
		</div>
	);
};

export default MonitoringPanel;
