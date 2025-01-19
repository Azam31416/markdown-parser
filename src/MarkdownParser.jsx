import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MarkdownParser(){
  const [markdownText, setMarkdownText] = useState('');

  function handleInputChange(e){
  	setMarkdownText(e.target.value);
  }

  return (
  	<Container className="mt-5">
  		<Row>
  			<Col md={6}>
  				<h3 className="text-center">Markdown Editor</h3>
  				<Form.Control
  					as="textarea"
  					row={15}
  					value={markdownText}
  					onChange={handleInputChange}
  					placeholder="Write Markdown here..."
  				/>
  				<Button
  					variant="primary"
  					className="mt-3"
  					onClick={() => setMarkdownText('')}
  				>
  					Clear
  				</Button>
  			</Col>
  			<Col md={6}>
  				<h3 className="text-center">Preview</h3>
  				<div className="border p-3 rounded">
  					<ReactMarkdown>{markdownText}</ReactMarkdown>
  				</div>
  			</Col>
  		</Row>
  	</Container>
  );
}
export default MarkdownParser;