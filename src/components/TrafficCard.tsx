import { type FC } from 'react'

interface TrafficCardProps {
    title: string;
    value: string;
}


const TrafficCard:FC<TrafficCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 text-center">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">{title}</h2>
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

export default TrafficCard
