import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  devhubCommunityCalendarId,
  lumaDevHubHacksCalendarId,
  lumaNearAICalendarId,
  lumaNearCalendarId,
  lumaNearHZNCalendarId,
  nearTownHallCalendarId,
} from '@/utils/config';
import { formatEvents, sortEventsByDate } from '@/utils/events';
import type { FormatedEvent } from '@/utils/types';

import { useGoogleEvents } from './useGoogleEvents';
import { useLumaEvents } from './useLumaEvents';

export function useEvents() {
  const { lumaEvents: mainEvents } = useLumaEvents([lumaNearCalendarId, lumaDevHubHacksCalendarId], 1);
  const { lumaEvents: otherLumaEvents } = useLumaEvents(
    [lumaNearAICalendarId, lumaNearHZNCalendarId, nearTownHallCalendarId],
    10,
  );
  const { googleEvents } = useGoogleEvents(devhubCommunityCalendarId, 100);

  const [lastElements, setLastElements] = useState<FormatedEvent[]>([]);
  const [communityEvents, setCommunityEvents] = useState<FormatedEvent[]>([]);
  const [allEvents, setAllEvents] = useState<FormatedEvent[]>([]);

  const hasMoreEvents = useMemo(
    () => communityEvents.length + lastElements.length < allEvents.length,
    [communityEvents, lastElements, allEvents],
  );

  const fetchMore = useCallback(() => {
    const skipFrom = communityEvents.length + lastElements.length;
    const skipTo = skipFrom + 6;
    const nextEvents = allEvents.slice(skipFrom, skipTo);

    setCommunityEvents([...communityEvents, ...lastElements]);
    setLastElements(nextEvents);
  }, [allEvents, communityEvents, lastElements]);

  useEffect(() => {
    const sortedEvents = sortEventsByDate([...googleEvents, ...otherLumaEvents]);
    const formattedEvents = formatEvents(sortedEvents);
    setAllEvents(formattedEvents);
    setCommunityEvents(formattedEvents.slice(0, 6));
    setLastElements([]);
  }, [googleEvents, otherLumaEvents]);

  const highlightedEvent = mainEvents[0];

  return {
    highlightedEvent,
    communityEvents,
    hasMoreEvents,
    fetchMore,
    lastElements,
  };
}
