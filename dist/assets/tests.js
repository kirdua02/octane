'use strict';

define("shlack/tests/helpers/ember-cli-clipboard", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.triggerSuccess = triggerSuccess;
  _exports.triggerError = triggerError;
  _exports.default = _default;

  /* === Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */
  function triggerSuccess(context, selector) {
    fireComponentAction(context, selector, 'success');
  }
  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Void}
   */


  function triggerError(context, selector) {
    fireComponentAction(context, selector, 'error');
  }
  /* === Acceptance Test Helpers === */

  /**
   * Default export is a function that registers acceptance test helpers
   */


  function _default() {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'success');
    });
    Ember.Test.registerAsyncHelper('triggerCopyError', function (app, selector = '.copy-btn') {
      fireComponentActionFromApp(app, selector, 'error');
    });
  }
  /* === Private Functions === */

  /**
   * Fires named action for an instance of a copy-button component in an app
   * @function fireComponentActionFromApp
   * @param {Object} app - Ember application
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireComponentActionFromApp(app, selector, actionName) {
    fireComponentAction({
      container: app.__container__,
      $: app.$
    }, selector, actionName);
  }
  /**
   * Fires named action for an instance of a copy-button component
   * @function fireComponentAction
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireComponentAction(context, selector, actionName) {
    let component = getComponentBySelector(context, selector);
    fireActionByName(component, actionName);
  }
  /**
   * Fetches component reference for a given context and selector
   * @function getComponentBySelector
   * @param {Object} context - test context
   * @param {String|Element} selector - selector of the copy-button instance
   * @returns {Object} component object
   */


  function getComponentBySelector(context, selector = '.copy-btn') {
    let emberId = context.$(selector).attr('id');
    return context.container.lookup('-view-registry:main')[emberId];
  }
  /**
   * Fires a component's action given an action name
   * @function fireActionByName
   * @param {Ember.Component} component - component to fire action from
   * @param {String} actionName - name of action
   * @returns {Void}
   */


  function fireActionByName(component, actionName) {
    let action = component[actionName];
    Ember.run(() => {
      if (typeof action === 'string') {
        component.sendAction(action);
      } else {
        action();
      }
    });
  }
});
define("shlack/tests/integration/helpers/format-timestamp-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | format-timestamp', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('myDate', '04-05-2020');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "SrcSfJmi",
        "block": "{\"symbols\":[],\"statements\":[[1,[28,\"format-timestamp\",[[24,[\"myDate\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'Apr 5, 2020 00:00.00 AM');
    });
  });
});
define("shlack/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/format-timestamp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-timestamp.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/background-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/background-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/background-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/background-size.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-radius.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-radius.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/border-widths.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/border-widths.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/font-weights.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/font-weights.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/fonts.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/fonts.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/letter-spacing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/letter-spacing.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/line-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/line-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/margin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/margin.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/max-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/max-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/max-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/max-width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/min-height.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/min-height.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/min-width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/min-width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/negative-margin.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/negative-margin.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/opacity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/opacity.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/padding.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/padding.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/screens.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/screens.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/shadows.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/shadows.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/svg-fill.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/svg-fill.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/svg-stroke.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/svg-stroke.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/tailwind.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/tailwind.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/text-colors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/text-colors.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/text-sizes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/text-sizes.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/width.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/width.js should pass ESLint\n\n');
  });
  QUnit.test('tailwind/config/z-index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tailwind/config/z-index.js should pass ESLint\n\n');
  });
  QUnit.test('utils/date.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/date.js should pass ESLint\n\n');
  });
});
define("shlack/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('shlack/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shlack/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shlack/templates/components/channel-footer.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shlack/templates/components/channel-footer.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shlack/templates/components/channel-header.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shlack/templates/components/channel-header.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shlack/templates/components/message.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shlack/templates/components/message.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shlack/templates/components/team-selector.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shlack/templates/components/team-selector.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('shlack/templates/components/team-sidebar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'shlack/templates/components/team-sidebar.hbs should pass TemplateLint.\n\n');
  });
});
define("shlack/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/helpers/format-timestamp-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/format-timestamp-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/utils/date-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/date-test.js should pass ESLint\n\n');
  });
});
define("shlack/tests/test-helper", ["shlack/app", "shlack/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("shlack/tests/unit/utils/date-test", ["shlack/utils/date", "qunit"], function (_date, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | date', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('string inputs', function (assert) {
      assert.equal((0, _date.dateToString)('04/05/1983'), 'Apr 5, 1983 00:00.00 AM', 'MM/DD/YYYY');
      assert.equal((0, _date.dateToString)('4/5/1983'), 'Apr 5, 1983 00:00.00 AM', 'M/D/YYYY');
      assert.equal((0, _date.dateToString)('26 June 2010 13:14'), 'Jun 26, 2010 01:14.00 PM', '26 June 2010 13:14');
    });
    (0, _qunit.test)('empty and invalid inputs', function (assert) {
      // @ts-ignore
      assert.equal((0, _date.dateToString)(), null); // @ts-ignore

      assert.equal((0, _date.dateToString)(null), null); // @ts-ignore

      assert.equal((0, _date.dateToString)([]), null); // @ts-ignore

      assert.equal((0, _date.dateToString)({}), null);
    });
  });
});
define('shlack/config/environment', [], function() {
  var prefix = 'shlack';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('shlack/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
