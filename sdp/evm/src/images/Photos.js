import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import NavBar from '../pages/Navbar';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Photos() {
  return (
    <ImageList
      sx={{ width: "100%", height: "50%" }}
      variant="quilted"
      cols={8}
      rowHeight={200}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 30, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://th.bing.com/th/id/R.4b0dd24947b9dd7cd7619c8a86ff3232?rik=NNeJpc2YeAW6UQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Du2udPYCUMM%2fT6G3teALTAI%2fAAAAAAAACRg%2fo40etQ9rv_0%2fs1600%2f107699-siddharth-and-divya-as-a-married-couple.jpg&ehk=uRIbdNfILv%2buFWYUx3DLubXJcTuGpvQjYxacq0lYwGg%3d&risl=&pid=ImgRaw&r=0',
    title: 'Marriage',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://th.bing.com/th/id/R.9178f83857a46eb19e847df99add55b3?rik=Of4dJ%2bROSw%2ftoQ&riu=http%3a%2f%2fwww.boatpartygoa.com%2fwp-content%2fuploads%2f2016%2f01%2fcelebration-party-ATBP126.jpg&ehk=n1De8cpatZP1xo3hbJ2jgjyIDfw0o5PXMNmHzxKdoaY%3d&risl=&pid=ImgRaw&r=0',
    title: 'birthday',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.HdETgqkYpSTZhRHQcDetIgHaFS?pid=ImgDet&rs=1',
    title: 'holi',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.j5eiq7Uk_Q7F1sjPBxRnDgHaD_?pid=ImgDet&rs=1',
    title: 'Halfsareefunction',
    cols: 2,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.eMq-FQQUah4W6MhXuUL4CAHaE8?pid=ImgDet&rs=1',
    title: 'function',
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/originals/df/d5/6f/dfd56f766ec45111b4813dc18e5c6fa7.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.-DciMtoo6_K8QTERkKaSzQHaFj?w=263&h=197&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    title: 'holy functions',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.j2pEBbeqW6wxKCuP4hdyEAHaFc?pid=ImgDet&rs=1',
    title: 'ladies',
  },
  {
    img: 'https://cdn.newsday.com/polopoly_fs/1.27840728.1579616725!/httpImage/image.jpg_gen/derivatives/landscape_1280/image.jpg',
    title: 'birthdays',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://th.bing.com/th/id/R.6f3257b7c5cb6dafaa619625f3f332c0?rik=yymVF6ifKh%2bQ2A&riu=http%3a%2f%2f1.bp.blogspot.com%2f_vQpQhuOCiw4%2fSH5VCQTTByI%2fAAAAAAAAAE4%2fhuiRRo__yW8%2fs1600%2fLovers&ehk=N5ugS08crbtNoFZLTgInNbYz9t8aYrz5Ugufsf358NI%3d&risl=&pid=ImgRaw&r=0',
    title: 'Tomato basil',
  },
  {
    img: 'https://th.bing.com/th/id/R.903781f34685ea8b222f102b6e168274?rik=zHrXjbXKpd%2b1Ng&riu=http%3a%2f%2fi.ytimg.com%2fvi%2fBdhErO4a9XE%2fmaxresdefault.jpg&ehk=g5ZpSVJqNjoxjgJyqfGgDgmqrrOinmNBZM7V8sa7gtk%3d&risl=&pid=ImgRaw&r=0',
    title: 'Sea star',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.3y97AENNzKy61g2VLZTd-QHaE8?pid=ImgDet&rs=1',
    title: 'Marriage',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.EySLC-p0p92rwRcGYupW-wHaE8?pid=ImgDet&rs=1',
    title: 'birthday',
  },
  
  {
    img: 'https://i.pinimg.com/originals/d0/03/32/d00332cbdee796032a7f5fa23edb8117.jpg',
    title: 'Halfsareefunction',
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/736x/5c/a7/00/5ca70004b056e76538070616e208d8c8.jpg',
    title: 'function',
    cols: 2,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.N4F8oKLYTluIXP76hv-MsQHaFj?pid=ImgDet&rs=1',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/736x/c4/69/1b/c4691b99ad9b3cb6ee3ee47164ad4e25.jpg',
    title: 'holy functions',
  },
  {
    img: 'https://4.bp.blogspot.com/-NVZxlCLLldg/Vw4mlpiVO1I/AAAAAAAACfo/sJBlMZ76ymYN_OM0k0J-KWWYgtk-2OnpA/s1600/Sri-Divya1.jpg',
    title: 'ladies',
  },
  
  
  

];