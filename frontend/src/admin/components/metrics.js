import { useEffect, useState } from 'react';
import axios from 'axios';

const Metrics = () => {
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);
  const [totalAnnouncements, setTotalAnnouncements] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // Fetch total events
        const eventsResponse = await axios.get('http://localhost:4000/api/v1/events');
        setTotalEvents(eventsResponse.data.length);

        // Fetch total members
        const membersResponse = await axios.get('http://localhost:4000/api/v1/members');
        setTotalMembers(membersResponse.data.length);

        // Fetch total announcements
        const announcementsResponse = await axios.get('http://localhost:4000/api/v1/announcements');
        setTotalAnnouncements(announcementsResponse.data.length);
      } catch (err) {
        setError("Failed to fetch dashboard data.");
        console.error(err);
      }
    };

    fetchMetrics();
  }, []); 

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="overview">
      <div className="metric-card">
        <h3>Total events</h3>
        <h1>{totalEvents}</h1>
      </div>
      <div className="metric-card">
        <h3>Total members</h3>
        <h1>{totalMembers}</h1>
      </div>
      <div className="metric-card">
        <h3>Total announcements</h3>
        <h1>{totalAnnouncements}</h1>
      </div>
    </div>
  );
};

export default Metrics;