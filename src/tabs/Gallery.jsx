import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
  }

  componentDidUpdate(prevProps, prevState){
   
    const {query, page} = this.state
  if(prevState.query !== query){
    ImageService.getImages(query, page)
  }
  }

  onHandleSubmit = (query) =>{
    this.setState({query});
  }


  render() {
    return (
      <>
      <SearchForm onSubmit={this.onHandleSubmit}/>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
