import { compareScreenshot } from './screenshot-comparer';
import { Selector } from 'testcafe';

fixture`Example`
    .beforeEach((t) => t.resizeWindow(800, 600));

test
    .page `http://127.0.0.1:7777/`

("Screenshot", async t => {
    const isDxWidgetExists = Selector('.dx-widget').exists;

    await t.expect(isDxWidgetExists).ok("dx-widget does not exist");

    await t.expect(await compareScreenshot(t, "test.png")).ok();
});

