import { Handle, Position } from "@xyflow/react";
import { LucideIcon } from "lucide-react";

export function CustomNode({ data }: { data: { label: string; icon?: LucideIcon } }) {
  return (
    <div className="react-flow__node-default">
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
      <Handle type="source" position={Position.Bottom} />

      <div className="flex items-center justify-center gap-2">
        {data.icon && <data.icon size={16} />}
        <div>{data.label}</div>
      </div>
    </div>
  );
}

export const nodeTypes = {
  custom: CustomNode,
};
