import React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'
import db from '../../app/data/db.json'
import ArticlesCard from './ArticlesCard'
import Pagination from '../../app/components/layout/Pagination'


const ArticlesPage = () => {

  const data = db.articles
  
  const screenWidth = window.screen.width

  const [filteredArticles, setFilteredArticles] = useState([])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useEffect(() => {
    data.length !== 0 && setFilteredArticles(data)
  }, [data])

  const [text, setText] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage] = useState(screenWidth > 768 ? 9 : screenWidth > 420 ? 6 : 4)

  const lastArticle = currentPage * articlesPerPage
  const firstArticle = lastArticle - articlesPerPage
  const currentArticles = filteredArticles.slice(firstArticle, lastArticle)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    if (data.length !== 0) {
      const array = text === '' ? data : data.filter(article => article.header.toLowerCase().includes(text.toLowerCase()))
      paginate(1)
      setFilteredArticles(array)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const handleText = debounce((e) => {
    setText(e.target.value)
  }, 1000)

  return (
    <div className='articles'>
      <h1 className='articles__header'>Новости</h1>
      <input placeholder='Поиск...' onChange={handleText} type="text" />
      <div className="articles__cards">
        {currentArticles.map(el =>
          <ArticlesCard image={el.image} date={el.date} header={el.header} description={el.description} key={el.id} id={el.id}/>
        )}
      </div>
      <Pagination articlesPerPage={articlesPerPage} totalArticles={filteredArticles.length} paginate={paginate} currentPage={currentPage} />
    </div>
  )
}

export default ArticlesPage