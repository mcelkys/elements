Templates.withoutKey('main', (config, register, controller) => {
    const node = Elements.create({ tag: 'main' });
    register(node, { node, cache: new Map });
    controller.onRender();
    return node;
});
