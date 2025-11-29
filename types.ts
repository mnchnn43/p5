import p5 from 'p5';

export type SketchFunction = (p: p5) => void;

export interface SketchCardProps {
  title: string;
  description: string;
  sketch: SketchFunction;
}