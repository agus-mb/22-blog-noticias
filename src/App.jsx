import { ArticlesContainer } from "./mis-componentes/ArticlesContainer"
import { Header } from "./mis-componentes/header"
import { MainArticle } from "./mis-componentes/MainArticle"
import { NewContainer } from "./mis-componentes/NewContainer"


function App() {
 
  return (
    <main className="
    px-4
    pt-6">
     <Header/>
     <div className="lg:flex lg:gap-8"> 
        <MainArticle/>
     <NewContainer/>
     </div>
     <ArticlesContainer/>
   
    </main>
  )
}

export default App
