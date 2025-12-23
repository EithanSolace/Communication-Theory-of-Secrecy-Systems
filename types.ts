import { ReactNode } from 'react';

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: ReactNode;
  notes?: string;
}

export enum SlideType {
  TITLE = 'TITLE',
  STANDARD = 'STANDARD',
  VISUAL = 'VISUAL',
}