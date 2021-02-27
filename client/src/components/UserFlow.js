import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();
const onNodeContextMenu = (event, node) => {
  event.preventDefault();
  console.log('context menu:', node);
};

const initialElements = [

  {
    id: 'horizontal-2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Application Received' },
    position: { x: 0, y: 0 },
    style: {
      background: '#ffffff',
      color: '#28527A',
      border: '3px solid #28527A',
      width: 150,
      height: 60,
    }
  },
  {
    id: 'horizontal-3',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Background Check Completed' },
    position: { x: 200, y: 0},
    style: {
      background: '#FBEEAC',
      color: '#28527A',
      border: '3px solid #28527A',
      width: 150,
      height: 60,
    }
  },
  {
    id: 'horizontal-4',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Reference Check Completed' },
    position: { x: 400, y: 0 },
    style: {
      background: '#F4D160',
      color: '#28527A',
      border: '3px solid #28527A',
      width: 150,
      height: 60,
    }
  },
  {
    id: 'horizontal-5',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Applicant Approved' },
    position: { x: 600, y: 0 },
    style: {
      background: '#28527A',
      color: '#ffffff',
      border: '3px solid #F4D160',
      width: 150,
      height: 60,
    }
  },
  {
    id: 'horizontal-e1',
    source: 'horizontal-2',
    type: 'smoothstep',
    target: 'horizontal-3',
    animated: true,
  },
  {
    id: 'horizontal-e2',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-4',
    animated: true,
  },
  {
    id: 'horizontal-e3',
    source: 'horizontal-4',
    type: 'smoothstep',
    target: 'horizontal-5',
    animated: true,
  }
];
const UserFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const changeClassName = () => {
    setElements((elms) =>
      elms.map((el) => {
        if (el.type === 'input') {
          el.className = el.className ? '' : 'dark-node';
        }
        return { ...el };
      })
    );
  };
  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      selectNodesOnDrag={false}
      onNodeContextMenu={onNodeContextMenu}
      nodesDraggable={false}
      paneMoveable={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
    >
    </ReactFlow>
  );
};
export default UserFlow;