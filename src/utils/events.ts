import { eventsApiUrl, eventsApiKey } from './config';

type EventData = {
  api_id: string;
  event: {
    api_id: string;
    name: string;
    start_at: string;
    cover_url: string;
    url: string;
  };
};

type EventsListData = {
  entries: EventData[];
  hasMore: boolean;
};

export const fetchEventsList = async (limit: number, offset: number): Promise<EventsListData> => {
  const queryLimit = `pagination_limit=${limit ?? 10}`;
  const queryOffset = offset ? `pagination_offset=${offset}` : '';
  const queryParams = `${queryLimit}${queryOffset ? `&${queryOffset}` : ''}`;
  const res = await fetch(`${eventsApiUrl}/calendar/list-events?${queryParams}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-luma-api-key': eventsApiKey as string,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = (await res.json()) as { entries: EventData[]; has_more: boolean };
  return { entries: data.entries, hasMore: data.has_more };
};
