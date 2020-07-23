import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";
import { Link } from "gatsby";

export default function Offer() {
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
    <div className="offer">
        <div className="offer-main">
            <p>Дешевлее на <b>20%</b> рынка.</p>
            <p>Делаем сайт <b>от 3-х дней.</b></p>
            <p>Почему быстро? Технологии которые использует <b>Facebook.</b></p>
            <p>Пишем быстро, потому что исползуем <b>Python + JS.</b></p>
            <p>Пишем качественно, потому что <b>рисуем макеты</b>, пишем <b>сценарии пользователя</b>, планируем разработку.</p>
        </div>
        {cases ? cases.map(elem => {
            return (
                <Link to={`/case/[case]`} as={`/case/${elem.name}`} style={{width: "100%"}}>
                    <div className="offer-case">
                        <img src={elem.img[0].name} className="offer-case-img" alt={"Offer img"}/>
                        <div className="offer-case-main">
                            <div className="offer-case-main-title">{elem.name}</div>
                            <div className="offer-case-main-desc">{elem.desc}</div>

                                <button className="offer-case-main-btn">Читать подробнее</button>

                        </div>
                    </div>
                </Link>
            )
        }) : <></>}
        <motion.button
            className="offer-callback-btn"
        >Обсудить проект</motion.button>
    </div>
    )
}
