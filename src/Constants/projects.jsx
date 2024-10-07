  import cvImage from "../assets/Images/cv.png";
  import MovieApp from "../assets/Images/Movie.png";
  export const PROJECTS = [
    {
      id: "1",
      title: "react Profile",
      description: "This is a react profile project",
      image: {
        src: cvImage,
        placeholderSrc:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==",
      },
      links: {
        // site: 'https://apiko-marketplace-app-snaichuk.herokuapp.com/',
        site:"https://lehoang.vercel.app/",
        repo: "https://github.com/hoang01n",
      },
      technologies: [
        "react",
        "styled components",
        "react-pdf",
        "react-tsparticles",
      ],
    },
    {
      id: "2",
      title: "react Movie",
      description: "This is a react Movie",
      image: {
        src: MovieApp,
        placeholderSrc: "",
      },
      links: {
        site: "https://movie-react-app-orpin.vercel.app/",
        repo: "https://github.com/hoang01n/Movie-react",
      },
      technologies: ["react", "sass", "swiper"],
    },
  ];
