function sortNodesForInsert(inputJson) {
  let nodes = JSON.parse(inputJson);
  let map = {},	rootNodes = [];

  for (let node of nodes) {
    if (node.parent_id == null) {
      	rootNodes.push(node);
    } else {
	if(map[node.parent_id])
		map[node.parent_id].push(node);
	else
		map[node.parent_id] = [ node ];
    }
  }
  
  properJsonOutput = [];
  for (let root of rootNodes) {
      properJsonOutput.push(root);
      
      var childNodes = map[root.id];
      if(!childNodes)
        return;
    
    for(childNode of childNodes){
        sortNodes(childNode, map, properJsonOutput);	
    }
  }

  return properJsonOutput;
};

function sortNodes(category, map, sortedNodes) {
	sortedNodes.push(category);
	
	var childNodes = map[category.id];	
	
	if(!childNodes) 
		return;
		
	for(var childNode of childNodes) 
		sortNodes(childNodes, map, sortedNodes);	
}
