/*
 * Copyright (c) 2017. Helmetrex Ltd.
 */

/* eslint-disable no-plusplus */

import * as methods from 'api/server';

const controller = (methodName, body) => {
  const method = methods[methodName];

  if (method) {
    if (method.then) {
      return method(body);
    }
    return Promise.resolve().then(() => method(body));
  }
  throw Error(
    `Server API method ${methodName} was not found. Please double check exported methods in the "api/server/index" file.`,
  );
};

export default controller;
