import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { BosLoaderBanner } from '@/components/client/BosLoaderBanner';
import { VmWidgetWrapper } from '@/components/client/VmWidgetWrapper';
import { useHashUrlBackwardsCompatibility } from '@/hooks/useHashUrlBackwardsCompatibility';
import { useWidgets } from '@/hooks/useWidgets';
import { useAuthStore } from '@/stores/auth';
import { useCurrentWidgetStore } from '@/stores/current-widget';
import { recordClick, recordPageView } from '@/utils/analytics';

export default function EmbedComponentPage() {
  const router = useRouter();
  const widgets = useWidgets();
  const authStore = useAuthStore();
  const setWidgetSrc = useCurrentWidgetStore((store) => store.setWidgetSrc);
  const widgetSrc = `${router.query.accountId}/widget/${router.query.componentName}`;
  const [widgetProps, setWidgetProps] = useState<Record<string, unknown>>({});

  useHashUrlBackwardsCompatibility();

  useEffect(() => {
    setWidgetSrc(widgetSrc);
  }, [setWidgetSrc, widgetSrc]);

  useEffect(() => {
    setWidgetProps(router.query);
  }, [router.query]);

  useEffect(() => {
    // ! why?
    setTimeout(() => {
      recordPageView(widgetSrc);
    }, 1);
  }, [widgetSrc]);

  return (
    <>
      <Head>
        {/* TODO
        <title>{props.meta.title}</title>
        <meta name="description" content={props.meta.description} />
        <meta property="og:title" content={props.meta.title} />
        <meta property="og:description" content={props.meta.description} />
      */}
      </Head>

      <BosLoaderBanner />

      <div
        className="d-inline-block position-relative overflow-hidden"
        onPointerUp={recordClick}
        style={{
          paddingTop: 'var(--body-top-padding)',
        }}
      >
        <VmWidgetWrapper
          key={widgets.wrapper}
          src={widgets.wrapper}
          props={{
            children: (
              <VmWidgetWrapper
                key={widgets.tosCheck}
                src={widgets.tosCheck}
                props={{
                  logOut: authStore.logOut,
                  tosName: widgets.tosContent,
                  targetComponent: widgetSrc,
                  targetProps: widgetProps,
                }}
              />
            ),
          }}
        />
      </div>
    </>
  );
}
