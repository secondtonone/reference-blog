/* eslint-disable camelcase */
interface DomainRecord {
  rank: number;
  company: string;
  symbol: string;
  website: string;
  traffic: number;
  traffic_change: number;
  brand: string;
  brand_mentions: number;
  brand_mentions_change: number;
  social_media_audience: number;
  social_media_audience_change?: number;
  sm_tracker_lp?: string;
}

export default DomainRecord;
