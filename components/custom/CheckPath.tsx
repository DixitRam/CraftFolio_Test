'use client';

import { useParams } from 'next/navigation';

export default function CheckPath() {
  const params = useParams();
  return params;
}