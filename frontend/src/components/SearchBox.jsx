import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  const [keyword, setKeyword] = useState(urlKeyword || '');
  const [isExpanded, setIsExpanded] = useState(false); // State to handle expansion

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <InputGroup
        className={`${isExpanded ? 'w-100' : 'w-50'}`}
        onFocus={() => setIsExpanded(true)}
        onBlur={() => !keyword && setIsExpanded(false)}
      >
        <Form.Control
          type='text'
          placeholder='Search Products...'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button type='submit' variant='outline-light'>
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
