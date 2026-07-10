import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
};

/** Full-bleed section image for AEO/SEO guide articles */
export default function GuideHeroImage({ src, alt, caption, priority = false }: Props) {
  return (
    <figure className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="px-4 py-3 text-sm text-slate-600 border-t border-slate-200 bg-white">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
