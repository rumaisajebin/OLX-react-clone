import React from 'react'

import Header from '../Components/Header/Header.jsx'
import View from '../Components/View/View.jsx'
import Footer from '../Components/Footer/Footer.jsx'

function ViewPost(props) {
    return (
        <div>
            <Header />
            <View/>
            <Footer banner={false} />
        </div>
    )
}

export default ViewPost
