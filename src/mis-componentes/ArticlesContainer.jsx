import { Article } from "./Article"
import img1 from '../images/image-retro-pcs.jpg'
import img2 from '../images/image-top-laptops.jpg'
import img3 from '../images/image-gaming-growth.jpg'


export const ArticlesContainer = () => {
  return (
    <section className="mt-6 md:flex">
    <Article
img={img1}
     tittle="01"
      subtext="Reviving Retro PCs"
     text="  What happens when old PCs are given modern upgrades?"/>
    <Article 
    img={img2}
     tittle="02"
     subtext="Top 10 Laptops of 2022"
     text="Our best picks for various needs and budgets."/>
    <Article
    img={img3}
     tittle="03"
     subtext="The Growth of Gaming"
     text="How the pandemic has sparked fresh opportunities."/>
    </section>

  )
}


