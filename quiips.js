// Assuming 'node' is a reference to an HTML element
const originalNode = document.getElementById('originalElement');

// Create a copy of the original node
const copy = originalNode.cloneNode(true);

// Now 'copy' contains a deep clone of the original node, including all of its children and their attributes
