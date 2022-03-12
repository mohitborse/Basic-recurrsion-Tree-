import React from 'react';
import './style.css';
import React, { useState } from 'react';
import './style.css';
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'Child 1 parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf 1',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf 2',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'Child 2 parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: (
              <span
                style={{
                  color: '#1890ff',
                }}
              >
                sss
              </span>
            ),
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
  {
    title: 'parent 2',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0-2',
        key: '0-0-0',
        disabled: true,
        children: [],
      },
    ],
  },
];
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Tree Example</p>
      <Tree data={treeData}></Tree>
    </div>
  );
}

function Tree({ data }) {
  return (
    <>
      {data.map((x) => {
        return (
          <div>
            <TreeNode node={x}></TreeNode>
          </div>
        );
      })}
    </>
  );
}
function TreeNode({ node }) {
  const [childVisible, setChildVisible] = useState(false);
  const hasChild = node.children ? true : false;
  return (
    <>
      {hasChild && (
        <div
          onClick={(e) => {
            setChildVisible((v) => !v);
          }}
        >
          {node.title}
        </div>
      )}
      {!hasChild && <div>{node.title}</div>}
      {hasChild && childVisible && (
        <div className="childNode">
          <Tree data={node.children}></Tree>
        </div>
      )}
    </>
  );
}
