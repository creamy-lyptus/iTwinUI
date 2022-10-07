/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
const { scenario } = require('../scenarioHelper');

module.exports = [
  scenario('Type default horizontal', {
    selectors: ['#demo-horizontal'],
    viewports: [{ width: 800, height: 600 }],
  }),
  scenario('Type default vertical', {
    selectors: ['#demo-vertical'],
    viewports: [{ width: 800, height: 600 }],
  }),
];
