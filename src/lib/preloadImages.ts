const preloadCache = new Map<string, Promise<boolean>>();

function loadImage(src: string): Promise<boolean> {
  const cached = preloadCache.get(src);
  if (cached) return cached;

  const promise = new Promise<boolean>((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      if (typeof image.decode === "function") {
        image.decode().then(
          () => resolve(true),
          () => resolve(true),
        );
        return;
      }
      resolve(true);
    };
    image.onerror = () => resolve(false);
    image.src = src;
  });

  preloadCache.set(src, promise);
  return promise;
}

export function preloadImage(src: string): Promise<boolean> {
  return loadImage(src);
}

export function preloadImages(sources: string[]): Promise<Record<string, boolean>> {
  return Promise.all(
    sources.map(async (src) => [src, await loadImage(src)] as const),
  ).then((entries) => Object.fromEntries(entries) as Record<string, boolean>);
}

export function isImagePreloaded(src: string): boolean {
  return preloadCache.has(src);
}
