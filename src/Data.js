import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
export const pageLinks = [
    {id:1, href:'#home', text:'home'},
    {id:2, href:'#about', text:'about'},
    {id:3, href:'#services', text:'services'},
    {id:4, href:'#tours', text:'tours'},
   
];
export const socialLinks = [
    {id:1, href:'https://www.twitter.com', icon:'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com', icon:'fab fa-twitter'},
    {id:3, href:'https://www.twitter.com', icon:'fab fa-squarespace'},
];

export const servicesData = [
    {   id:1,
        icon:'fas fa-wallet fa-fw', 
        title:'saving money',
        text:' Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
{   id:2,
        icon:'fas fa-wallet fa-fw', 
        title:'endless hiking',
        text:' Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
        {   id:1,
        icon:'fas fa-wallet fa-fw', 
        title:'amazing comfort',
        text:' Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
    ];         
export const tours = [
    { id:1,
         image:tour1, 
         date:'augTibet Adventure',
         info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
         location: 'china',
         duration:6,
         cost:2100,
          } ,
     {id:2,
         image:tour2, 
         date:'augTibet Adventure',
         info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
         location: 'china',
         duration:11,
         cost:1400,
          } ,
      {id:3,
         image:tour3, 
         date:'augTibet Adventure',
         info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
         location: 'china',
         duration:8,
         cost:50000,
          } ,
       {id:4,
         image:tour4, 
         date:'augTibet Adventure',
         info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
         location: 'china',
         duration:20,
         cost:3300,
          } ,

];