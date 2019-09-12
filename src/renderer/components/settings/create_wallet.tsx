import {
  History,
} from 'history';
import React from 'react';

interface ICreateWallet {
  history: History;
}

export default class CreateWallet extends React.Component<ICreateWallet> {
  public render() {
    return (
      <div>
        <h2>Create Wallet</h2>
        <button>create</button>
        <button onClick={() => this.props.history.goBack()}>back to menu</button>
      </div>
    );
  }
}
