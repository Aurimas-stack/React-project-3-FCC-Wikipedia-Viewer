import React from 'react';
import './WikiEntry.css';
import he from '../../../node_modules/he/he';

class WikiEntry extends React.Component {
    render() {
        return (
                <a className='wikientry' href={"https://en.wikipedia.org/?curid=" + this.props.entry.id} target="_blank" rel="noreferrer noopener">
                    <h3 className='title'>{this.props.entry.title}</h3>
                    <p className='text'>{he.decode(this.props.entry.text)}</p>
                </a>
        )
    }
}
export default WikiEntry;