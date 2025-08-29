import { type FC } from 'react';

interface TrafficCardProps {
	title: string;
	value: string;
}

const TrafficCard: FC<TrafficCardProps> = ({ title, value }) => {
	return (
		<div className="rounded-2xl bg-white p-6 text-center shadow">
			<h2 className="mb-2 text-lg font-semibold text-gray-700">{title}</h2>
			<p className="text-xl font-bold text-gray-900">{value}</p>
		</div>
	);
};

export default TrafficCard;
