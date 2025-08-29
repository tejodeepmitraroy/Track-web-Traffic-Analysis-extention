import { type FC } from 'react';

interface TableProps {
	columns: Array<{ title: string; accessorKey: string }>;

	data: Array<{
		[key: string]: string | number | null;
	}>;
}
const Table: FC<TableProps> = ({ data, columns }) => {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
				<thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
					<tr>
						{columns.map((column) => (
							<th scope="col" className="px-6 py-3">
								{column.title}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr
							key={index}
							className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
						>
							<th
								scope="row"
								className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white"
							>
								{item[columns[0].accessorKey]}
							</th>
							<td className="px-6 py-4">{item[columns[1].accessorKey]}</td>
							<td className="px-6 py-4">{item[columns[2].accessorKey]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
