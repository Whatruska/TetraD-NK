import React, {useState} from "react"

import Layout from "../components/layout"
import Offer from "../components/offer";
import Cases from "../components/cases";
import CTA from "../components/cta";
import 'antd/dist/antd.css';
const Index = ({handleSubmit}) => {
    return (
        <main>
            <Offer handleSubmit={handleSubmit}/>
            <Cases/>
            <CTA handleSubmit={handleSubmit}/>
        </main>
    )
}
const IndexPage = () => {
    return(
        <Layout title="Главная">
            <Index/>
        </Layout>
    )
}

export default IndexPage
