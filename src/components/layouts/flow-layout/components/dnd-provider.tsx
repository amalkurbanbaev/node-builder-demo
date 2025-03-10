import { createContext, useContext, useState } from "react";

const DnDContext = createContext<[string | null, (type: "position-logger" | "input") => void]>([null, () => {}]);

export const DnDProvider = ({ children }: { children: React.ReactNode }) => {
  const [type, setType] = useState<"position-logger" | "input" | null>(null);

  return <DnDContext.Provider value={[type, setType]}>{children}</DnDContext.Provider>;
};

export default DnDContext;

export const useDnD = () => {
  return useContext(DnDContext);
};
