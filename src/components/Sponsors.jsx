import { sponsors } from "@/data/sponsors";

function Sponsors() {
    return (
        <>
            <div className="sponsorsSection">
            <h1 className="sponsorTitle">Our Sponsors</h1>
            <p className="sponsorIntro">
                Powered by partners that keep the hackathon moving forward.
            </p>
                <div className="sponsors">
                    <div className="sponsorSlider">
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.id} className="sponsorItem">
                        <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                            <img src={sponsor.logo} alt={sponsor.name} />
                        </a>
                        </div>
                    ))}
                    {sponsors.map((sponsor) => (
                        <div key={`duplicate-${sponsor.id}`} className="sponsorItem">
                        <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                            <img src={sponsor.logo} alt={sponsor.name} />
                        </a>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sponsors;
