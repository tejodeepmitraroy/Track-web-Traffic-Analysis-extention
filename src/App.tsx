import { useEffect, useState } from "react";
import "./App.css";
import TrafficCard from "./components/TrafficCard";

interface TrafficData {
  visits?: number;
  topCountries?: Array<{ country: string }>;
  referrers?: Array<{ source: string }>;
}

type TrafficDataResponse = TrafficData | null;

function App() {
  const [data, setData] = useState<TrafficDataResponse>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Example domain to test
  const domain = "wikipedia.org";

  useEffect(() => {
    const fetchTrafficData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://website-traffic-data.p.rapidapi.com/v1/traffic?domain=${domain}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY, // keep key in .env
              "x-rapidapi-host": "website-traffic-data.p.rapidapi.com",
            },
          }
        );
        const result: TrafficData = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
        setError("Failed to load traffic data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrafficData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Traffic Analysis Extension
      </h1>

      {loading && <p>Loading traffic data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <TrafficCard
            title="Total Visits"
            value={data.visits ? data.visits.toLocaleString() : "N/A"}
          />
          <TrafficCard
            title="Top Countries"
            value={
              data.topCountries
                ? data.topCountries
                    .slice(0, 3)
                    .map((c: { country: string }) => c.country)
                    .join(", ")
                : "N/A"
            }
          />
          <TrafficCard
            title="Top Referrers"
            value={
              data.referrers
                ? data.referrers
                    .slice(0, 3)
                    .map((r: { source: string }) => r.source)
                    .join(", ")
                : "N/A"
            }
          />
        </div>
      )}
    </div>
  );
}

export default App;
