import { useCallback, useEffect, useState } from 'react';
import VisitOverTime from '../components/Section/VisitOverTime';
import Header from '../components/ui/Header';
import StatsGrid from '../components/Section/StatsGrid';
import TopKeywords from '../components/Section/TopKeywords';
import TopCountry from '../components/Section/TopCountry';
import Ranking from '../components/Section/Ranking';
import Footer from '../components/Footer';

const Dashboard = () => {
	// const [analysisData] = useState<GetAnalysis | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const getAnalysisData = useCallback(async () => {
		try {
			setIsLoading(true);
			// const data = await getAnalysis('google.com');
			// setAnalysisData(data);
		} catch (err) {
			setError('Failed to fetch analysis data');
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		getAnalysisData();
	}, [getAnalysisData]);
	if (isLoading) {
		return (
			<div className="flex h-screen items-center justify-center">
				Loading...
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex h-screen items-center justify-center text-red-500">
				{error}
			</div>
		);
	}

	return (
		<section className="h-full w-full overflow-x-hidden overflow-y-auto">
			<Header />
			<section className="w-full bg-gray-50 p-2">
				{/* Stats Grid */}
				<StatsGrid />

				{/* Visits Over Time */}
				<VisitOverTime />

				{/* Top Keywords */}
				<TopKeywords />

				{/* Ranking */}
				<Ranking />

				{/* Top Countries */}
				<TopCountry />

				{/* Footer */}
				<Footer />
			</section>
		</section>
	);
};

export default Dashboard;
