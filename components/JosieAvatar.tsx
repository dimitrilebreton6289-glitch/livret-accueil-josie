/**
 * Mascotte Josie : logo officiel de la conciergerie (public/logo.png),
 * affiché en rond. Modifiez le chemin ici si le nom du fichier change.
 */
export default function JosieAvatar({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="Josie"
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
