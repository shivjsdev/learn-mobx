import ThemeModel from "./models/Theme.model";
import BoardModel from "./models/Board.model";
import uiState from "./state/ui.state";

// Single combined store
export default {
  board: new BoardModel(),
  themeStore: new ThemeModel(),
  uiState
};
