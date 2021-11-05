import React from 'react';
import WikiEntry from '../WikiEntry/WikiEntry';
import './WikiEntries.css';

class WikiEntries extends React.Component {
    render() {
        return (
            <div className='wikiEntries'>
                {
                    this.props.wikiEntries.map((entry) => {
                        return <WikiEntry key={entry.id} entry={entry} />
                    })
                }
            </div>
        )
    }
}
export default WikiEntries;