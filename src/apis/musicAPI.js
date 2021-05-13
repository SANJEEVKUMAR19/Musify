
import { create } from 'apisauce';
const api = create({ baseURL: 'https://itunes.apple.com/' });

export const searchMusic = async (searchTerm, entityType) => {
	return await api.get(
		`search?term=${searchTerm}&media=music&entity=${entityType}&limit=20`,
	);
};

export const searchArtists = async (searchTerm) => {
	return await api.get(
		`search?term=${searchTerm}&media=music&entity=musicArtist`,
	);
};

export const searchAlbums = async (searchTerm) => {
	return await api.get(
		`search?term=${searchTerm}&media=music&entity=album`,
	);
};

export const searchSongs = async (searchTerm) => {
	return await api.get(
		`search?entity=musicTrack&limit=20&term=${searchTerm}`,
		/*`search?term=${searchTerm}&media=music&entity=musicArtist`,*/
	);
};