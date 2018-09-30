import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardHeader,
    Table} from 'reactstrap';
import axios from 'axios';


class DashboardV1 extends Component {

    constructor(){
        super();
        this.state = {
            'items': []
        }
    }

    componentDidMount() {
        this.getItems();
    }

    getItems(){
        axios.get('http://127.0.0.1:8000/album/')
             .then(response=>{
                this.setState({'items': response.data})
             });
    }

    handleClickFunc(){
      console.log('eeeeeeeeeeeeeeeeeee');
      alert('ssssssssssssss');
    }

    onEdit(item_id){

      axios.get('http://127.0.0.1:8000/album/'+item_id+'/')
           .then(response=>{
             this.setState({'item': response.data})
           });
    }

    onDelete(item_id){

      axios.delete('http://127.0.0.1:8000/album/'+item_id+'/')
           .then(response=>{
             this.getItems();
           });
    }

    render() {

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Dashboard
                        <small></small>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Card outline color="secondary" className="mb-3">
                            <CardHeader color="secondary">Header</CardHeader>
                            <CardBody>
                                <Table hover responsive>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Artist</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.items.map(item => {
                                            return (
                                              <tr>
                                                  <td>{item.id}</td>
                                                  <td>{item.album_name}</td>
                                                  <td>{item.artist}</td>
                                                  <td>
                                                    <Link to={`${item.id}`}>Edit</Link>
                                                    <a href="#" onClick={this.onDelete.bind(this, item.id)}>Delete</a>
                                                  </td>
                                              </tr>

                                            )
                                        })
                                    }
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </ContentWrapper>
        );
    }

}

export default DashboardV1;
