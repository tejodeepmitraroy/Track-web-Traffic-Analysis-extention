import { useEffect } from 'react';
import { useApiData } from '../../stores/useDataStore';

const Header = () => {
	const domain = useApiData((state) => state.SiteName);
	const favicon = useApiData((state) => state.favicon);
	const setFavicon = useApiData((state) => state.setFavicon);

	useEffect(() => {
		chrome.runtime.onMessage.addListener((msg) => {
			if (msg.type === 'FAVICON') {
				setFavicon(msg.favicon);
			}
		});

		// Request favicon from active tab
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			if (tabs[0]?.id) {
				chrome.scripting.executeScript({
					target: { tabId: tabs[0].id },
					func: () => {
						const favicon =
							document.querySelector("link[rel~='icon']")?.getAttribute('href') ||
							document.querySelector("link[rel='shortcut icon']")?.getAttribute('href') ||
							`${location.origin}/favicon.ico`;
						chrome.runtime.sendMessage({ type: 'FAVICON', favicon });
					},
				});
			}
		});
	}, []);
	return (
		<header className="flex w-full flex-col items-start gap-3 bg-gray-700 p-6">
			<section className="flex w-full items-start">
				<div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-gray-50 p-2">
					<img src={'/icons/magnifier.png'} alt="" width={7} height={4} />
				</div>
				<h1 className="ml-2 text-left text-xl font-bold text-white">
					Track Web <span className="text-sm text-gray-400">by Tejodeep</span>
				</h1>
			</section>

			<section className="flex w-full gap-2 text-white">
				<div className="flex h-8 w-8 flex-col items-center justify-center rounded-md bg-gray-50 p-2">
					<img src={	favicon} alt="" width={10} height={10} />
				</div>
				<div className="w-full text-left text-xl font-semibold">
					<span>{domain}</span>
				</div>
			</section>
		</header>
	);
};

export default Header;
