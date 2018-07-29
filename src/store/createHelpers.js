import createServerApiRequest from './createApiRequest';

export default function createHelpers({ fetch, history }) {
  return {
    history,
    api: createServerApiRequest(fetch),
  };
}
