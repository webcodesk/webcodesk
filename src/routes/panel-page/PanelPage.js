/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from 'components/Link';
import PanelContainer from 'containers/PanelContainer/PanelContainer';
import s from './PanelPage.css';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Panel Page</h1>
          <Link to="/">Go Home</Link>
          <PanelContainer />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
