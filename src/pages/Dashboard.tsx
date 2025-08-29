import { useCallback, useEffect, useState } from 'react';
import VisitOverTime from '../components/Section/VisitOverTime';
import Header from '../components/ui/Header';
import StatsGrid from '../components/Section/StatsGrid';
import TopKeywords from '../components/Section/TopKeywords';
import TopCountry from '../components/Section/TopCountry';
import Ranking from '../components/Section/Ranking';
import Footer from '../components/Footer';
import { getAnalysis } from '../api/api-fetcher';
import { useApiData } from '../stores/useDataStore';

const Dashboard = () => {
	// const [analysisData] = useState<GetAnalysis | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [url, setUrl] = useState<string>('');

	const setApiData = useApiData((store) => store.setApiData);
	const getAnalysisData = useCallback(async () => {
		try {
			setIsLoading(true);
			const data = await getAnalysis(url);
			if (data) {
				setApiData(data);
			}
		} catch (err) {
			setError('Failed to fetch analysis data');
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	}, [url]);

	useEffect(() => {
		if (!url) return; // don't fetch until url is set
		getAnalysisData();
	}, [url, getAnalysisData]);

	useEffect(() => {
		let mounted = true;

		// Function to set URL if component is still mounted
		const safeSetUrl = (newUrl: string) => {
			if (mounted) {
				setUrl(newUrl);
			}
		};

		// Try to get URL directly if in extension context
		const getTabUrl = () => {
			try {
				if (chrome?.tabs) {
					chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
						if (tabs[0]?.url) {
							safeSetUrl(tabs[0].url);
						}
					});
				}
			} catch (error) {
				console.error('Error getting tab URL:', error);
			}
		};

		// Request URL from parent window
		try {
			window.parent.postMessage({ type: 'GET_TAB_URL' }, '*');
		} catch (error) {
			console.error('Error posting message to parent:', error);
		}

		// Try direct tab URL first
		getTabUrl();

		// Handle messages from content script or parent
		const handleMessage = (event: MessageEvent) => {
			if (event.data?.type === 'TAB_URL' && event.data.url) {
				setUrl(event.data.url);
			}
		};

		window.addEventListener('message', handleMessage);
		return () => window.removeEventListener('message', handleMessage);
	}, []);

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
