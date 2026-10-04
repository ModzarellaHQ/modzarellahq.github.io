export default function Picture(props: { name: string; alt: string; width: number; height: number; sizes: string; eager?: boolean }) {
  const set = (ext: string) => `/screens/${props.name}-400.${ext} 400w, /screens/${props.name}-800.${ext} 800w, /screens/${props.name}-${props.width}.${ext} ${props.width}w`;
  return (
    <picture>
      <source type="image/avif" srcset={set("avif")} sizes={props.sizes} />
      <img
        class="block h-auto w-full border border-line"
        src={`/screens/${props.name}-800.webp`}
        srcset={set("webp")}
        sizes={props.sizes}
        alt={props.alt}
        width={props.width}
        height={props.height}
        loading={props.eager ? "eager" : "lazy"}
        decoding="async"
        fetchpriority={props.eager ? "high" : "auto"}
      />
    </picture>
  );
}
