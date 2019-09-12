import React from 'react';
import {
  Link,
  match,
  Route,
} from 'react-router-dom';
import Backup from './backup';
import Recovery from './recovery';

interface ISettingsProps {
  match: match;
}

export default class Settings extends React.Component<ISettingsProps> {
    public render() {
        const params = this.props.match;
        return (
          <div>
            <h2>Settings</h2>
            <ul>
              <li>
                <Link to={`${params.url}/backup`}>Backup</Link>
              </li>
              <li>
                <Link to={`${params.url}/recovery`}>Recovery</Link>
              </li>
            </ul>
            <Route path={`${params.path}/backup`} component={Backup} />
            <Route path={`${params.path}/recovery`} component={Recovery} />
          </div>
        );
    }
}
