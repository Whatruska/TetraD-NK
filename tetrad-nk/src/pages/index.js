import React from "react"

import Layout from "../components/layout"
import Offer from "../components/offer";

const IndexPage = () => {
    return(
        <Layout title="Главная">
            <main>
                <Offer/>
            </main>
        </Layout>
    )
}

export default IndexPage
