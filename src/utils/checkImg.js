 import NoImg from '../images/noImg.jpg'
 
 export const checkImg = img =>
`${img ? `https://image.tmdb.org/t/p/original/${img}` : `${NoImg}`}`;