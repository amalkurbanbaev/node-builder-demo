import { useCallback, useRef } from "react";

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
  useReactFlow,
} from "@xyflow/react";
import { useLocalStorage } from "usehooks-ts";

import { initialEdges } from "@/components/edges";
import { useDnD } from "@/components/layouts/flow-layout/components/dnd-provider";
import { initialNodes, nodeTypes } from "@/components/nodes";
import { useTheme } from "@/components/providers/theme-provider";

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function StageFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback((connection) => setEdges((edges) => addEdge(connection, edges)), [setEdges]);
  const { screenToFlowPosition } = useReactFlow();
  const [type, nodeData] = useDnD();
  const reactFlowWrapper = useRef(null);

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

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      // check if the dropped element is valid
      if (!type || !nodeData) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type: "custom" as const,
        position,
        data: {
          label: nodeData.title || `${type} node`,
          icon: nodeData.icon,
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes, type, nodeData],
  );

  return (
    <div className="flex h-full w-full flex-col" ref={reactFlowWrapper}>
      <ReactFlow
        colorMode={theme}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        nodeTypes={nodeTypes}
        onDragOver={onDragOver}
        fitView
        {...panProps}
      >
        {showGrid && (
          <Background
            gap={12}
            bgColor="var(--muted)"
            color="var(--muted-foreground)"
            className="opacity-50"
            size={1.1}
          />
        )}
        {showMinimap && <MiniMap />}
        <Controls />
      </ReactFlow>
    </div>
  );
}
