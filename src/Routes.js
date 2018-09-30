import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Base from './components/Layout/Base';
// import BasePage from './components/Layout/BasePage';

import DashboardV1 from './components/Dashboard/DashboardV1';
import Create from './components/Dashboard/Create';
import Edit from './components/Dashboard/Edit';


const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    const animationName = 'rag-fadeIn';

        return (
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
            <Base>
              <TransitionGroup>
                <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                    <div>
                        <Switch location={location}>

                            {/*Dashboard*/}
                            <Route path="/dashboard" component={DashboardV1}/>
                            <Route name="create" path="/album/create" component={Create}/>
                            <Route name="edit" path="/album/:id" component={Edit}/>

                            <Redirect to="/dashboard"/>
                        </Switch>
                    </div>
                </CSSTransition>
              </TransitionGroup>
            </Base>
        )

};

export default withRouter(Routes);
