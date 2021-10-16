import { useState, useEffect } from "react"
import { csv } from "d3-fetch"

const csvUrl = 'https://gist.githubusercontent.com/flouren/746b25260de6b57633ece53fc62c2469/raw/ca5f9eed06968c90e0354435bb17b9fc897a2fef/iris.csv'

export const useData = () => {
    const [data,setData] = useState(null)

    useEffect(() => {
  
      const row = d => {
        d.sepal_length = +d.sepal_length
        d.sepal_width = +d.sepal_width
        d.petal_length = +d.petal_length
        d.petal_width = +d.petal_width
        return d
      }
  
      csv(csvUrl,row)
      .then(setData)
      
    }, [])
    // console.log(data);
     return data
 }