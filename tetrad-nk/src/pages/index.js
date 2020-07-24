import React from "react"

import Layout from "../components/layout"
import Offer from "../components/offer";
import Cases from "../components/cases";

const IndexPage = () => {
    return(
        <Layout title="Главная">
            <main>
                <Offer/>
                <Cases/>
            </main>
        </Layout>
    )
}

export default IndexPage
