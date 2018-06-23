import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
    state = {
      savedArticles: [],
      title: "",
      date: "",
      url: "" 
    };

render() {
    return (
      <Container fluid>
           <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Results</h1>
            </Jumbotron>
            {this.state.savedArticles.length ? (
              <List>
                {this.state.savedArticles.map(savedArticle => (
                  <ListItem key={savedArticle._id}>
                    {/* <Link to={"/art/" + book._id}> */}
                      {/* <strong>
                        {book.title} by {book.author}
                      </strong> */}
                    {/* </Link> */}
                    {/* <DeleteBtn onClick={() => this.deleteArticle(article._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
      </Container>
    );
  }
}

export default Articles;
