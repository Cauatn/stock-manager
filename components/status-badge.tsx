import { Badge } from "./ui/badge";

interface StatusBadgeProps {
  type: "available" | "unavailable" | "few";
}

const statusMap = {
  available: { color: "bg-green-600", description: "Disponível" },
  unavailable: { color: "bg-red-600", description: "Fora de Estoque" },
  few: { color: "bg-yellow-600", description: "Poucas unidades" },
};

export default function StatusBadge({ type }: StatusBadgeProps) {
  const { color, description } = statusMap[type];

  return (
    <Badge variant={"default"} className={`${color} rounded-md`}>
      {description}
    </Badge>
  );
}
