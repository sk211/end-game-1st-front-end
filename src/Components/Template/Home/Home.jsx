import React from 'react'
import Appiment from '../Appioment/Appiment'
import Benifit from '../Benifit/Benifit'
import HeadderBottom from '../Header/Headder_bottom'
import Heart from '../Heart-sectoin/Heart'

export default function Home() {
    return (
        <div>
            <HeadderBottom />
            <Appiment />
            <Heart />
            <Benifit />
        </div>
    )
}
