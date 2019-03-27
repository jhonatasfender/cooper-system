import React from 'react';
import { postsActions, postsSelectors } from '../store/posts/index';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import { isEqual } from 'lodash';
import ViaCep from 'react-via-cep';

@connect(
  (state, props) => {
    return {
      post: postsSelectors.getPost(state, props.params.postId),
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
    post: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      clientId: this.props.params.clientId,
      client: {name: '', cpf: ''}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.post, this.state.post)) {
      this.setState({...this.state, post: nextProps.post});
    }
  }

  componentDidMount() {
    if (this.state.postId) {
      this.context.store.dispatch(postsActions.fetchPost(this.props.params.postId));
    }
  }

  handleChange(field, e) {
    const client = Object.assign({}, this.state.client, {[field]: e.target.value});
    this.setState(Object.assign({}, this.state, {client}));
  }

  handleSubmit() {
    if (this.state.postId) {
      this.context.store.dispatch(postsActions.updatePost(this.state.post));
    } else {
      this.context.store.dispatch(postsActions.createPost(this.state.post));
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
                if (loading) {
                  return <p>loading...</p>
                }
                if (error) {
                  return <p>error</p>
                }
                if (data) {
                  return <div>
                    <p>
                      CEP: {data.cep} <br/>
                      CIDADE: {data.localidade} <br/>
                      UF: {data.uf} <br/>
                    </p>
                  </div>
                }
                return <div className="form-group">
                <label className="label-control">CEP</label>
                  <div className="input-group">
                    <InputMask mask="99999-999"
                      type="text"
                      className="form-control"
                      value={this.state.cep} 
                      onChange={this.handleChangeCep} />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button" onClick={fetch}>Go!</button>
                    </span>
                  </div>
              </div>
            }
          }
          </ViaCep>
        </div>


        <button type="submit" className="btn btn-default">
          {this.state.clientId ? 'Update' : 'Create' } Post
        </button>
      </form>
    );
  }
}
