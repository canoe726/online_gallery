import React, { Component } from 'react';

import '../../style/notice/notice.scss';

import Footer from '../footer/footer';
import CollapsibleList from './collapsible_list';

class Notice extends Component {
    render() {
        return(
            <div className="notice-wrapper">
                <div className="category-wrapper">
                    <ul>
                        <li className="active">
                            <div className="btn">First</div>
                        </li>
                        <li>
                            <div className="btn">Second</div>
                        </li>
                        <li>
                            <div className="btn">Thrid</div>
                        </li>
                    </ul>
                </div>

                <CollapsibleList
                ></CollapsibleList>
                
                <Footer></Footer>
            </div>
        );
    }
}

export default Notice;