import { keyBy } from 'lodash';
import axios from 'axios';
import querystring from 'querystring';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

import * as actionTypes from './actionTypes';
import * as clientsActions from './actionCreators';

export function fetchclient(action$) {
  return action$.ofType(actionTypes.FETCH_ONE)
    .map(action => action.payload)
    .switchMap(id => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8888/one/${id}`)
      ).map(res => clientsActions.fetchClientSuccess(res.data));
    });
}

export function fetchClients(action$) {
  return action$.ofType(actionTypes.FETCH_COLLECTION)
    .map(action => action.payload)
    .switchMap(params => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8888/list`)
      ).map(res => {
        clientsActions.fetchClientsSuccess(res.data, params)
      });
    });
}

export function updateClient(action$) {
  return action$.ofType(actionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(client => {
      return Observable.merge(
        Observable.fromPromise(
          axios.put(`http://localhost:8888/clients/${client.id}`, client)
        ).map(res => clientsActions.updateClientSuccess(res.data)),
        Observable.of(push('/clients'))
      );
    });
}

export function createClient(action$) {
  return action$.ofType(actionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(client => {
      return Observable.merge(
        Observable.fromPromise(
          axios.post(`http://localhost:8888/add`, client)
        ).map(res => clientsActions.createClientSuccess(res.data)),
        Observable.of(push('/clients'))
      );
    });
}

export function deleteClient(action$) {
  return action$.ofType(actionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(client => {
      return Observable.fromPromise(
        axios.delete(`http://localhost:8888/clients/${client.id}`)
      ).map(res => clientsActions.deleteClientSuccess(client));
    });
}
