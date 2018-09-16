import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
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
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
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
                                                  <td><a href="#" onClick={this.handleClickFunc.bind(this)}>Editar</a></td>
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
