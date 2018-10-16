Templates.controllerFor('sidebar', instances => {

    return {

        onRender() {
            Articles.retrieve().then(articles => {
                const instance = instances.get();
                const state = Routes.get();
                if (instance && articles instanceof Array) {
                    const fragment = document.createDocumentFragment();
                    for (let data of articles) {
                        let node = Templates.render('menu-item', { data, state });
                        fragment.appendChild(node);
                    }
                    instance.menu.appendChild(fragment);
                }
            });
        }

    };
});
