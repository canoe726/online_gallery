import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.debouncer = undefined;

        this.whenTypeInput = this.whenTypeInput.bind(this);
        this.searchInputFocus = this.searchInputFocus.bind(this);
        this.searchInputBlur = this.searchInputBlur.bind(this);
    }

    componentDidMount() {
        // search btn 애니매이션
        const searchInput = document.querySelector('#input_search');
        searchInput.addEventListener('input', this.whenTypeInput);
        searchInput.addEventListener('focus', this.searchInputFocus);
        searchInput.addEventListener('blur', this.searchInputBlur);
    }

    componentWillUnmount() {
        // search btn 애니매이션
        const searchInput = document.querySelector('#input_search');
        searchInput.removeEventListener('focus', this.searchInputFocus);
        searchInput.removeEventListener('blur', this.searchInputBlur);
    }

    render() {
        return (
            <div className="search-wrapper">
                <label className="search" htmlFor="input_search">
                    <input id="input_search" type="text"></input>
                </label>
            </div>
        );
    }

    whenTypeInput(e) {
        if(this.debouncer) {
            clearTimeout(this.debouncer);
        } 
        this.debouncer = setTimeout(() => {
            // 자동으로 데이터 갱신 처리
            console.log(e.target.value)
        }, 500);
    }

    searchInputFocus(e) {
        const target = e.target.parentNode;
        target.classList.add('active');
    }

    searchInputBlur(e) {
        const target = e.target;
        const value = target.value;
        if(value.length === 0) {
            const parent = target.parentNode;
            parent.classList.remove('active');
        }
    }
}

export default Search;