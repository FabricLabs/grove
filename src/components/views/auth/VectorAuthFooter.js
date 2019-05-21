'use strict';

const React = require('react');
import SdkConfig from 'matrix-react-sdk/lib/SdkConfig';

import { _t } from 'matrix-react-sdk/lib/languageHandler';

module.exports = React.createClass({
  displayName: 'VectorAuthFooter',
  statics: {
    replaces: 'AuthFooter',
  },

  render: function() {
    return (
      <div className="mx_AuthFooter">
        <a href="https://github.com/RolePlayGateway" target="_blank" rel="noopener"><code>git://</code></a>
        <a href="https://twitter.com/RolePlayGateway" target="_blank" rel="noopener">@RolePlayGateway</a>
        <a href="https://medium.com/universes" target="_blank" rel="noopener">/universes</a>
        <a href="https://www.roleplaygateway.com" target="_blank" rel="noopener">Home</a>
      </div>
    );
  },
});
