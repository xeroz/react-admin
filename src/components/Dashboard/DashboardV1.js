import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col } from 'reactstrap';


class DashboardV1 extends Component {

    componentDidMount() {
    }


    render() {

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Dashboard
                        <small></small>
                    </div>
                </div>
                <Row>
                    Content
                </Row>
            </ContentWrapper>
            );

    }

}

export default DashboardV1;
