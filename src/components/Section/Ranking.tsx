import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { useApiData } from '../../stores/useDataStore';

const Ranking = () => {
	const GlobalRank = useApiData((state) => state.GlobalRank);
	const CountryRank = useApiData((state) => state.CountryRank);
	const CategoryRank = useApiData((state) => state.CategoryRank);
	return (
		<section className="mt-6 w-full">
			<Card>
				<CardHeader>
					<CardTitle>Ranking</CardTitle>
				</CardHeader>
				<CardContent className="grid w-full grid-cols-3">
					<section className="flex w-full flex-col items-center justify-between border-r border-gray-200 px-2">
						<span className="text-lg font-bold">Global Rank</span>
						<span className="text-base font-medium">#{GlobalRank?.Rank}</span>
					</section>
					<section className="flex w-full flex-col items-center justify-between border-r border-gray-200 px-2">
						<span className="text-lg font-bold">Country Rank</span>
						<span className="text-base font-medium">
							#{CountryRank?.Rank} - {CountryRank?.CountryCode}
						</span>
					</section>
					<section className="flex w-full flex-col items-center justify-between px-2">
						<span className="text-lg font-bold">Category Rank</span>
						<span className="text-base font-semibold">
							#{CategoryRank?.Rank}
						</span>
					</section>
				</CardContent>
			</Card>
		</section>
	);
};

export default Ranking;
