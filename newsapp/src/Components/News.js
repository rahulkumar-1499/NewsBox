import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {

  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);


 
     const UpdateNews = async ()=> {
         try {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
     
      let data = await fetch(url);
      let parsedata = await data.json()
      console.log(parsedata);

      setarticles(parsedata.articles)
      settotalResults(parsedata.totalResults)
      
    }
    catch (e) {
      console.log("something went wrong");
    }
  }


       useEffect(() => {
        UpdateNews();

       }, [props.apikey])

   
  const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
    
    setpage(page+1)
      let data = await fetch(url);
      let parsedata = await data.json()
      console.log(parsedata);
      setarticles(articles.concat(parsedata.articles))
      settotalResults(parsedata.totalResults)
  }
  
    return (

      <div className='container  md-6 ms-auto'>
        <h2 style={{ textAlign: "center ", marginTop: 64, marginBottom: 20 }} >{!props.category ? "Newsbox" : props.category}</h2>
        <InfiniteScroll
          // dataLength={this.state.articles.length}    //class component
          dataLength={articles.length}
          // next={this.fetchMoreData}        //class component
          next={fetchMoreData}
          // hasMore={this.state.articles.length !== this.state.totalResults}
          hasMore={articles.length !== totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="row">

            {/* {this.state.articles.map((element, index) => { */}
            {articles.map((element, index) => {

              return <div className="col-md-4" key={index}>

                <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imgurl={element.urlToImage} newsurl={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />

              </div>

            })}

          </div>

        </InfiniteScroll>

      </div>
    )
  
}
News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
}


export default News
