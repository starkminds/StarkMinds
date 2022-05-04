import Canvas from './Canvas';
import BackgroundGlobe from '../BackgroundGlobe';

function HowWeThink() {
    return (
        <div className="section section-howwethink">
            <h2>How We Think</h2>
            <p>
                Outcomes over egos<br></br>
                Measure Twice, Cut once <br></br>
                Talk it out, hit the books <br></br>
            </p>
            <h3>Connect the dots</h3>
            <div className="drawing-canvas">
                <Canvas />
            </div>
            <BackgroundGlobe />
        </div>
    )
}

export default HowWeThink;