
interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ label, title, subtitle, align = 'left', className = '' }: SectionHeadingProps) {
  const isLeft = align === 'left';

  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${isLeft ? 'items-start text-left' : 'items-center text-center'} ${className}`}>
      {label && (
        <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase mb-3 block">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight max-w-3xl leading-[1.15] text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm md:text-base text-white/40 max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
export default SectionHeading;
