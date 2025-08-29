import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { useApiData } from '../../stores/useDataStore';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import Table from '../ui/Table';

const TopCountry = () => {
	const TopCountry = useApiData((state) => state.TopCountryShares);
	return (
		<section className="mt-6 w-full">
			<Card>
				<CardHeader>
					<CardTitle>Top Countries</CardTitle>
				</CardHeader>
				<CardContent className="mt-2 gap-6">
					<span className="text-secondary flex gap-2">
						<HiOutlineDesktopComputer className="w-fit text-2xl" /> All Traffic
					</span>
					<Table
						columns={[
							{
								title: 'Country',
								accessorKey: 'country',
							},
							{
								title: 'Value',
								accessorKey: 'value',
							},
						]}
						data={TopCountry.map((country) => {
							return {
								country: country.CountryCode,
								value: (country.Value * 100).toFixed(2) + '%',
							};
						})}
					/>
				</CardContent>
			</Card>
		</section>
	);
};

export default TopCountry;
