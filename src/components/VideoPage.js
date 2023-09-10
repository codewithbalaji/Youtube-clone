// ---------video player-----------------
import React from 'react';
import { useParams } from 'react-router-dom';
import RightSidevd from './RightsideVd';
import LikeComponent from './LikeComponent';
import CommentComponent from './CommentComponent';
import Description from './Description';
import '../components/videoPage.css';

const VideoPage = () => {
  const { videoId } = useParams();
  let watchLaterVideos = [];

  const addToWatchLater = video => {
    const savedWatchLater =
      JSON.parse(localStorage.getItem('watchLater')) || [];
    watchLaterVideos.push(video);
    const updatedWatchLater = [...savedWatchLater, ...watchLaterVideos];
    localStorage.setItem('watchLater', JSON.stringify(updatedWatchLater));
    alert('Video added Watch Later successfully');
  };
  // Define the video data for each video ID (you can use an array or object here)
  const videoData = {
    1: {
      thumbnailSrc:
        'https://th.bing.com/th/id/OIP.BwJ84XJUWpPNpSKFGU8KDQHaEO?pid=ImgDet&rs=1',
      channelIconSrc:
        'https://yt3.ggpht.com/ZXdU2_la3sKTncWwYaF-sU3jCDaFsIG_uQC6tOmhgqsFsUDLNlDytibY-4NSx0xOWWbp2HIV=s48-c-k-c0x00ffffff-no-rj',
      title: 'web design by reactjs for frontEnd',
      channelName: 'Web Dev Simplified',
      subscribers: '8.83 lakh Subcribers ',
      dataItem: 'css', // Filter category
      videoUrl: 'https://www.youtube.com/embed/rhPSo4_Tgi0?si=vwYTlSZzQqlE5MpV',
      likeCount: 1900,
      views: '4.6 lakh views 2years ago',
      description: 'Channel that makes learning easy',
    },
    2: {
      thumbnailSrc: 'https://hackr.io/blog/python-vs-java/thumbnail/medium',
      channelIconSrc:
        'https://yt3.ggpht.com/FqiGBOsNpeWbNw20ULboW0jy88JdpqFO9a-YRJ0C2oc4lZ8uoHYJ38PWSkrjdC_zQgNW9pGU=s48-c-k-c0x00ffffff-no-rj',
      title: 'Python in 8 minutes (compared to Java)',
      channelName: 'NeetCode',
      subscribers: '5.34 lakh Subcribers',
      dataItem: 'python', // Filter category
      videoUrl: 'https://www.youtube.com/embed/emNkJGwcusQ?si=9v5v94CB5wndmrBG',
      likeCount: 4300,
      views: '52k views 2years ago',
      description: 'Learn python now with Neet code',
    },
    3: {
      thumbnailSrc: 'https://i.ytimg.com/vi/sx-1gYJyJmo/maxresdefault.jpg',
      channelIconSrc:
        'https://yt3.googleusercontent.com/NlOyQWcjSrIJPDwr8OW28IgNGho_s9rhsuhxcjfytMAqy2Fc9vJ7zNPBMWCy3ECkzvmjNV1kMA=s176-c-k-c0x00ffffff-no-rj',
      title:
        'How to make Desktop Application Using Python and Html Css || python desktop application',
      channelName: 'CodeScripts',
      subscribers: '719 Subcribers',
      dataItem: 'python', // Filter category
      videoUrl: 'https://www.youtube.com/embed/CJrVX-ta4ss?si=P0WhY3IeIQ1kLJTo',
      views: '24k views 4months ago',
      likeCount: 900,
      description: 'Learn Desktop Application Using Python',
    },
    4: {
      thumbnailSrc: 'https://i.ytimg.com/vi/rMCdddVUDX8/maxresdefault.jpg',
      channelIconSrc:
        'https://yt3.ggpht.com/7q9t5rjeujEZYqY1xMLn0mvT4Zc6MaZBYgtseDL2_Zh42AOhMze8ep7BUKdR5FnxytMy3csj=s48-c-k-c0x00ffffff-no-rj',
      title:
        'JavLink vs Python Comparision | Which is Better For Future Java or Python | JavLink & Python | Simplilearn',
      channelName: 'Simplilearn',
      subscribers: '32.8 lakh Subcribers',
      dataItem: 'python', // Filter category
      videoUrl: 'https://www.youtube.com/embed/4NOTxBkfBjo?si=HhZWgKx5NdYfros1',
      views: '46k views 2months ago',
      likeCount: 791,
      description: 'Learn JavLink vs Python Comparision',
    },
    5: {
      thumbnailSrc: 'https://i.ytimg.com/vi/9Q3YqB0rHys/maxresdefault.jpg',
      channelIconSrc:
        'https://yt3.ggpht.com/d8kYE1c2rp8m9AiF1-CpIWes0P_PSuRK8R2PjEdLWH9tcPMf07xOE84uSTxL4EbUVXwNhgnPfw=s48-c-k-c0x00ffffff-no-rj',
      title: 'Python Tutorial - Python Full Course for Beginners in Tamil',
      channelName: 'Error Makes Clever Academy',
      subscribers: '374K lakh Subscribers ',
      dataItem: 'python',
      videoUrl: 'https://www.youtube.com/embed/m67-bOpOoPU?si=7qONoYSJfjUhSlJs',
      views: '412k views 3months ago',
      likeCount: 11291,
      description: 'Learn JavLink vs Python Comparision',
    },
    6: {
      thumbnailSrc:
        'https://i.pinimg.com/originals/bd/88/ed/bd88eda44a5be939a9c30b74a2a7a751.jpg',
      channelIconSrc:
        'https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s48-c-k-c0x00ffffff-no-rj',
      title:
        'Introduction to JavLink Language | Lecture 1 | Complete Placement Course',
      channelName: 'ApnLink College',
      subscribers: '4.21M Subscribers ',
      dataItem: 'java',
      videoUrl: 'https://www.youtube.com/embed/yRpLlJmRo2w?si=Hh0uALW7vyd-HjY8',
      views: '312k views 2months ago',
      likeCount: 51291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    7: {
      thumbnailSrc:
        'https://th.bing.com/th/id/OIP.-30615OIch3KZT-TjE88GwHaEK?pid=ImgDet&rs=1',
      channelIconSrc:
        'https://yt3.ggpht.com/_V4puAFTbWDOKAoUDhLbkYk4AupABvXsNVajUuo5zrIx-LEjaBkWsAPgif2KJaB7MmBIBcFRWw=s48-c-k-c0x00ffffff-no-rj',
      title: 'How To Make THE BEST Thumbnails on YouTube (Photoshop)',
      channelName: 'finzar',
      subscribers: '303K Subscribers ',
      dataItem: 'web Developement',
      videoUrl: 'https://www.youtube.com/embed/BgScmBg-bsk?si=LRHSBPmlK1KYOS9c',
      views: '31k views 2months ago',
      likeCount: 1291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    8: {
      thumbnailSrc:
        'https://word-brokers.com/wp-content/uploads/2019/08/feature-image-768x600.png',
      channelIconSrc:
        'https://yt3.ggpht.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s48-c-k-c0x00ffffff-no-rj',
      title: 'The BEST Way to Build Link Header! [HTML,CSS]',
      channelName: 'Marc Hinton',
      subscribers: '7.65K Subscribers ',
      dataItem: 'web Developement',
      videoUrl: 'https://www.youtube.com/embed/GxwHXxumdQk?si=oebK8ndlgK5NWHY4',
      views: '12k views 1months ago',
      likeCount: 3291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    9: {
      thumbnailSrc:
        'https://th.bing.com/th/id/OIP.VXz8-uu7svTtBvYWF2vI4AHaD4?pid=ImgDet&rs=1',
      channelIconSrc:
        'https://yt3.ggpht.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s48-c-k-c0x00ffffff-no-rj',
      title:
        'Build Link Simple Website with HTML, CSS, JavaScript – Course for Beginners',
      channelName: 'freeCodeCamp.org',
      subscribers: '8.26M Subscribers ',
      dataItem: 'html css',
      videoUrl: 'https://www.youtube.com/embed/krfUjg0S2uI?si=DFdM0BJ6Fcic0YYa',
      views: '52k views 4months ago',
      likeCount: 3291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    10: {
      thumbnailSrc:
        'https://th.bing.com/th/id/R.bc7a0289710df5f1393cdf78a2887539?rik=di3ZsoqRjogTeg&riu=http%3a%2f%2felearner.in%2fassets%2fimages%2flogo%2fhtml.jpg&ehk=znZGlErwfi9OXFMQDciRPALNR%2briisv0qz9Te0zihRc%3d&risl=&pid=ImgRaw&r=0',
      channelIconSrc:
        'https://yt3.ggpht.com/MgbkdtBeJKRobFd8hUJtwg05HoYN9imuK4RFlSAf2XobMGfh6SRMuSUKFAZ-0qALW7zpEfbYvA=s48-c-k-c0x00ffffff-no-rj',
      title: 'Learn Complete HTML Tutorial In Tamil | தமிழ்',
      channelName: "Tutor Joe's Stanley",
      subscribers: '441K Subscribers ',
      dataItem: 'html css',
      videoUrl: 'https://www.youtube.com/embed/Oes56FoYABc?si=ZhB6nPTEZ7t11d-B',
      views: '32k views 2months ago',
      likeCount: 5191,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    11: {
      thumbnailSrc: 'https://i.ytimg.com/vi/l65CSW8D1Pk/maxresdefault.jpg',
      channelIconSrc:
        'https://yt3.ggpht.com/ytc/AOPolaSVhMsmmtIJHWb94Lh0RPxQuDkuo9lsWWKNWOxXpg=s48-c-k-c0x00ffffff-no-rj',
      title:
        '#1 - What is Bootstrap CSS? - (தமிழில்) (Tamil) | Bootstrap Course',
      channelName: 'CyberDude Networks Pvt. Ltd.',
      subscribers: '61.3K Subcribers ',
      dataItem: 'bootstrap',
      videoUrl: 'https://www.youtube.com/embed/4NOTxBkfBjo?si=HhZWgKx5NdYfros1',
      views: '11k views 5months ago',
      likeCount: 1291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    12: {
      thumbnailSrc:
        'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/115235028/original/0a89b92fa9efb18412f454db806e4a1081753f20/create-a-responsive-website-with-html-css.jpg',
      channelIconSrc:
        'https://yt3.ggpht.com/ytc/AOPolaQMtqt8g-xxJ3BkIF06RPiJcIsPzbSOLOwDVAA5pw=s48-c-k-c0x00ffffff-no-rj',
      title:
        'Web Development 101: How HTML, CSS, JavaScript & PHP Work Together | PHP Tutorial #3',
      channelName: 'CodeWithHarry',
      subscribers: '4.41M Subcribers ',
      dataItem: 'web-development',
      videoUrl: 'https://www.youtube.com/embed/m67-bOpOoPU?si=7qONoYSJfjUhSlJs',
      views: '41k views 2months ago',
      likeCount: 4291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    13: {
      thumbnailSrc:
        'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/110072223/original/9b7695518867617d85407d34b1a0129e5632e148/design-html-css-java-script-bootstrap.jpg',
      channelIconSrc:
        'https://yt3.ggpht.com/ytc/AOPolaRu3zcJ4_fybe-8GJUmrGzc2S6xYsxw0HgMnfnI=s48-c-k-c0x00ffffff-no-rj',
      title: 'HTML & CSS Full Course - Beginner to Pro',
      channelName: 'SuperSimpleDev',
      subscribers: '278K Subcribers ',
      dataItem: 'html-css',
      videoUrl: 'https://www.youtube.com/embed/G3e-cpL7ofc?si=RWFA8NpD7Hxi9UDX',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    14: {
      thumbnailSrc:
        'https://th.bing.com/th/id/OIP.kXNc1BUd2mO2WuYkZRGwNQHaEK?pid=ImgDet&rs=1',
      channelIconSrc:
        'https://yt3.ggpht.com/ytc/AOPolaQ2iMmw9cWFFjnwa13nBwtZQbl-AqGYkkiTqNaTLg=s48-c-k-c0x00ffffff-no-rj',
      title: '7 better ways to create Link React app',
      channelName: 'Fireship',
      subscribers: '2.39M ',
      dataItem: 'react',
      videoUrl: 'https://www.youtube.com/embed/2OTq15A5s0Y?si=Q0D1XjamLr_0EUx7',
      views: '21k views 2months ago',
      likeCount: 5291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    15: {
      thumbnailSrc:
        'https://th.bing.com/th/id/OIP.x8Fp9uOPgEaQdig7hV70qwHaGa?pid=ImgDet&rs=1',
      channelIconSrc:
        'https://yt3.ggpht.com/sm9KjocCAAXBPB5gyBMk24j6ZWk2t8nOw2ID_00u5fiS2qBH3MIiphaklt5wq91KeSCHwlCz=s48-c-k-c0x00ffffff-no-rj',
      title:
        'Top 7 Tools For Web Development | Web Development Tools | Intellipaat',
      channelName: 'Intellipaat',
      subscribers: '6.97M',
      dataItem: 'web-tools',
      videoUrl: 'https://www.youtube.com/embed/Vblvb_s12zM?si=Iv7EdqUkCZxgon9l',
      views: '61k views 2months ago',
      likeCount: 5291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    16: {
      thumbnailSrc:
        'https://th.bing.com/th/id/OIP.N5IxrF7hOvVZrO7_AI8IeAHaEG?pid=ImgDet&rs=1',
      channelIconSrc:
        'https://yt3.ggpht.com/s5Eex4ZIqBSe2y2k5aidi71WGkfEJORkY-Hn2QDVMJxnkpRB5FdlOiHC9V1yyLuxSaCv5JCVYmM=s48-c-k-c0x00ffffff-no-rj',
      title: 'Getting CSS Styles with JavaScript - getComputedStyle() function',
      channelName: 'dcode',
      subscribers: '121K',
      dataItem: 'javascript-css',
      videoUrl: 'https://www.youtube.com/embed/GxwHXxumdQk?si=oebK8ndlgK5NWHY4',
      views: '51k views 2months ago',
      likeCount: 1291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    17: {
      thumbnailSrc:
        'https://th.bing.com/th/id/OIP.wr5x7VkvnQNHKLY1tm6vDAHaEK?pid=ImgDet&rs=1',
      channelIconSrc:
        'https://yt3.ggpht.com/ytc/AOPolaQ8qd9YUFBorodGktxw_--6xfk2EscQ-aT2v-dC6w=s48-c-k-c0x00ffffff-no-rj',
      title: 'HTML & CSS Full Course for free 🌎 (2023)',
      channelName: 'Bro Code',
      subscribers: '1.2M',
      dataItem: 'html-css',
      videoUrl: 'https://www.youtube.com/embed/krfUjg0S2uI?si=DFdM0BJ6Fcic0YYa',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    18: {
      thumbnailSrc:
        'https://th.bing.com/th/id/OIP.dDtlFuI4suV5bS_0kZc2pgHaEn?pid=ImgDet&rs=1',
      channelIconSrc:
        'https://yt3.ggpht.com/MgbkdtBeJKRobFd8hUJtwg05HoYN9imuK4RFlSAf2XobMGfh6SRMuSUKFAZ-0qALW7zpEfbYvA=s48-c-k-c0x00ffffff-no-rj',
      title:
        'JavaScript Complete Tutorial in Tamil | Tutor Joes | Full Stack Web Development',
      channelName: "Tutor Joe's Stanley",
      subscribers: '441K',
      dataItem: 'javascript',
      videoUrl: 'https://www.youtube.com/embed/dBUBYz75gdk?si=-d6TpfVHAHvVdNlW',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    19: {
      thumbnailSrc:
        'https://th.bing.com/th/id/OIP.W7njWRGFe9g7F05CdhUsmAHaEN?pid=ImgDet&rs=1',
      channelIconSrc:
        'https://yt3.ggpht.com/zSgb9auUHE_pgzi5Thya71hkDGx-F0F56SbpH3sW1IG899YDeva92ff0Is1oidgB3J1v4kgTTw=s48-c-k-c0x00ffffff-no-rj',
      title: '01. HTML, CSS, JS to React - #01 Introduction and Setup',
      channelName: 'Lifetechfacts',
      subscribers: '3.24K',
      dataItem: 'react',
      videoUrl: 'https://www.youtube.com/embed/cYga4JhX5yM?si=-LzCDtltnD7MvQL2',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    20: {
      thumbnailSrc:
        'https://d3ui957tjb5bqd.cloudfront.net/uploads/2021/12/02080547/Website-Navigation-Bar-Examples-to-Enhance-Your-Web-Design_FeaturedImage_Vertical-700x950.jpeg',
      channelIconSrc:
        'https://yt3.ggpht.com/ytc/AOPolaReFpOoeq7FZ3A0u6MOKndgE57CV-5vpqGIlt4yBA=s48-c-k-c0x00ffffff-no-rj',
      title: 'Building website with C++',
      channelName: 'Ishtiak Mokut',
      subscribers: '372',
      dataItem: 'cpp-web',
      videoUrl: 'https://www.youtube.com/embed/lh3MGxP3Rl8?si=gYBFB-3eyJYoAvJS',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    21: {
      thumbnailSrc:
        '	https://i.ytimg.com/vi/QV2kGyEApuQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDX--ndz4AmENioBp494kL0qIojMA',
      channelIconSrc:
        'https://yt3.ggpht.com/ytc/AOPolaQOnFvK_FiJL_iPMKp3Jq72QOsR129YCbLepcSaUw=s88-c-k-c0x00ffffff-no-rj',
      title:
        '#1 | Program to print half pyramid using * and Numbers | Java Pattern Programming in Tamil',
      channelName: 'SANTRA TECHSPOT',
      subscribers: '55.5K',
      dataItem: 'java',
      videoUrl: 'https://www.youtube.com/embed/QV2kGyEApuQ?si=PX6turRUOGsfxyVs',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    22: {
      thumbnailSrc:
        'https://i.ytimg.com/vi/GlEY28YLffs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLALQH6y336dPw_ib69a1SdSFyg74A',
      channelIconSrc:
        'https://yt3.ggpht.com/lMqV4Au-V6YjSRCLR14LeXMoMR1n…Vcar9EOiZm1z2PJ3zHclmy2=s88-c-k-c0x00ffffff-no-rj',
      title:
        'CSS Tutorial for beginners in Tamil | Full Course for Beginners | Basic to Advanced concepts',
      channelName: 'Balachandra',
      subscribers: '31.7K',
      dataItem: 'css',
      videoUrl: 'https://www.youtube.com/embed/GlEY28YLffs?si=xCp4lW7iQ2qSeoFX',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    23: {
      thumbnailSrc:
        'https://i.ytimg.com/vi/ESnrn1kAD4E/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCM4TFslI3SlIi1HgliT3Rcy6cT1w',
      channelIconSrc:
        '	https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0t…Vigp2kxJubYEVwBcBlogZDe=s88-c-k-c0x00ffffff-no-rj',
      title:
        'CSS Tutorial for Beginners | Complete CSS with Project, Notes & Code',
      channelName: 'Apna College',
      subscribers: '2M',
      dataItem: 'css',
      videoUrl: 'https://www.youtube.com/embed/ESnrn1kAD4E?si=Vl_A9T2f9lD2xUPW',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    24: {
      thumbnailSrc:
        '	https://i.ytimg.com/vi/vLnPwxZdW4Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCE2SKqCRgaHXYYY78hJp_jTn8_3A',
      channelIconSrc:
        '		https://yt3.ggpht.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s68-c-k-c0x00ffffff-no-rj',
      title: 'C++ Tutorial for Beginners - Full Course',
      channelName: 'freeCodeCamp.org',
      subscribers: '8.27M',
      dataItem: 'cpp-web',
      videoUrl: 'https://www.youtube.com/embed/vLnPwxZdW4Y?si=7AKVGzYLjqE67qcc',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    25: {
      thumbnailSrc:
        '	https://i.ytimg.com/vi/lh3MGxP3Rl8/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLA5yyjR4rZwFfnjwnThcUkkyr2P6w',
      channelIconSrc:
        '			https://yt3.ggpht.com/ytc/AOPolaReFpOoeq7FZ3A0u6MOKndgE57CV-5vpqGIlt4yBA=s68-c-k-c0x00ffffff-no-rj',
      title: 'Building website with C++',
      channelName: 'Ishtiak Mokut',
      subscribers: '376',
      dataItem: 'cpp-web',
      videoUrl: 'https://www.youtube.com/embed/lh3MGxP3Rl8?si=0Yv62repgd39O-38',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    26: {
      thumbnailSrc:
        '		https://i.ytimg.com/vi/TcTSqhpm80Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAOXNux-4rDtnkGFweA12bTj5wHeA',
      channelIconSrc:
        '				https://yt3.ggpht.com/ytc/AOPolaQ2iMmw9cWFFjnwa13nBwtZQbl-AqGYkkiTqNaTLg=s68-c-k-c0x00ffffff-no-rj',
      title: '21+ Browser Dev Tools & Tips You Need To Know',
      channelName: 'Fireship',
      subscribers: '2.4M',
      dataItem: 'web-tools',
      videoUrl: 'https://www.youtube.com/embed/b1HiZvIlWQk?si=ohkeckzdYvtGPX5K',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    27: {
      thumbnailSrc:
        'https://i.ytimg.com/vi/TIu_KrdWO1M/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDLqKSmYVVX8CXu8Q1n5jL9Mtpiiw',
      channelIconSrc:
        '					https://yt3.ggpht.com/ytc/AOPolaQtlu0PGwRzx9cBYqccwGgJquizsY8oLzj-c7mNGQ=s68-c-k-c0x00ffffff-no-rj',
      title: '21+ Browser Dev Tools & Tips You Need To Know',
      channelName: 'GorkCoder',
      subscribers: '2.4M',
      dataItem: 'react',
      videoUrl: 'https://www.youtube.com/embed/TIu_KrdWO1M?si=hnL3Vov41P7kq7Vs',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    28: {
      thumbnailSrc:
        'https://i.ytimg.com/vi/tu1DeYVOJL4/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBD9dnBR-hciVnPXoHmWD0sPS09cw',
      channelIconSrc:
        '	https://yt3.ggpht.com/PkDljE3xM2RwK7Y9vF5UG5yGEy1m…xxmTaSlllCGlac7Jnf3bfYg=s68-c-k-c0x00ffffff-no-rj',
      title: 'High-tech circus: The future of entertainment?',
      channelName: 'CNN Business',
      subscribers: '2.4M',
      dataItem: 'entertainment',
      videoUrl: 'https://www.youtube.com/embed/tu1DeYVOJL4?si=JK9HWh4aQ2JTBlnD',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    29: {
      thumbnailSrc:
        '	https://i.ytimg.com/vi/c_dlAdBhPng/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBKsNjk9f4Tjhq562JYgEJTw4FShg',
      channelIconSrc:
        '	https://yt3.ggpht.com/ytc/AOPolaQIPtPYGGPVHeOlmzzJFGneh04djMx6nHIS0ZEAEw=s68-c-k-c0x00ffffff-no-rj',
      title: 'The Future of Entertainment',
      channelName: 'The List Snow Tv',
      subscribers: '1.2M',
      dataItem: 'entertainment',
      videoUrl: 'https://www.youtube.com/embed/c_dlAdBhPng?si=2xXwW-H-qJgVIer',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
    30: {
      thumbnailSrc:
        '		https://i.ytimg.com/vi/6kcmTTYDPF0/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBkAn4ggGVAitVrz_eVkjCx0g8Y_g',
      channelIconSrc:
        '	https://yt3.ggpht.com/ytc/AOPolaSiRupzEgAaZYAidbAFh-nh3C-Blwf1BEOpL4Gn=s68-c-k-c0x00ffffff-no-rj',
      title: 'Technology and entertainment',
      channelName: 'Pacey vids',
      subscribers: '2M',
      dataItem: 'entertainment',
      videoUrl: 'https://www.youtube.com/embed/6kcmTTYDPF0?si=o6ujbuc0Oy8VWgHV',
      views: '51k views 2months ago',
      likeCount: 6291,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus accusamus aperiam expedita ratione eligendi ducimus. Quisquam obcaecati odit eos',
    },
  };

  const video = videoData[videoId];

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div
      style={{ marginLeft: '350px', position: 'absolute', top: '100px' }}
      className="video"
    >
      <div className="content">
        <iframe
          // name={`v${videoId}`}
          width="750px"
          height="450px"
          src={video.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="info">
          {/* <h4 className="title_1">{video.title}</h4>
          <p className="channel-name">{video.channelName}</p>
  <p className="views">{video.views}</p>*/}
        </div>
        <RightSidevd />
      </div>

      <div
        style={{ marginTop: '400px', width: '770px' }}
        className="flex-wrap d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center ch">
          <div className="d-flex flex-column">
            <h4>{video.channelName}</h4>
            <span>{video.subscribers}</span>
          </div>
          <button
            type="button"
            className="btn btn-light ml-2"
            style={{ fontSize: '16px', padding: '5px 10px' }}
          >
            Subscribe
          </button>
        </div>
        <div className="d-flex ">
          <span className="p-1"></span>
          <LikeComponent initialLikes={video.likeCount} />
          <button className="ml-2 mr-2 custom-button">Share</button>
          <button
            className="mr-2 custom-button"
            onClick={() => addToWatchLater(video)}
          >
            Watch Later
          </button>
        </div>
      </div>
      <br />
      <Description description={video.description} views={video.views} />
      <CommentComponent videoId={videoId} />
    </div>
  );
};

export default VideoPage;
