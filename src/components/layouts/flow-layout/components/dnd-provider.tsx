import { useCallback } from "react";

import { DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { Node, useReactFlow } from "@xyflow/react";

let id = 0;
const getId = () => `dndnode_${id++}`;

export function DndProvider({ children }: { children: React.ReactNode }) {
  const { screenToFlowPosition, getZoom, getViewport } = useReactFlow();
  const { addNodes } = useReactFlow();

  // Настраиваем сенсоры для более точного перетаскивания
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // Минимальное расстояние для активации перетаскивания
      },
    }),
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active } = event;

      if (!active || !active.data.current) {
        return;
      }

      const type = active.data.current.type || "default";

      // Берём координаты из события PointerEvent
      const { clientX, clientY } = event.activatorEvent as PointerEvent;

      // Используем встроенный метод React Flow для корректного преобразования координат с учетом viewport и zoom
      const position = screenToFlowPosition({ x: clientX, y: clientY });
      const simplePosition = { x: clientX, y: clientY };

      const newNode: Node = {
        id: getId(),
        type: "input",
        position: simplePosition,
        data: {
          label: `${type} node`,
          ...active.data.current,
        },
      };

      addNodes(newNode);

      console.log(event);
    },
    [addNodes, screenToFlowPosition],
  );

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      {children}
    </DndContext>
  );
}
