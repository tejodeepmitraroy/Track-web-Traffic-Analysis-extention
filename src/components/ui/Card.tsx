import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
	children?: React.ReactNode;
	className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
	<div
		className={cn(
			`bg-background flex h-fit flex-col gap-2 rounded-2xl py-4 shadow`,
			className
		)}
	>
		{children}
	</div>
);

export const CardHeader: React.FC<CardProps> = ({ children, className }) => (
	<div className={cn(`w-full px-4`, className)}>{children}</div>
);

export const CardTitle: React.FC<CardProps> = ({
	children,
	className = '',
}) => (
	<h3 className={`text-lg font-semibold text-gray-800 ${className}`}>
		{children}
	</h3>
);

export const CardContent: React.FC<CardProps> = ({
	children,
	className = '',
}) => <div className={`px-4 ${className}`}>{children}</div>;

export const CardFooter: React.FC<CardProps> = ({
	children,
	className = '',
}) => (
	<div className={`border-t border-gray-100 bg-gray-50 p-4 ${className}`}>
		{children}
	</div>
);

// Example usage of different card types
export const StatCard: React.FC<{
	title: string;
	value: string | number;
	icon?: React.ReactNode;
	trend?: 'up' | 'down' | 'neutral';
	trendValue?: string;
}> = ({ title, value, trend, trendValue }) => {
	const trendColors = {
		up: 'text-green-500',
		down: 'text-red-500',
		neutral: 'text-gray-500',
	};

	return (
		<Card>
			<CardContent className="flex items-center justify-between">
				<div>
					<p className="text-sm font-medium text-gray-500">{title}</p>
					<p className="text-2xl font-bold text-gray-900">{value}</p>
					{trend && trendValue && (
						<div className={`flex items-center text-sm ${trendColors[trend]}`}>
							{trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'}
							<span className="ml-1">{trendValue}</span>
						</div>
					)}
				</div>
				{/* {icon && <div className="rounded-lg bg-blue-100 p-3">{icon}</div>} */}
			</CardContent>
		</Card>
	);
};
