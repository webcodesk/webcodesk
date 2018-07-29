/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

import { setPanelData } from 'actions/panel';

import PanelPage from './PanelPage';

async function action({ store, controller }) {
  if (controller) {
    // server side request
    console.info('Request to the server side API');
    const data = {
      title: 'Data is taken from the server side request',
    };
    store.dispatch(setPanelData({ data }));
  }

  return {
    title: 'React Starter Kit',
    chunks: ['panel-page'],
    component: <PanelPage />,
  };
}

export default action;
