/* eslint-disable camelcase */
interface RankRecord {
  display_date: string;
  country: string;
  device_type: string;
  rank: number;
  rankChange: number;
  domain: string;
  visits: number;
  users: number;
  desktop_share: number;
  mobile_share: number;
  desktop_visits: number;
  mobile_visits: number;
  time_on_site: number;
  bounce_rate: number;
  pages_per_visit: number;
}

export default RankRecord;
