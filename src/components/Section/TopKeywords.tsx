import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { useApiData } from '../../stores/useDataStore';
import Table from '../ui/Table';

const TopKeywords = () => {
	const TopKeywords = useApiData((state) => state.TopKeywords);

	return (
		<section className="mt-6 w-full">
			<Card>
				<CardHeader>
					<CardTitle>Top Keywords</CardTitle>
				</CardHeader>
				<CardContent className="gap-6">
					<Table
						columns={[
							{
								title: 'Keyword',
								accessorKey: 'keyword',
							},
							{
								title: 'Traffic',
								accessorKey: 'traffic',
							},
							{
								title: 'Cost Per Click',
								accessorKey: 'cpc',
							},
						]}
						data={TopKeywords.map((keyword) => ({
							keyword: keyword.Name,
							traffic: (keyword.Volume / 1000000).toFixed(1) + 'M',
							cpc: keyword.Cpc ? `$${keyword.Cpc}` : 'N/A',
						}))}
					/>
				</CardContent>
			</Card>
		</section>
	);
};

export default TopKeywords;
