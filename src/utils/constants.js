export const HAMBERGER_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg==';
export const LOGO = 'https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg';
export const SEARCH_ICON = 'https://cdn2.iconfinder.com/data/icons/clean-simple/75/search-1024.png';
export const USER_ICON = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

// APIs
export const GET_MOST_POPULAR_VIDEOS = 
'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+ process.env.REACT_APP_YOUTUBE_API_KEY;

export const SEARCH_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&q=';

export const getSearchAPI = (searchText) => SEARCH_API + searchText + '&key=' + process.env.REACT_APP_YOUTUBE_API_KEY;

export const SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const getVideoByIdURL = (id) =>
'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id='+ id +'&key='+ process.env.REACT_APP_YOUTUBE_API_KEY;

export const BTN_NAMES_LIST = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Live' },
    { id: 3, name: 'Games' },
    { id: 4, name: 'Coding' },
    { id: 5, name: 'Marvel' },
    { id: 6, name: 'Cooking' },
    { id: 7, name: 'Comedy' },
    { id: 8, name: 'Music' },
    { id: 9, name: 'Travel' },
    { id: 10, name: 'Chess' },
    { id: 11, name: 'Sports' },
    { id: 12, name: 'Movies' }
  ];

