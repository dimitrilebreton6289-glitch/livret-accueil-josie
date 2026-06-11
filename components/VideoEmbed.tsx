/**
 * Lecteur vidéo : accepte un lien YouTube, Vimeo, ou un fichier vidéo
 * (.mp4 / .webm placé dans /public). S'affiche en 16:9, coins arrondis.
 */
function youtubeId(url: string): string | null {
  const m = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/,
  );
  return m ? m[1] : null;
}

function vimeoId(url: string): string | null {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : null;
}

export default function VideoEmbed({
  url,
  title,
}: {
  url: string;
  title?: string;
}) {
  const yt = youtubeId(url);
  const vm = vimeoId(url);
  // Vidéo verticale (YouTube Short) → cadre portrait centré.
  const portrait = /\/shorts\//.test(url);

  let content: React.ReactNode;
  if (yt) {
    content = (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${yt}`}
        title={title ?? "Vidéo"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  } else if (vm) {
    content = (
      <iframe
        src={`https://player.vimeo.com/video/${vm}`}
        title={title ?? "Vidéo"}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  } else {
    content = (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        src={url}
        controls
        playsInline
        className="absolute inset-0 h-full w-full bg-black object-contain"
      />
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-card bg-cream-deep shadow-[0_2px_12px_rgba(58,46,41,0.06)] ${
        portrait ? "mx-auto aspect-[9/16] max-w-[280px]" : "aspect-video"
      }`}
    >
      {content}
    </div>
  );
}
