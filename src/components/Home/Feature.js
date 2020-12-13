import IlustrationFeature from '../../assets/images/ilustration-feature.png'
import CardItemFeature from '../Other/CardItemFeature'
import SectionSubtitle from '../Other/SectionSubtitle';
import SectionTitle from '../Other/SectionTitle';

const Feature = (props) => {
    return (
        <div className="feature">
            <div className="feature-caption hero-caption">
                Every day your home faces countless potential threats. Every day you face countless potential headaches. A small problem can become a major disaster. Early warning signs exist but often you can't hear or see them.
            </div>
            <div className="feature-content">
                <div className="feature-content-ilustrator">
                    <img src={IlustrationFeature} alt={"ilustration-feature"} />
                </div>
                <div className="feature-content-body">
                    <SectionSubtitle text="FEATURES"/>
                    <SectionTitle text="Meet Simphome"/>
                    <p className="section-paragraph">
                        The most comprehensive smart solution to home maintenance. All it takes is a simple and affordable sensor installation by one of our Siphome certified technicians.
                    </p>
                    <div className="item-feature-group">
                        {
                            props.dataFeature.map((item,key) => (
                                <CardItemFeature key={key} img={item.img} titleText={item.title} bodyText={item.body} /> 
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;