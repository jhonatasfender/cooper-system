import React from 'react';
import { clientActions, clientSelectors } from '../store/client/index';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import { isEqual } from 'lodash';
import ViaCep from 'react-via-cep';

@connect(
  (state, props) => {
    return {
      client: clientSelectors.getClient(state, props.params.clientId),
    };
  }
)
export class ClientsEdit extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  };

  static propTypes = {
    params: React.PropTypes.object,
    client: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      clientId: this.props.params.clientId,
      client: {
        name: '', 
        cpf: '',
        phone: '',
        email: '',
        cep: ''
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.client, this.state.client)) {
      this.setState({...this.state, client: nextProps.client});
    }
  }

  componentDidMount() {
    if (this.state.clientId) {
      this.context.store.dispatch(clientActions.fetchClient(this.props.params.clientId));
    }
  }

  handleChange(field, e) {
    const client = Object.assign({}, this.state.client, {[field]: e.target.value});
    this.setState(Object.assign({}, this.state, {client}));
  }

  handleSubmit() {
    if (this.state.clientId) {
      this.context.store.dispatch(clientActions.updateClient(this.state.client));
    } else {
      this.state.client.cpf = this.state.client.cpf.replace(/[.-]/g,'');
      console.log(this.state.client.phone);
      let phone = this.state.client.phone.replace(/[()\s-]/g,'');
      this.state.client.phone = [];
      this.state.client.phone.push({
        number: phone
      });
      this.context.store.dispatch(clientActions.createClient(this.state.client));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate>
        <div className="form-group">
          <label className="label-control">Nome</label>
          <input
            type="text"
            className="form-control"
            value={this.state.client.name}
            onChange={this.handleChange.bind(this, 'name')} />
        </div>
        <div className="form-group">
          <label className="label-control">CPF</label>
          <InputMask mask="999.999.999-99"
            type="text"
            className="form-control"
            value={this.state.client.cpf}
            onChange={this.handleChange.bind(this, 'cpf')} >
          </InputMask>
        </div>
        <div className="form-group">
          <label className="label-control">Telefones</label>
          <InputMask mask="(99) 9 9999-9999"
            type="tel"
            className="form-control"
            value={this.state.client.phone}
            onChange={this.handleChange.bind(this, 'phone')} >
          </InputMask>
        </div>
        <div className="form-group">
          <label className="label-control">E-mail</label>
          <input
            type="text"
            className="form-control"
            value={this.state.client.email}
            onChange={this.handleChange.bind(this, 'email')} />
        </div>

        <h2>Endereço</h2>

        <div className="form-group">
          <ViaCep cep={this.state.client.cep} lazy>
          { 
            ({ data, loading, error, fetch }) => {
              console.log(data,error);
                if (loading) {
                  return <p>loading...</p>
                }
                if (!data && error) {
                  return <p>error</p>
                }
                if (data) {
                  return <div>
                    <p>
                      CEP: {data.cep} <br/>
                      CIDADE: {data.localidade} <br/>
                      UF: {data.uf} <br/>
                    </p>
                    <div className="form-group">
                      <label className="label-control">CEP</label>
                        <div className="input-group">
                          <InputMask mask="99999-999"
                            type="text"
                            className="form-control"
                            disabled
                            value={data.cep} 
                            onChange={this.handleChange.bind(this, 'cep')} />
                        </div>
                      </div>
                    <div className="form-group">
                      <label className="label-control">CEP</label>
                        <div className="input-group">
                          <InputMask mask="99999-999"
                            type="text"
                            className="form-control"
                            disabled
                            value={data.cep} 
                            onChange={this.handleChange.bind(this, 'cep')} />
                        </div>
                      </div>
                    <div className="form-group">
                      <label className="label-control">CEP</label>
                        <div className="input-group">
                          <InputMask mask="99999-999"
                            type="text"
                            className="form-control"
                            disabled
                            value={data.cep} 
                            onChange={this.handleChange.bind(this, 'cep')} />
                        </div>
                      </div>
                  </div>
                }
                return <div className="form-group">
                <label className="label-control">CEP</label>
                  <div className="input-group">
                    <InputMask mask="99999-999"
                      type="text"
                      className="form-control"
                      value={this.state.client.cep} 
                      onChange={this.handleChange.bind(this, 'cep')} />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button" onClick={fetch}>PESQUISAR</button>
                    </span>
                  </div>
              </div>
            }
          }
          </ViaCep>
        </div>


        <button type="submit" className="btn btn-default">
          {this.state.clientId ? 'Alterar' : 'Cadastrar' } Cliente
        </button>
      </form>
    );
  }
}
