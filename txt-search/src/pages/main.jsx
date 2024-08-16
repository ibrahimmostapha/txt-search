import './style.css'
import React, { useState, useEffect } from 'react';

function SearchPage() {

  const [searchedItem, setSearchedItem] = useState(''); // inital state of search

  function searchInput(e) { // get the search from input
    setSearchedItem(e.target.value);
  }

  function highlightText() {
    const search = searchedItem.trim().toLowerCase(); // make it case-insensitive
    if (search.length < 2) { 
      return;
    }
    const content = document.getElementById('content'); // get the element that has "content" as ID
    if (content) {
      const paragraphs = content.getElementsByTagName('p'); // get paragraphs from it
      for (let i = 0; i < paragraphs.length; i++) { // loop on paragraphs
        const paragraph = paragraphs[i];
        const text = paragraph.textContent || '';
        const lowerText = text.toLowerCase(); // make it case-insensitive
        const reg = new RegExp(`(${search})`, 'gi'); // regular expression to replace matched items later
        if (lowerText.includes(search)) { // find matched items using includes() function
          // add "highlight" class to matched to get special css
          paragraph.innerHTML = text.replace(reg,'<span class="highlight">$1</span>');
        }
      }

    }
  }

  useEffect(function (){highlightText();} , [searchedItem]); // triger the seach every time the input is changed

  return (
    <div>
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchedItem}
          onInput={searchInput}
        />
      </div>
      
      <div className="content" id="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odio eos dolorum saepe! Delectus, beatae? Perferendis dignissimos cum et molestiae eveniet totam veritatis quam odit quidem! Aliquam inventore sed veritatis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odio eos dolorum saepe! Delectus, beatae? Perferendis dignissimos cum et molestiae eveniet totam veritatis quam odit quidem! Aliquam inventore sed veritatis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odio eos dolorum saepe! Delectus, beatae? Perferendis dignissimos cum et molestiae eveniet totam veritatis quam odit quidem! Aliquam inventore sed veritatis!</p>
      </div>
    </div>
  );
};

export default SearchPage;
