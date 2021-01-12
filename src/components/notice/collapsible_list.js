import React, { Component } from 'react';

class CollapsibleList extends Component {
    constructor(props) {
        super(props);

        this.toggleCollapsible = this.toggleCollapsible.bind(this);
    }

    componentDidMount() {
        const collapsibleList = document.querySelector('.collapsible-list');
        collapsibleList.addEventListener('click', this.toggleCollapsible);
    }

    componentWillUnmount() {
        const collapsibleList = document.querySelector('.collapsible-list');
        collapsibleList.removeEventListener('click', this.toggleCollapsible);
    }

    toggleCollapsible(e) {
        if(e.target.classList.contains('collapsible')) {
            const collapsibleBtn = e.target;
            const collapsibleContent = e.target.nextElementSibling;

            collapsibleBtn.classList.toggle('active');
            
            if(collapsibleContent.style.maxHeight) {
                collapsibleContent.style.maxHeight = null;
            } else {
                collapsibleContent.style.maxHeight = (collapsibleContent.scrollHeight + 40) + "px";
            }
        }
    }

    render() {
        return (
            <div className="collapsible-list">
                <div className="collapsible-wrapper">
                    <button className="collapsible">공지사항 1</button>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div className="collapsible-wrapper">
                    <button className="collapsible">공지사항 2</button>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div className="collapsible-wrapper">
                    <button className="collapsible">공지사항 3</button>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div className="collapsible-wrapper">
                    <button className="collapsible">공지사항 4</button>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div className="collapsible-wrapper">
                    <button className="collapsible">공지사항 5</button>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div className="collapsible-wrapper">
                    <button className="collapsible">공지사항 6</button>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CollapsibleList;