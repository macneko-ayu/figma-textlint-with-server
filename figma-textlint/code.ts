figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if (msg.type === 'execute') {
    const textNodes = figma.currentPage.findAll(node => node.type === 'TEXT');
    textNodes.forEach(node => {
      const characters = (node as TextNode).characters;
      const nodeId = node.id;
      figma.ui.postMessage({ type: 'send-text', fileKey: figma.fileKey, nodeId: nodeId, characters: characters })
    })
  }

  if (msg.type === 'complete') {
    figma.closePlugin();
  }
};
