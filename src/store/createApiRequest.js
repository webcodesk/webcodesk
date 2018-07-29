/*
 * Copyright (c) 2017. Helmetrex Ltd.
 */

const createClientApiRequest = fetch =>
  async function apiRequest(method, body) {
    const resp = await fetch('/api', {
      body: JSON.stringify({
        method,
        body,
      }),
    });
    const response = await resp.json();
    const { data, error } = response;
    if (error) {
      throw error;
    }
    return data;
  };

export default createClientApiRequest;
