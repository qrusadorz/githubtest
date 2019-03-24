import config from '../configs/site'

export const titleEffectCallback = (props) => {
    document.title = `${config.name}`;
    window.gtagPageview(props.location.pathname);
    const tag = { name: "Description", nodeName: "META" };
    for (const node of document.head.childNodes) {
        if (node.name === tag.name && node.nodeName === tag.nodeName) {
            node.content = config.description;
            return;
        }
    }
};

export const schemaEffectCallback = (timestamp) => {
    console.log('timestamp:', timestamp);
    for (const node of document.head.childNodes) {
        if (node.type === "application/ld+json") {
            const json = config.getSchemaJson(timestamp);
            node.text = JSON.stringify(json);
            return;
        }
    }
};

export const initScrollPosition = () => {
    // page遷移後のスクロール復元
    window.scrollTo(0, 0);
}

export default { titleEffectCallback, schemaEffectCallback, initScrollPosition };