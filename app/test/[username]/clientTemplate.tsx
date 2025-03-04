'use client';

import dynamic from 'next/dynamic';
import { ClientTemplateProps, TemplatePageProps } from './types';

export default function ClientTemplate({ user, templateName }: ClientTemplateProps) {
  const TemplatePage = dynamic<TemplatePageProps>(() => 
    import(`@/components/Templates/${templateName}/${templateName}_Portfolio`), {
    ssr: false,
  });

  return <TemplatePage userDetails={user} />;
} 