import React from 'react';
import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        let track = this.props.tracks.map((track, id) =>
            <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} />
        );
        return (
            <div className="TrackList">
                {track}
            </div>
        );
    }
}

export default TrackList;
