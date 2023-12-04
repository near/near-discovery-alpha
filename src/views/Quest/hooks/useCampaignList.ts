import { useCallback, useEffect, useState } from 'react';
import { get } from '@/utils/http';

export default function useCampaignList() {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const queryCampaigns = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const result = await get('/operations/Quest/GetCampaignList');
      setCampaigns(result.data?.data || []);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    queryCampaigns();
  }, []);

  return { loading, campaigns };
}
