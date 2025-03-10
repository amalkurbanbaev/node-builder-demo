import { Handle, Position } from "@xyflow/react";
import { Input } from "../ui/input";

export function InputNode() {
  return (
    <div>
      <Handle type="source" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <Handle type="source" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div>Input</div>
      <div>
        <Input />
      </div>
    </div>
  );
}
