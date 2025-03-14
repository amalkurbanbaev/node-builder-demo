import type { NodeTypes } from "@xyflow/react";

import { CustomNode } from "./custom-node";
import { InputNode } from "./input-node";
import { PositionLoggerNode } from "./position-logger-node";
import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
  { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "wire" } },
  {
    id: "b",
    type: "position-logger",
    position: { x: -100, y: 100 },
    data: { label: "drag me!" },
  },
  { id: "c", position: { x: 100, y: 100 }, data: { label: "your ideas" } },
  {
    id: "d",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "i am here" },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "input": InputNode,
  "custom": CustomNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
