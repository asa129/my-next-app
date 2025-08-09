import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Test", () => {
  // MVP1
  it("タイトルコンポーネントがファイル共有アプリになっていること", async () => {
    render(<Home />);
    screen.debug();
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent("ファイル共有アプリ");
  });
});
