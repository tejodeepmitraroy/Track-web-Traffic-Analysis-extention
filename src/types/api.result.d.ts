interface GetAnalysis {
	Version: number;
	
	SiteName: string;
	Description: string;
	TopCountryShares: Array<{
		Country: number;
		CountryCode: string;
		Value: number;
	}>;
	Title: string;
	Engagments: {
		BounceRate: string;
		Month: string;
		Year: string;
		PagePerVisit: string;
		Visits: string;
		TimeOnSite: string;
	};
	EstimatedMonthlyVisits: {
		[key: string]: number;
	};
	GlobalRank: {
		Rank: number;
	};
	CountryRank: {
		Country: number;
		CountryCode: string;
		Rank: number;
	};
	CategoryRank: {
		Rank: string;
		Category: string;
	};
	GlobalCategoryRank: null;
	IsSmall: false;
	Policy: 0;
	TrafficSources: {
		Social: number;
		'Paid Referrals': number;
		Mail: number;
		Referrals: number;
		Search: number;
		Direct: number;
	};
	Category: string;
	LargeScreenshot: string;
	IsDataFromGa: false;
	Countries: Array<{ Code: string; UrlCode: string; Name: string }>;

	Competitors: {
		TopSimilarityCompetitors: Array<>;
	};
	Notification: {
		Content: null;
	};
	TopKeywords: Array<{
		Name: string;
		EstimatedValue: number;
		Volume: number;
		Cpc: number | null;
	}>;

	SnapshotDate: string;
}
