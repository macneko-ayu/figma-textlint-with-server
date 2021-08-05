figma.showUI(__html__);

figma.ui.onmessage = msg => {
  if (msg.type === 'execute') {
    const textNodes = figma.currentPage.findAll(node => node.type === 'TEXT');
    const textInfos = textNodes.map(node => {
      return {
        fileKey: figma.fileKey,
        characters: (node as TextNode).characters,
        nodeId: node.id
      };
    });
    figma.ui.postMessage({ type: 'send-text', textInfos })
  }

  if (msg.type === 'complete') {
    figma.closePlugin();
  }
};
