/**
 * All possible methods of the Server API
 */

export const someTestMethod = body => {
  console.info('Some test method with body: ', JSON.stringify(body, 4, null));
  return {...body, ...{result: 'OK'}};
};
