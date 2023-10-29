import React from "react";
import './style.css'
import { Link, NavLink, useLocation } from 'react-router-dom';

const TreeNode=({ node, level, onClick })=> {
  const location = useLocation();
console.log(location.path,location.pathname)
  const indent = "  ".repeat(level);
  return (
    <div className={`${node.link&& location.pathname == node.link ? 'activeParent' : ''} ${level==0&&'linkParent'}`}>
      <NavLink  to={node.link||'/comming'}  activeClassName="active"
      className={`${node.children ? "main" : "child"} `}

        style={{ marginLeft: `${level*15}px` }}>
        {indent}
        {node.name}
      </NavLink>
      {node.children && (
        <div >
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} level={level + 1} onClick={onClick} />
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











