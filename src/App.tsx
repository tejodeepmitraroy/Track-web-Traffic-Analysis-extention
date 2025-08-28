// import { useEffect, useState } from "react";
// import "./App.css";
// import TrafficCard from "./components/TrafficCard";

import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Header from './components/ui/Header';
import Card, { CardContent, CardHeader, CardTitle, StatCard } from './components/ui/Card';
import VisitOverTime from './components/Section/VisitOverTime';
import { FiClock, FiEye, FiTrendingUp, FiUsers } from 'react-icons/fi';

// interface TrafficData {
//   visits?: number;
//   topCountries?: Array<{ country: string }>;
//   referrers?: Array<{ source: string }>;
// }

// type TrafficDataResponse = TrafficData | null;

// function App() {
//   const [data, setData] = useState<TrafficDataResponse>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   // Example domain to test
//   const domain = "wikipedia.org";

//   useEffect(() => {
//     const fetchTrafficData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://website-traffic-data.p.rapidapi.com/v1/traffic?domain=${domain}`,
//           {
//             method: "GET",
//             headers: {
//               "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY, // keep key in .env
//               "x-rapidapi-host": "website-traffic-data.p.rapidapi.com",
//             },
//           }
//         );
//         const result: TrafficData = await response.json();
//         setData(result);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load traffic data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTrafficData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       <h1 className="text-3xl font-bold mb-6 text-blue-600">
//         Traffic Analysis Extension
//       </h1>

//       {loading && <p>Loading traffic data...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {data && (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
//           <TrafficCard
//             title="Total Visits"
//             value={data.visits ? data.visits.toLocaleString() : "N/A"}
//           />
//           <TrafficCard
//             title="Top Countries"
//             value={
//               data.topCountries
//                 ? data.topCountries
//                     .slice(0, 3)
//                     .map((c: { country: string }) => c.country)
//                     .join(", ")
//                 : "N/A"
//             }
//           />
//           <TrafficCard
//             title="Top Referrers"
//             value={
//               data.referrers
//                 ? data.referrers
//                     .slice(0, 3)
//                     .map((r: { source: string }) => r.source)
//                     .join(", ")
//                 : "N/A"
//             }
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

export default function App() {
  const [analysisData] = useState<GetAnalysis | null>(null);
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

	// Mock data for the chart
	// const chartData = [
	// 	{ name: 'Jan', visitors: 4000 },
	// 	{ name: 'Feb', visitors: 3000 },
	// 	{ name: 'Mar', visitors: 5000 },
	// 	{ name: 'Apr', visitors: 2780 },
	// 	{ name: 'May', visitors: 1890 },
	// 	{ name: 'Jun', visitors: 2390 },
	// ];

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
		<section className="h-full w-full bg-white">
			<div className="content-container">
				<Header domain={'google.com'} />
				<section className="grid w-full grid-cols-4 gap-6">
					<Card>
						<CardHeader className="px-2 text-left">
							<CardTitle className="text-sm">Total Visitors</CardTitle>
						</CardHeader>
						<CardContent>
							<span className="text-3xl font-bold">3000</span>

							<p className="text-2xl font-bold text-gray-900">
								{analysisData?.Engagments.Visits}
							</p>
						</CardContent>
					</Card>{' '}
					<Card>
						<CardHeader>
							<CardTitle>Total Countries</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-2xl font-bold text-gray-900">
								{analysisData?.TopCountryShares.length}
							</p>
						</CardContent>
					</Card>
				</section>

        
				{/* Visits Over Time */}
				<VisitOverTime/>
				{/* Stats Grid */}
				 <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Visitors" 
            value="24,531" 
            icon={<FiUsers className="text-blue-600 text-xl" />}
            trend="up"
            trendValue="12% from last month"
          />
          <StatCard 
            title="Page Views" 
            value="89,745" 
            icon={<FiEye className="text-green-600 text-xl" />}
            trend="up"
            trendValue="8% from last month"
          />
          <StatCard 
            title="Avg. Session" 
            value="2m 45s" 
            icon={<FiClock className="text-purple-600 text-xl" />}
            trend="down"
            trendValue="5% from last month"
          />
          <StatCard 
            title="Bounce Rate" 
            value="42.1%" 
            icon={<FiTrendingUp className="text-yellow-600 text-xl" />}
            trend="down"
            trendValue="3% from last month"
          />
        </div> 
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
			</div>
		</section>
		
	);
}
