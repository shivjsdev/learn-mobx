import React from "react";
import { observer } from "mobx-react";
import { withStore } from "@store";

@observer
class _Footer extends React.Component {
  render() {
    const { themeStore } = this.props;
    return (
      <footer className="footer p-4 text-center bg-teal-400">
        Hello Footer - {themeStore.mode}
      </footer>
    );
  }
}

export default withStore(_Footer);
