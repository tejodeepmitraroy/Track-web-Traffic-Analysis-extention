import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { useApiData } from '../../stores/useDataStore';

const VisitOverTime = () => {
	const visitsData = useApiData((state) => state.EstimatedMonthlyVisits);
	const data = Object.entries(visitsData).map(([date, visits]) => ({
		month: new Date(date).toLocaleString('default', { month: 'short' }),
		visits: Math.round(visits / 1000000) * 1000000, // Round to nearest million
	}));

	return (
		<section className="mt-6 w-full">
			<Card>
				<CardHeader>
					<CardTitle>Visits Over Time</CardTitle>
				</CardHeader>
				<CardContent className="gap-6">
					<section className="flex w-full justify-between">
						<span className="text-secondary flex gap-2">
							<HiOutlineDesktopComputer className="w-fit text-2xl" /> All
							Traffic
						</span>

						{/* <select
							name=""
							id=""
							className="bg-foreground flex w-fit items-center justify-between rounded-xl p-1"
						>
							<option value="">All Traffic</option>
							<option value="">All Traffic</option>
							<option value="">All Traffic</option>
						</select> */}
					</section>

					<section className="">
						<ResponsiveContainer width="100%" height={300} className="">
							<AreaChart
								data={data}
								margin={{ top: 20, right: 10, left: -10, bottom: 30 }}
							>
								<defs>
									<linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
										<stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
										<stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
									</linearGradient>
								</defs>

								<CartesianGrid strokeDasharray="3 3" vertical={false} />
								<XAxis
									dataKey="month"
									tick={{ fill: '#374151', fontSize: 12 }} // label color
									interval={0}
								/>
								<YAxis
									tick={{ fill: '#374151', fontSize: 12 }}
									domain={[0, 1000000000]} // control scale (0 → 10M)
									tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} // show "0.5M", "1.0M"
								/>
								<Tooltip
									formatter={(value) =>
										`${((value as number) / 1000000).toFixed(1)}M`
									}
								/>

								<Area
									type="monotone"
									dataKey="visits"
									stroke="#3b82f6"
									fillOpacity={1}
									fill="url(#colorVisits)"
								/>
							</AreaChart>
						</ResponsiveContainer>
					</section>
					{/* <section className="w-full">
						<VisitOverTimeSection
							icon={<TbArrowBounce />}
							title="Bounce Rate "
							value="12%"
						/>
						<VisitOverTimeSection
							icon={<TbArrowBounce />}
							title="Page per Visit"
							value="12%"
						/>
						<VisitOverTimeSection
							icon={<TbArrowBounce />}
							title="Monthly Visits"
							value="12%"
						/>
						<VisitOverTimeSection
							icon={<TbArrowBounce />}
							title="Avg. Visit Duration"
							value="12%"
						/>
					</section> */}
				</CardContent>
			</Card>
		</section>
	);
};

export default VisitOverTime;

// const VisitOverTimeSection = ({
// 	icon,
// 	title,
// 	value,
// }: {
// 	icon: React.ReactNode;
// 	title: string;
// 	value: string;
// }) => {
// 	return (
// 		<section className="flex w-full items-center justify-between border-b py-3">
// 			<div className="flex w-fit items-center gap-2">
// 				<span className="w-fit">{icon}</span>
// 				<span>{title}</span>
// 			</div>
// 			<span className="w-fit text-left">{value}</span>
// 		</section>
// 	);
// };
