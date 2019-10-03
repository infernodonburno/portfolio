import React from 'react';
import { Parallax, Background } from 'react-parallax';

const BackgroundImage = () => (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={10}
            bgImage={require(url('https://i.imgur.com/7Wiy7sh.jpg'))}
            bgImageAlt="the cat"
            strength={200}
        >
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            <div style={{ height: '200px' }} />
        </Parallax>
    </div>
)
    export default BackgroundImage