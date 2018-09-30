import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import {
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Input } from 'reactstrap';
import axios from 'axios';


class Edit extends Component {

    constructor(props){
      super(props)
      this.state = {
        'item': ''
      }
    }

    componentDidMount() {
      this.getItem();
    }

    getItem(){
      axios.get('http://127.0.0.1:8000/album/'+this.props.match.params.id+'/')
           .then(response=>{
              this.setState({'item': response.data})
           });
    }

    render() {

        return (
            <ContentWrapper>
              <div className="content-heading">
                  <div>Form Elements
                      <small>Standard and custom elements for any form</small>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                        {/* START card */}
                        <Card className="card-default">
                            <CardHeader>Stacked form</CardHeader>
                            <CardBody>
                                <form onSubmit={this.onSubmit}>
                                    <FormGroup>
                                        <label>Album Name</label>
                                        <Input type="text" value={ this.state.item.album_name } placeholder="Enter name"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <label>Artist</label>
                                        <Input type="text" value={ this.state.item.artist } placeholder="Enter artist"/>
                                    </FormGroup>
                                    <button className="btn btn-sm btn-primary" type="submit">Edit</button>
                                </form>
                            </CardBody>
                        </Card>
                        {/* END card */}
                </div>
              </div>
            </ContentWrapper>
        );
    }

}

export default Edit;
