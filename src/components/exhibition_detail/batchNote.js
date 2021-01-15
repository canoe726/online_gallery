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
                <div className="note-wrapper">
                    <div className="author">작가명</div>
                    <div className="title">제목명</div>
                    <div className="material">재료</div>
                    <div className="size">크기</div>
                    <div className="year">제작년도</div>
                </div>
            </div>
        );
    }

    initBatchNote(data) {
        
    }
}

export default BatchNote;