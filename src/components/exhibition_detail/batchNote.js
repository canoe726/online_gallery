import React, { Component } from 'react';

class BatchNote extends Component {
    componentDidMount() {
        this.initBatchNote(this.props.data);
    }

    componentDidUpdate() {
        this.initBatchNote(this.props.data);
    }

    render() {
        return (
            <div className="batch-note active">
                <div className="nav-wrapper">
                    <div className="nav-btn active">
                        <span className="light"></span>
                        <span>Beer</span>
                    </div>
                    <div className="nav-btn">
                        <span className="light"></span>
                        <span>Wine</span>
                        </div>
                    <div className="nav-btn">
                        <span className="light"></span>
                        <span>Lemonade</span>
                    </div>
                    <div className="nav-btn">
                        <span className="light"></span>
                        <span>Lemonade</span>
                    </div>
                    <div className="nav-btn">
                        <span className="light"></span>
                        <span>Lemonade</span>
                    </div>
                    <div className="nav-btn">
                        <span className="light"></span>
                        <span>Lemonade</span>
                    </div>
                    <div className="nav-btn">
                        <span className="light"></span>
                        <span>Lemonade</span>
                    </div>
                    <div className="nav-btn">
                        <span className="light"></span>
                        <span>Lemonade</span>
                    </div>
                </div>
                <div className="content-wrapper">
                    <ul className="contents">
                        <li className="active">
                            <div>
                                Beer is the world's oldest[1][2][3] and most widely consumed[4] alcoholic drink; it is the third most popular drink overall, after water and tea.[5] The production of beer is called brewing, which involves the fermentation of sugars, mainly derived
                                from cereal grain starches—most commonly from malted barley, although wheat, maize (corn), and rice are widely used.[6] Most beer is flavoured with hops, which add bitterness and act as a natural preservative, though other flavourings such as
                                herbs or fruit may occasionally be included. The fermentation process causes a natural carbonation effect, although this is often removed during processing, and replaced with forced carbonation.[7] Some of humanity's earliest known writings refer
                                to the production and distribution of beer: the Code of Hammurabi included laws regulating beer and beer parlours,[8] and "The Hymn to Ninkasi", a prayer to the Mesopotamian goddess of beer, served as both a prayer and as a method of remembering
                                the recipe for beer in a culture with few literate people.[9][10]
                            </div>
                        </li>
                        <li>
                            <div>
                                A vine (Latin vīnea "grapevine", "vineyard", from vīnum "wine") in the narrowest sense is the grapevine (Vitis), but more generally it can refer to any plant with a growth habit of trailing or scandent (that is, climbing) stems, lianas or runners.
                                The word also can refer to such stems or runners themselves, for instance when used in wicker work.[1][2] In the United Kingdom, the term "vine" applies almost exclusively to the grapevine. The term "climber" is used for all climbing plants.[3]
                            </div>
                        </li>
                        <li>
                            <div>
                                Lemonade is any of various sweetened beverages found around the world, all characterized by lemon flavor. Most lemonade varieties can be separated into two distinct types: cloudy and clear; each is known simply as "lemonade" (or a cognate) in countries
                                where dominant.[1] Cloudy lemonade, generally found in North America and India, is a traditionally homemade drink made with lemon juice, water, and sweetener such as cane sugar or honey.[2] Found in the United Kingdom, Ireland, South Africa, Australia,
                                and New Zealand, clear lemonade is a lemon flavoured carbonated soft drink. Not to be confused with Sprite a lemon-lime flavored, soft drink.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    initBatchNote(data) {
        
    }
}

export default BatchNote;