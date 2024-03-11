import { memo, useMemo, useState } from 'react';

import AccountSider from '@/components/AccountSider';
import { DesktopNavigationTop } from '@/components/navigation/desktop/DesktopNavigationTop';
import useCampaignList from '@/views/Quest/hooks/useCampaignList';
import useCategoryList from '@/views/Quest/hooks/useCategoryList';
import useQuestList from '@/views/Quest/hooks/useQuestList';
import Breadcrumb from '@/components/Breadcrumb';

import useUserInfo from '@/hooks/useUserInfo';
import useUserReward from '@/hooks/useUserReward';
import Yours from '../Quest/components/Yours';
import Leaderboard from './components/Leaderboard';
import Quests from './components/Quests';
import Swiper from './components/Swiper';
import Tabs from './components/Tabs';
import useLeaderboard from './hooks/useLeaderboard';
import { StyledWrapper, StyledContainer } from './styles';
import type { Tab } from './types';
import { useRouter } from 'next/router';

const QuestLeaderboardView = (props: any) => {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('quests');
  const [id, setId] = useState<string>();
  const { userInfo } = useUserInfo();
  const { info: userRewardInfo } = useUserReward();
  const { loading: campaignLoading, campaigns } = useCampaignList();
  const { loading: questingLoading, quests } = useQuestList(id);
  const { loading: categoryLoading, categories } = useCategoryList();
  const banners = useMemo(() => {
    if (!campaigns.length) return [];
    return campaigns
      .filter((campaign: any) => campaign.banner)
      .map((campaign) => ({ banner: campaign.banner, link: campaign.link }));
  }, [campaigns]);
  const campaign = useMemo(
    () => campaigns.find((campaign) => campaign.name.replace(/\s/g, '') === router.query.campaignName),
    [campaigns, router],
  );

  const navs = useMemo(() => {
    const array: any = [{ name: 'Quests', path: '/quest/leaderboard' }];
    if (campaign) {
      array.push({ name: campaign.name, path: '/quest/leaderboard/' + campaign.name.replace(/\s/g, '') });
    }
    return array;
  }, [campaign]);
  return (
    <StyledWrapper>
      <DesktopNavigationTop />
      <StyledContainer style={{ paddingTop: 30, paddingBottom: 19 }}>
        <Breadcrumb navs={navs} />
      </StyledContainer>
      {tab === 'quests' && (
        <Quests
          id={id}
          {...{ campaignLoading, campaigns, questingLoading, quests, categoryLoading, categories, userInfo }}
          onLoad={(id: string) => {
            setId(id);
          }}
        />
      )}
      <AccountSider />
      <Yours info={userRewardInfo} />
    </StyledWrapper>
  );
};

export default memo(QuestLeaderboardView);
