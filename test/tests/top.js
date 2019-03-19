import { ReactSelector, waitForReact } from "testcafe-react-selectors";
import Page from "../pages/top";
import config from "../configs/site";

fixture `トップページ`
    // .page `http://localhost:3000`
    .page(config.rootUrl)
    .beforeEach(async () => {
        await waitForReact(30000);
    });

const page = new Page();

test("画面表示", async t => {
    await t
        // 表示項目チェック
        .expect(page.searchTextField.exists).ok()   // .notOk("", { timeout: 30000 })
        .expect(page.grid.exists).ok()
        .expect(page.card.exists).ok()
        .expect(page.cardMedia.exists).ok()
        .expect(page.cardContent.exists).ok()
        .expect(page.cardActions.exists).ok()
        .expect(page.fabButton.exists).ok()

        // // 検索入力テスト
        // .typeText(page.searchTextField, "test", { replace: true })
        // .click(page.searchButton)
        // .expect(page.searchTextField.withProps("helperText", "検索結果:2").exists).ok()
        ;
});
