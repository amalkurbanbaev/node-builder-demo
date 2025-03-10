import { createContext, useContext, useState } from "react";

import { LucideIcon } from "lucide-react";

// Определяем тип для данных ноды
type NodeData = {
  title: string;
  icon?: LucideIcon;
};

// Создаем контекст, который будет хранить тип и данные ноды
const DnDContext = createContext<
  [string | null, NodeData | null, (type: string | null, data: NodeData | null) => void]
>([null, null, () => {}]);

export function DnDProvider({ children }: { children: React.ReactNode }) {
  const [type, setType] = useState<string | null>(null);
  const [nodeData, setNodeData] = useState<NodeData | null>(null);

  const setDnDState = (newType: string | null, data: NodeData | null) => {
    setType(newType);
    setNodeData(data);
  };

  return <DnDContext.Provider value={[type, nodeData, setDnDState]}>{children}</DnDContext.Provider>;
}

export function useDnD() {
  return useContext(DnDContext);
}
