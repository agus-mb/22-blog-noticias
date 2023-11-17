import { Header } from "./mis-componentes/header"
import { MainArticle } from "./mis-componentes/MainArticle"
import { NewContainer } from "./mis-componentes/NewContainer"


function App() {
 
  return (
    <main className="
    px-4
    pt-6">
     <Header/>
     <MainArticle/>
     <NewContainer></NewContainer>
    </main>
  )
}

export default App
