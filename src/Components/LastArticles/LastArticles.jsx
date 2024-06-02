import Article from '../Article/Article'
import { useSelector } from 'react-redux'
import { allArticles } from '../../features/dataSlice'

export default function LastArticles() {
  const data=useSelector(allArticles)
  return (<div className='flex flex-wrap container xl:gap-10 md:gap-5 gap-2 py-10'>
         {
          data.map(item=><div className='flex lg:w-[31%] md:w-[48%] w-[100%] rounded-2xl shadow-lg p-10' key={item._id}><Article data={item} /></div>)
         }
    </div>)
}
