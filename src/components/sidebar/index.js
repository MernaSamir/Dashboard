import React, { useState } from "react";
import './style.css'
import { Link, NavLink, useLocation } from 'react-router-dom';

const TreeNode=({ node, level })=> {
  const [active,setActive]= useState()
  const location = useLocation();
console.log(active,node.name)
  const indent = "  ".repeat(level);
  return (
    <div key={node.name} className={`${!node.children&& location.pathname == node.link ? 'activeParent' : 'normal'} ${level===0&&'linkParent'}`}>
      <NavLink  to={node.link}  
      className={`${node.children ? "main" : "child"} `}

        style={{ marginLeft: `${level*15}px` }}>
        {indent}
        {node.name}
      </NavLink>
      {node.children && (
        <div >
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}


export default function Tree({ nodes, onSelect, level = 0 }) {
  return (
    <div className="left">
      {nodes?.map((node, index) => (
        <TreeNode key={index} node={node} level={level} onClick={onSelect} />
      ))}
    </div>
  );
}

// export default function Content({ selectedNode }) {
//   return <div>{selectedNode ? selectedNode.name : "Select a node."}</div>;
// }











