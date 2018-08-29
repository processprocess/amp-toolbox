/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const minimist = require('minimist');

class Cli {
  constructor(logger = console) {
    this.logger = logger;
  }

  async run(args) {
    args = minimist(args);
    const command = args._[0] || 'help';

    switch (command) {
      case 'help':
        return await require('./cmds/help')(args, this.logger);
      case 'version':
        return await require('./cmds/version')(args, this.logger);
      case 'update-cache':
        return await require('./cmds/updateCache')(args, this.logger);
      default:
        console.error(`"${command}" is not a valid command!`);
        return 1;
    }
  }
}

module.exports = Cli;
