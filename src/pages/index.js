import styles from "../styles/index.module.scss";
import Layout from "../components/layout";
import Header from "../components/header";
import Filter from "../components/filter";
import {Piza} from "../components/piza";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Message from "../components/message";
import {Helmet} from "react-helmet";

export const Home = () => {
  const [isLoading,setLoading] = useState(false);
  const [isError,setError] = useState(false);
  const [serverData,setData] = useState([]);
  const {_sort,_order} = useSelector(state=>state.sort.sortBy);
  const {category} = useSelector(state=>state.sort)
  useEffect(()=>{
    const request =  async () => {
      
      try {
        setLoading(true)
        
        const res = await fetch(`/data?_sort=${_sort}&_order=${_order}${category === "Все" ? "" : `&category=${category}`}`);
        const sortedData = await res.json();
        setLoading(false)
        setData(sortedData);
        
      }
      catch(e) {
        setLoading(false)
        console.log(e.message)
        setError(true)
      }
    }
    request();
  },[_sort,category,_order]);
  return (
    <Layout>
          <Helmet>
            <title>Меню</title>
          </Helmet>
          <Header hideButton={true} />
          <main>
            <Filter />
            <section className={styles.menu}>
            <div className="container">
                {isLoading ? ("Загрузка данных...") : isError ? ("ошибка на стороне сервера, попробуйте ещё раз") :  (
                    <>
                        <h2 className={styles.title}>Все пиццы</h2>
                        <Message/>
                        <div className={styles.grid}>
                        {serverData && serverData.map(item=>{
                            return <Piza id={item._id} key={item.name} name={item.name} price={item.price} img={item.imgUrl}  />
                        })}
                        </div>
                    </>
                )}
            </div>
        </section>
          </main>
    </Layout >
  );
};
