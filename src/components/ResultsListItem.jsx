import React, { useEffect, useRef } from 'react';
import {PlayCircleFilled} from '@ant-design/icons';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
  } from "react-router-dom";
const ResultsListItem = (props) => {
	const { id, results, selectResults } = props;

	const resultCardRef = useRef();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (id === resultCardRef.current.value) {
				return selectResults(id);
			}
		});
		return () => {
			clearTimeout(timer);
		};
	}, [id, selectResults]);

	const handleClick = (e) => {
		if (e.target.value === resultCardRef.current.value) {
			let ans=selectResults(e.target.value);
			console.log(ans)
		}
	};
	
	function ellipsify (str,n) {
		return str?.length>n?str.substr(0,n-1)+"...":str;
	 }
	return (
		
		<div
			ref={resultCardRef}
			id={`results-list-${id}`}
			className="results-list-item card"
			/*onClick={handleClick}*/
			value={id}
		>
			<div className="results-list-item-content ">
				<div className="results-list-item-section music-artwork-section">
					<img
						src={results.artworkUrl100}
						alt={`${results.collectionName} cover art`}
						className="music-artwork-image"
					/>
					
					
				</div>
				<div className="play-icon" ref={resultCardRef} onClick={handleClick}>
					<PlayCircleFilled style={{fontSize:'28px',marginLeft:'-10px'}}/>
				</div>
				          <div className="results-list-item-section results-details">
					<div className="results-details-content card-body">
						<h5
							ref={resultCardRef}
							className="results-details-section music-trackName card-title"
						
							value={id}
						>
							{ellipsify(results.trackName,20)}
						</h5>
						<p className="results-details-section music-artistName card-text" >
						{ellipsify(results.artistName,10)}
						</p>
						<p className="results-details-section music-collection card-text">
							{ellipsify(results.collectionName,20)}
						</p>
					</div>
				</div>
				
			
			</div>
			
		</div>
		
	);
};

export default ResultsListItem;