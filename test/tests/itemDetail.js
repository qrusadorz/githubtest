import { ReactSelector, waitForReact } from "testcafe-react-selectors";
import Page from "../pages/itemDetail";
import PageTop from "../pages/top";

fixture`詳細`
    .page`http://localhost:3000/items/SDQKFCjioWSuszXnR2M7EA`
    .beforeEach(async () => {
        await waitForReact(30000);
    });

const page = new Page();
const pageTop = new PageTop();

test("詳細画面表示", async t => {
    await t
        // 表示項目チェック
        .expect(page.officialButton.exists).ok()   // .notOk("", { timeout: 30000 })
        .expect(page.grid.exists).ok()
        .expect(page.card.exists).ok()
        .expect(page.cardHeader.exists).ok()
        .expect(page.cardContent.exists).ok()
        .expect(page.cardActions.exists).ok()
        .expect(page.fabButton.exists).ok()

        // Topページに戻る
        .click(page.fabButton)
        .expect(pageTop.searchTextField.exists).ok()
        ;
});
