/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fetch = require(`node-fetch`);

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const resp = await fetch('http://localhost:1337/cases');
    const cases = await resp.json();
    cases.forEach(elem => {
        console.log(elem);
        const node = {
            name: elem.title,
            desc : elem.desc ? elem.desc : "",
            target : elem.target ? elem.target : "",
            solution : elem.solution ? elem.solution : "",
            price : elem.price ? elem.price : "",
            time : elem.time ? elem.time : "",
            other : elem.other ? elem.other : "",
            tasks : elem.tasks ? elem.tasks : "",
            img : elem.img,
            id: createNodeId(`Case-${elem.title}`),
            internal: {
                type: "Cases",
                contentDigest: createContentDigest(elem),
            },
        }
        actions.createNode(node);
    })
}
