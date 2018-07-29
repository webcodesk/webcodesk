import nodeFetch from 'node-fetch';
import createFetch from './createFetch';

export const createNodeFetch = () =>
  createFetch(nodeFetch, {
    baseUrl: `http://localhost:2222`,
  });
