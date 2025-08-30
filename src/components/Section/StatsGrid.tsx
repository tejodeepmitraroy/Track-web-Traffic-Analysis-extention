import { useApiData } from '../../stores/useDataStore';
import { StatCard } from '../ui/Card';
import { FiClock, FiEye, FiTrendingUp, FiUsers } from 'react-icons/fi';

// Format time in seconds to HH:MM:SS
const formatTime = (seconds: string) => {
	const secs = parseFloat(seconds);
	const hours = Math.floor(secs / 3600);
	const minutes = Math.floor((secs % 3600) / 60);
	const remainingSeconds = Math.floor(secs % 60);
	return [
		hours.toString().padStart(2, '0'),
		minutes.toString().padStart(2, '0'),
		remainingSeconds.toString().padStart(2, '0'),
	].join(':');
};

const StatsGrid = () => {
	const engagements = useApiData((state) => state.Engagments);
	const visits = useApiData((state) => state.EstimatedMonthlyVisits);

	// Get the most recent month's visits
	const monthlyVisits = Object.values(visits).pop() || 0;

	// Format values
	const formattedVisits = (monthlyVisits / 1000000).toFixed(1) + 'M';
	const formattedPageViews = parseFloat(engagements.PagePerVisit).toFixed(2);
	const formattedTimeOnSite = formatTime(engagements.TimeOnSite);
	const formattedBounceRate =
		(parseFloat(engagements.BounceRate) * 100).toFixed(2) + '%';
	return (
		<section className="grid w-full grid-cols-2 gap-2">
			<StatCard
				title="Monthly Visits"
				value={formattedVisits}
				icon={<FiUsers className="text-xl text-blue-600" />}
				trend="up"
				trendValue="12% from last month"
			/>
			<StatCard
				title="Page per Visit"
				value={formattedPageViews}
				icon={<FiEye className="text-xl text-green-600" />}
				trend="up"
				trendValue="8% from last month"
			/>
			<StatCard
				title="Avg. Session"
				value={formattedTimeOnSite}
				icon={<FiClock className="text-xl text-purple-600" />}
				trend="down"
				trendValue="5% from last month"
			/>
			<StatCard
				title="Bounce Rate"
				value={formattedBounceRate}
				icon={<FiTrendingUp className="text-xl text-yellow-600" />}
				trend="down"
				trendValue="3% from last month"
			/>
		</section>
	);
};

export default StatsGrid;
