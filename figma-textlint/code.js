figma.showUI(__html__);
figma.ui.onmessage = msg => {
    if (msg.type === 'execute') {
        const textNodes = figma.currentPage.findAll(node => node.type === 'TEXT');
        textNodes.forEach(node => {
            const characters = node.characters;
            figma.ui.postMessage({ type: 'send-text', data: characters });
        });
    }
    if (msg.type === 'complete') {
        figma.closePlugin();
    }
};
