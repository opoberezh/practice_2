import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  }


  componentDidUpdate(prevProps, prevState){
   
    const {query, page} = this.state
  if(prevState.query !== query){
    this.getGaleryList(query, page)
  }
  }

  getGaleryList = async (query, page) => {
    try {
      const result = await ImageService.getImages(query, page)
      console.log(result)
      this.setState({images: result.photos})
      
    } catch (error) {
      
    }
  }

  onHandleSubmit = (query) =>{
    this.setState({query});
  }


  render() {
    const { images } = this.state;
    return (
      <>
      <SearchForm onSubmit={this.onHandleSubmit}/>
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        <Grid>
          {
            images.map(({ id, alt, src: { small } }) => {
              return (
                <GridItem key='id'>

                  <CardItem>
                    
    <img src={small} alt={alt} />
  </CardItem>
</GridItem>
              )
            }) 
  }
</Grid>
      </>
    );
  }
}
