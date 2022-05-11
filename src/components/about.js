import React from "react"
import * as style from "../components/css/about.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView: descriptionIsVisible } = useInView()

  return (
    <div className={style.container}>
      <h2 className={style.title}>About Me</h2>
      <div className={style.imageContainer}>
        <StaticImage
          className={style.siteimage}
          src="../images/me.png"
          alt="Matthew"
          formats={["AUTO", "WEBP"]}
        />
      </div>
      <p
        ref={ref}
        className={`${style.description} ${
          descriptionIsVisible ? style.fadein : ""
        }`}
      >
        My name is Matthew Harvey. I am a graduate from the University Of Otago
        and an enthusiast of programming and 2 wheels!
      </p>
      <p
        ref={ref}
        className={`${style.description} ${
          descriptionIsVisible ? style.fadein : ""
        }`}
      >
        I have gained a variety of experience throughout my career, from working
        forklifts in warehouses, to helping customers over the phone in a
        technician role, to developing a companies website and designing it to
        their liking.
      </p>
      <p
        ref={ref}
        className={`${style.description} ${
          descriptionIsVisible ? style.fadein : ""
        }`}
      >
        I have a passion for web development and looking to improve my skills
        and portfolio in the future. I currently build my websites using
        GatsbyJS and enjoy the frontend development and designing of websites.
      </p>
      <p
        ref={ref}
        className={`${style.description} ${
          descriptionIsVisible ? style.fadein : ""
        }`}
      >
        In the future, I would like to become a more rounded full stack
        developer with experience on a variety of web frameworks.
      </p>
      <p
        className={`${style.description} ${
          descriptionIsVisible ? style.fadein : ""
        }`}
      >
        All my code is freely available on my{" "}
        <a
          className={style.gitlink}
          href="https://github.com/MatthewHarv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={style.github}>github.</span>{" "}
        </a>
      </p>
    </div>
  )
}

/*


 const myRef = useRef()
  const [myElementIsVisible, setMyElementIsVisible] = useState()
  console.log("myElementIsVisible", myElementIsVisible)
  useEffect(() => {
    console.log("myRef", myRef.current)
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      setMyElementIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, [])

*/
