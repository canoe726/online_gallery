import React, { Component } from 'react';

class BatchNote extends Component {
    constructor(props) {
        super(props);

        this.initBatchNote = this.initBatchNote.bind(this);
    }

    componentDidMount() {
        this.initBatchNote(this.props.data);
    }

    componentDidUpdate() {
        this.initBatchNote(this.props.data);
    }

    render() {
        return (
            <div className="batch-note"></div>
        );
    }

    initBatchNote(data) {
        if(Object.keys(data).length === 0) return;

        const batchNote = document.querySelector('.batch-note');
        batchNote.innerHTML = '';

        const content = document.createElement('div');
        content.className = 'content';
        content.innerText = data.caption.comment;
        
        const contentAuthor = document.createElement('div');
        contentAuthor.className = 'content author';
        contentAuthor.innerText = data.caption.author + ' ' + data.caption.title  + ' ' + data.caption.material  + ' ' + data.caption.size  + ' ' + data.caption.year;
    
        batchNote.appendChild(content);
        batchNote.appendChild(contentAuthor);

        this.activeContentAnimation();
    }

    activeContentAnimation() {
        const contents = document.querySelectorAll('.batch-note .content');
        contents.forEach((content, idx) => {
            setTimeout(() => {
                content.classList.add('active');
            }, 500*idx);
        });
    }   
    
    initContentAnimation() {
        const contents = document.querySelectorAll('.batch-note .content');
        contents.forEach(content => {
            content.classList.remove('active');
        });
    }   
}

export default BatchNote;