import { keyBy } from 'lodash';
import * as actionTypes from './actionTypes';

export function fetchClient(payload) {
  return {
    type: actionTypes.FETCH_ONE,
    payload
  };
}

export function fetchClientSuccess(payload) {
  if (payload) {
    const byId = {
      [payload.id]: payload
    };
    return {
      type: actionTypes.FETCH_ONE_SUCCESS,
      payload: {
        byId
      }
    };
  }
}

export function fetchClients(payload) {
  return {
    type: actionTypes.FETCH_COLLECTION,
    payload
  };
}

export function fetchClientsSuccess(clients, params) {
  const byId = keyBy(clients, (client) => client.id);
  return {
    type: actionTypes.FETCH_COLLECTION_SUCCESS,
    payload: {
      byId,
      params
    }
  };
}

export function createClient(payload) {
  return {
    type: actionTypes.CREATE,
    payload
  };
}

export function createClientSuccess(payload) {
  return {
    type: actionTypes.CREATE_SUCCESS,
    payload
  };
}

export function updateClient(payload) {
  return {
    type: actionTypes.UPDATE,
    payload
  };
}

export function updateClientSuccess(payload) {
  return {
    type: actionTypes.UPDATE_SUCCESS,
    payload
  };
}

export function deleteClient(payload) {
  return {
    type: actionTypes.DELETE,
    payload
  };
}

export function deleteClientSuccess(payload) {
  return {
    type: actionTypes.DELETE_SUCCESS,
    payload
  };
}