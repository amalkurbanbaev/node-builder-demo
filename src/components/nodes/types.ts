import { LucideIcon } from "lucide-react";

import type { BuiltInNode, Node } from "@xyflow/react";

export type PositionLoggerNode = Node<{ label: string }, "position-logger">;
export type AppNode = BuiltInNode | PositionLoggerNode | CustomNode | InputNode;
export type CustomNode = Node<{ label: string; icon?: LucideIcon }, "custom">;
export type InputNode = Node<{ label: string }, "input">;
