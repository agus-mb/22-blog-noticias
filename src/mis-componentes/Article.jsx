import imgArticle from '../images/image-retro-pcs.jpg'
export const Article = ({tittle, subtext, text}) => {
  return (
    <article className='flex'>
        <div className='w-[100px'>
<img src={imgArticle} alt="" />
        </div>
        <div className='pl-6'>
            <p className='text-GrayishBlue text-3xl mb-[18px] font-bold'>{tittle}</p>
            <h2 className='font-bold mb-[18px] hover:text-SoftOrange'>{subtext}</h2>
            <p>{text}</p>

        </div>
    </article>
  )
}



