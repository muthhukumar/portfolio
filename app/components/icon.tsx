import type { IconType } from "react-icons";

export default function Icon({
  icon,
  size,
}: {
  icon: IconType;
  size?: number;
}) {
  const Icon = icon;
  return <Icon size={size ?? 20} />;
}
