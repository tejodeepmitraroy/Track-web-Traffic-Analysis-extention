const Header = ({ domain }: { domain: string }) => {
	return (
		<header className="flex w-full flex-col items-start gap-3 bg-gray-700 p-6">
			<section className="flex w-full items-start">
				<div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-gray-50 p-2">
					<img src="/icons/magnifier.png" alt="" width={7} height={4} />
				</div>
				<h1 className="ml-2 text-left text-xl font-bold text-white">
					Track Web
				</h1>
			</section>

			<section className="flex w-full gap-2 text-white">
				<div className="flex h-8 w-8 flex-col items-center justify-center rounded-md bg-gray-50 p-2">
					<img src="/icons/magnifier.png" alt="" width={10} height={10} />
				</div>
				<div className="w-full text-left text-lg">
					<span>{domain}</span>
				</div>
			</section>
		</header>
	);
};

export default Header;
