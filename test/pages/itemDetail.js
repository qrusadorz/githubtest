import { ReactSelector } from "testcafe-react-selectors";

export default class Page {
  constructor () {
    // this.button = ReactSelector("Button");
    // this.linkButton = ReactSelector("Button").find("a");
    // this.actionButton = ReactSelector("Button").find("button");
    // this.helpLink = ReactSelector("Footer Link").withProps("children", "ヘルプ");
    this.officialButton = ReactSelector("ButtonBases").withProps("title", "公式サイト");
    this.grid = ReactSelector("Grid");
    this.card = ReactSelector("Card");
    this.cardHeader = ReactSelector("CardHeader");
    this.cardContent = ReactSelector("CardContent");
    this.cardActions = ReactSelector("CardActions").findReact("Button");
    this.fabButton = ReactSelector("Fab");
  }

}