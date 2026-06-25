'use client';

import { useParams } from 'next/navigation';
import { Listing } from '@adragon-web/admin';
import tableConfigs from '../../configs/tableConfigs';
import { useTheme } from '@adragon-web/context';

export default function PagingPage() {
  const themeContext = useTheme();

  const params = useParams();
  const resource =
    params && Array.isArray(params.paging)
      ? params.paging[0]
      : typeof params?.paging === 'string'
        ? params.paging
        : null;

  return <Listing resource={resource} tableConfigs={tableConfigs} theme={themeContext.theme} />;
}