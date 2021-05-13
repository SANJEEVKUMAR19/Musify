import React,{ useState, useEffect} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import * as actions from '../store/actions/index';
import { useDispatch,useSelector } from 'react-redux';

import '../styles/components/musicDetails.css';
import '../styles/components/playerAudio.css'
const MusicDetails = () => {
	const dispatch = useDispatch();
	var selectedSong = useSelector((state) => state.song);
	let i = selectedSong.trackId;
	const songs = useSelector((state) => state.filteredSongs);
  
useEffect(() => {
	const timer = setTimeout(() => {

	});
	return () => {
		clearTimeout(timer);
	};
}, [selectedSong]);

const handleClick2 = (e) => {
	
 selectedSong  =  dispatch(actions.nextSong(i));
 console.log(selectedSong)		
	}

const handleClick1 = (e) => {
	
	selectedSong  =  dispatch(actions.prevSong(i));
	console.log(selectedSong)		
  }

	return (
		<div className="music-details container-fluid">
			
			<div className="music-details-content ">
				{selectedSong && (
				<div>
						
					 <div
						 id={`music-details-${selectedSong.trackId}`}
						 className="music-details-card card"
						 style={{backgroundImage: "url(" + selectedSong.artworkUrl100  + ")"}}
					 >
					</div>	
					 <div className="content">
						<img
							src={selectedSong.artworkUrl100}
							alt={`${selectedSong.collectionName} artwork`}
							className="music-details-artwork card-img-top"
						/>

						<div className="music-details-body card-body">
							<h5 className="song-title card-title">
								{selectedSong.trackName} | {selectedSong.artistName}
							</h5>
							<p className="release-date card-text">
								{`${selectedSong.collectionName} (${new Date(
									selectedSong.releaseDate,
								).getFullYear()})`}
							</p>
							
						</div>
						<div className="music-details-footer card-footer">
							<div className="music-details-player">
								<AudioPlayer
									src={selectedSong.previewUrl}
									onPause
									onSeeking
									autoPlay
									showSkipControls
									onClickNext={handleClick2}
									onClickPrevious={handleClick1}
									controls
									showJumpControls={false}
									className="music-player"
								/>
							    
							</div>
						</div>
						
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default MusicDetails;