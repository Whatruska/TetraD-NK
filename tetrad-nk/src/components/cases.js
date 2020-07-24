import {graphql, Link, useStaticQuery} from "gatsby";
import React from "react";

export default function Cases() {
    const data = useStaticQuery(graphql`
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
                tasks {
                  task
                }
                img {
                   name
                }
              }
            }
          }
        }`
    );
    const cases = data.allCases.edges.map(elem => elem.node);
    return (
        <>
            {cases ? cases.map(elem => {
                return (
                    <Link to={`/case/[case]`} as={`/case/${elem.name}`} style={{width: "100%"}}>
                        <div className="offer-case">
                            <img src={elem.img[0].name} className="offer-case-img" alt={"Offer img"}/>
                            <div className="offer-case-main">
                                <h2 className="offer-case-main-title">{elem.name}</h2>
                                <span className="offer-case-main-desc">{elem.desc}</span>
                                <button className="offer-case-main-btn">Читать подробнее</button>
                            </div>
                        </div>
                    </Link>
                )
            }) : <></>}
        </>
    )
}
