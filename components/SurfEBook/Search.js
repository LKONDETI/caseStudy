import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavSideBars from '../Auth/NavSideBars';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [authorQuery, setAuthorQuery] = useState('');
  const [categoryQuery, setCategoryQuery] = useState('');
  const [nameQuery, setNameQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/cards');
      setCards(response.data);
      setFilteredCards(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    
    const results = cards.filter(card => {
      const lowercaseAuthorQuery = authorQuery.toLowerCase();
    const lowercaseCategoryQuery = categoryQuery.toLowerCase();
    const lowercaseNameQuery = nameQuery.toLowerCase();
    
      const lowercaseAuthor = card.author.toLowerCase();
      const lowercaseCategory = card.category.toLowerCase();
      const lowercaseName = card.name.toLowerCase();
  
      return (
        lowercaseAuthor.includes(lowercaseAuthorQuery) &&
        lowercaseCategory.includes(lowercaseCategoryQuery) &&
        lowercaseName.includes(lowercaseNameQuery)
      );
     
    });
   setFilteredCards(results);
  }; 

  

  return (
    <div>
      <div><NavSideBars/></div>
      <div class="p-3 text-center bg-light border border-dark" style={{marginTop:'0px',marginLeft:'210px', paddingBottom:'30px', width:'175vh'}}>
          <p class="mb-3">E-Library Filter</p>

          <div class="d-flex justify-content-evenly"> 
          <input class="form-control me-2"
          value={nameQuery}
          onChange={e => setNameQuery(e.target.value)}
          type="search" placeholder="Search by Name" />

          <input class="form-control me-2"
          value={categoryQuery}
          onChange={e => setCategoryQuery(e.target.value)}
          type="search" placeholder="Search by Category"/>

          <input class="form-control me-2" type="search"
          value={authorQuery}
          onChange={e => setAuthorQuery(e.target.value)}
          placeholder="Search by Author"/>

          <button class="btn btn-outline-secondary" onClick={handleSearch} type="submit">Filter</button>
          </div>
              </div>

     
  
      <div class="d-flex gap-4 row row-cols-4" style={{marginLeft:'200px', marginTop:'20px'}}>
        {filteredCards.map(card => (<div class="border border-dark text-white" style={{backgroundColor: '#0c1524', width:'20rem', borderRadius:'10px'}}>
          <div key={card.id}>
            <h6 style={{textAlign:'center', marginTop:'10px'}}>{card.name}</h6>
            <img src={card.Image} style={{width:'6rem', float:'right', marginTop:'0px'}} />
            <p style={{marginBottom:'0px', marginTop:'10px'}}>Author:{card.author}</p>
            <p>Category:{card.category}</p>
            <a href={card.PreviewLink}>Preview</a><br/>
            <a href={card.SubcribeLink}>Subscribe Now</a>
</div></div>
))}
{/* <div> <CardComponent/></div> */}
    </div>
    </div>
  );
  
};

export default CardList;
