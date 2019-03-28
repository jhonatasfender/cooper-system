import axios from 'axios';
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
        return clientsActions.fetchClientsSuccess(res.data, params)
      });
    });
}

export function updateClient(action$) {
  return action$.ofType(actionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(client => {
      return Observable.merge(
        Observable.fromPromise(
          axios.put(`http://localhost:8888/client/${client.id}`, client)
        ).map(res => clientsActions.updateClientSuccess(res.data)),
        Observable.of(push('/client'))
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
        ).map(res => {
          console.log(res);
          return clientsActions.createClientSuccess(res.data)
        }),
        Observable.of(push('/client'))
      );
    });
}

export function deleteClient(action$) {
  return action$.ofType(actionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(client => {
      return Observable.fromPromise(
        axios.delete(`http://localhost:8888/client/${client.id}`)
      ).map(res => clientsActions.deleteClientSuccess(client));
    });
}
