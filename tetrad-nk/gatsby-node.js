/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fetch = require(`node-fetch`);

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const resp = await fetch(process.env.GATSBY_API_URL + 'cases');
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
            document : elem.document,
            link : elem.link,
            id: createNodeId(`Case-${elem.title}`),
            internal: {
                type: "Cases",
                contentDigest: createContentDigest(elem),
            },
        }
        actions.createNode(node);
    })
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const path = require(`path`);
    const blogPostTemplate = path.resolve(`src/pages/case/case.js`)
    return graphql(`        
    query MyQuery {
        allCases {
            edges {
                node {
                    name
                    desc
                    other
                    price
                    target
                    solution
                    time
                    link
                    document {
                        url
                        name
                    }
                    tasks {
                        task
                    }
                    img {
                        name
                    }
                }
            }
        }
    }`, { limit: 1000 }).then(result => {
        if (result.errors) {
            throw result.errors
        }

        //console.log(result);
        result.data.allCases.edges.map(elem => elem.node).forEach(elem => {
            console.log(`/case/${elem.name.toString().toLowerCase()}`)
            createPage({
                path: `/case/${elem.name.toString().toLowerCase()}`,
                component: blogPostTemplate,
                context: {
                    elem
                },
            })
        })
    })
}
