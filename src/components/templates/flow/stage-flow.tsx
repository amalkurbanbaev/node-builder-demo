import { useCallback } from "react";

import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  OnConnect,
  ReactFlow,
  SelectionMode,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { useLocalStorage } from "usehooks-ts";

import { edgeTypes, initialEdges } from "@/components/edges";
import { initialNodes, nodeTypes } from "@/components/nodes";
import { useTheme } from "@/components/providers/theme-provider";

export default function StageFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback((connection) => setEdges((edges) => addEdge(connection, edges)), [setEdges]);

  const { theme } = useTheme();

  const [figmaMode] = useLocalStorage<"click" | "drag">("figma-mode", "click");
  const [showGrid] = useLocalStorage<boolean>("show-grid", true);
  const [showMinimap] = useLocalStorage<boolean>("show-minimap", true);

  const panProps =
    figmaMode === "drag"
      ? {
          panOnScroll: true,
          selectionOnDrag: true,
          panOnDrag: [1, 2],
          selectionMode: SelectionMode.Partial,
        }
      : null;

  return (
    <ReactFlow
      colorMode={theme}
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      {...panProps}
    >
      {showGrid && (
        <Background gap={12} bgColor="var(--muted)" color="var(--muted-foreground)" className="opacity-50" size={1.1} />
      )}
      {showMinimap && <MiniMap />}
      <Controls />
    </ReactFlow>
  );
}
