import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import SidebarItem from "./SidebarItem";

function Demo({ item, ids, setData }) {
  return (
    <DragDropContext
      onDragEnd={(param) => {
        const srcI = param.source.index;
        const desI = param.destination.index;
        item.childrens.splice(desI, 0, item.childrens.splice(srcI, 1)[0]);
      }}
    >
      <Droppable droppableId="droppable-1" >
        {(provided, _) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {item.childrens.map((child, index) => (
              <Draggable key={child.id} draggableId={"droppable-" + child.ordre} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {child.id !== ids ? (
                      
                      <SidebarItem
                        key={index}
                        item={child}
                        setData={setData}
                        style={{ boxShadow: snapshot.isDragging ? "0 0 .4rem #666" : "none" }}
                      />

                    ) : (
                      ""
                    )}

                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Demo;
