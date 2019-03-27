export function getParams(state) {
  return state.client.params;
}

export function getClient(state, id) {
  return state.client.byId[id];
}

export function getClients(state) {
  return Object.values(state.client.byId);
}