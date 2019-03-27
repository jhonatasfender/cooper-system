import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { ClientsList } from '../components/client/ClientsList';
import { postsActions, postsSelectors } from '../store/posts/index';

@connect(
  (state) => {
    return {
      params: postsSelectors.getParams(state),
      client: postsSelectors.getPosts(state),
    };
  }
)

export class ClientsIndex extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.deleteClient = this.deleteClient.bind(this);
  }

  componentDidMount() {
    this.fetchClients({});
  }

  fetchClients() {
    this.context.store.dispatch(postsActions.fetchPosts());
  }

  deleteClient(post) {
    this.context.store.dispatch(postsActions.deletePost(post));
  }

  render() {
    const {
      params,
      client,
    } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-6 text-right">
            <Link to="/client/new" className="btn btn-primary">Cadastar Cliente</Link>
          </div>
        </div>
        { client.length > 0 && <ClientsList clients={client} onDelete={this.deleteClient}/> }
      </div>
    );
  }
}
