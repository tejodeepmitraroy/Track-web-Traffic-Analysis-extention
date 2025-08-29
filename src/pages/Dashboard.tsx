import { useCallback, useEffect, useState } from 'react';
import VisitOverTime from '../components/Section/VisitOverTime';
import Header from '../components/ui/Header';
import StatsGrid from '../components/Section/StatsGrid';
import TopKeywords from '../components/Section/TopKeywords';
import TopCountry from '../components/Section/TopCountry';
import Ranking from '../components/Section/Ranking';

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
			<Header domain={'google.com'} />
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

				{/* Charts Row */}
				{/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartCard title="Visitor Trends">
          <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line 
          type="monotone" 
          dataKey="visitors" 
          stroke="#3B82F6" 
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
          />
          </LineChart>
          </ResponsiveContainer>
          </div>
          </ChartCard>
          
          <ChartCard title="Top Pages">
          <div className="space-y-4">
          {['Home', 'Products', 'Blog', 'About', 'Contact'].map((page, index) => (
            <div key={index} className="flex justify-between items-center">
            <span className="text-gray-700">{page}</span>
            <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
            <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${80 - (index * 10)}%` }}
            />
            </div>
            <span className="text-sm font-medium text-gray-500 w-12 text-right">
            {80 - (index * 10)}%
            </span>
            </div>
            ))}
            </div>
            </ChartCard>
            </div> */}
				{/* Additional Info Card */}
				{/* <Card>
          <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
                { name: 'Direct', value: '45%', color: 'bg-blue-500' },
                { name: 'Search', value: '30%', color: 'bg-green-500' },
                { name: 'Social', value: '15%', color: 'bg-yellow-500' },
                { name: 'Referral', value: '10%', color: 'bg-purple-500' }
                ].map((source, index) => (
                    <div key={index} className="text-center">
                    <div className={`h-3 w-3 rounded-full ${source.color} mx-auto mb-2`}></div>
                    <p className="text-sm font-medium text-gray-900">{source.value}</p>
                    <p className="text-sm text-gray-500">{source.name}</p>
                    </div>
                    ))}
                    </div>
                    </CardContent>
                    </Card> */}
			</section>
		</section>
	);
};

export default Dashboard;
