class WindowsButton {
    render() {
      console.log("Rendering a Windows button");
    }
  }
  
  class MacOSButton {
    render() {
      console.log("Rendering a MacOS button");
    }
  }
  
  class GUIFactory {
    static createButton(osType) {
      if (osType === "Windows") {
        return new WindowsButton();
      } else if (osType === "MacOS") {
        return new MacOSButton();
      }
      throw new Error("Unsupported OS type");
    }
  }
  
  module.exports = GUIFactory;