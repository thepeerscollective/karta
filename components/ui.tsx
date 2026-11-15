import { img } from '@/lib/base';

export function Img({ n, alt, ratio, eager, style }: { n: string; alt: string; ratio?: string; eager?: boolean; style?: React.CSSProperties }) {
  return <div className="ph" style={{ aspectRatio: ratio, ...style }}><img src={img(n)} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" /></div>;
}

export function KCard({ tab, color = 'ochre', children, className = '', style, bodyStyle }: { tab: string; color?: string; children: React.ReactNode; className?: string; style?: React.CSSProperties; bodyStyle?: React.CSSProperties }) {
  return (
    <div className={`kcard ${className}`} style={style}>
      <span className={`tab t-${color}`}>{tab}</span>
      <div className="body" style={bodyStyle}>{children}</div>
    </div>
  );
}

export function Field({ k, v, size }: { k: string; v: React.ReactNode; size?: number }) {
  return <div className="field"><span>{k}</span><b style={size ? { fontSize: size } : undefined}>{v}</b></div>;
}

export function Stamp({ children, ink, style }: { children: React.ReactNode; ink?: boolean; style?: React.CSSProperties }) {
  return <span className={`stamp${ink ? ' ink' : ''}`} style={style} aria-hidden="true">{children}</span>;
}
