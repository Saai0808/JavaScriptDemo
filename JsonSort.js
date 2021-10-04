{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww25100\viewh15700\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function sortNodesForInsert(inputJson) \{\
  let nodes = JSON.parse(inputJson);\
  let map = \{\},	rootNodes = [];\
\
  for (let node of nodes) \{\
    if (node.parent_id == null) \{\
      	rootNodes.push(node);\
    \} else \{\
	if(map[node.parent_id])\
		map[node.parent_id].push(node);\
	else\
		map[node.parent_id] = [ node ];\
    \}\
  \}\
  \
  properJsonOutput = [];\
  for (let root of rootNodes) \{\
      properJsonOutput.push(root);\
      \
      var childNodes = map[root.id];\
      if(!childNodes)\
        return;\
    \
    for(childNode of childNodes)\{\
        sortNodes(childNode, map, properJsonOutput);	\
    \}\
  \}\
\
  return properJsonOutput;\
\};\
\
function sortNodes(category, map, sortedNodes) \{\
	sortedNodes.push(category);\
	\
	var childNodes = map[category.id];	\
	\
	if(!childNodes) \
		return;\
		\
	for(var childNode of childNodes) \
		sortNodes(childNodes, map, sortedNodes);	\
\}}