import { useCallback } from "react";

import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  OnConnect,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import { edgeTypes, initialEdges } from "@/components/edges";
import { initialNodes, nodeTypes } from "@/components/nodes";

export default function StageFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback((connection) => setEdges((edges) => addEdge(connection, edges)), [setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background gap={12} bgColor="var(--muted)" color="var(--muted-foreground)" className="opacity-50" size={1.1} />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
