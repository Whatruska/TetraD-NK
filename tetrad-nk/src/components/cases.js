import {graphql, Link, useStaticQuery} from "gatsby";
import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

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
                   url
                }
              }
            }
          }
        }`
    );
    const cases = data.allCases.edges.map(elem => elem.node);
    return (
        <Carousel autoplay>
            {cases ? cases.map(elem => {
                let img = elem.img[0];
                if (img.url.toString().indexOf("http") !== 0){
                    img.url = "http://localhost:1337" + img.url;
                }
                return (
                    <Link to={`/case/${elem.name.toString().toLowerCase()}`} style={{width: "100%"}}>
                        <div className="offer-case">
                            <img src={img.url} className="offer-case-img" alt={"Offer img"}/>
                            <div className="offer-case-main">
                                <h2 className="offer-case-main-title">{elem.name}</h2>
                                <div className="offer-case-main-desc">{elem.desc}</div>
                                <button className="offer-case-main-btn">Читать подробнее</button>
                            </div>
                        </div>
                    </Link>
                )
            }) : <></>}
        </Carousel>
    )
}
