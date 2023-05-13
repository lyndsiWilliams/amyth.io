import { mount } from "@cypress/react";
import AmythicalButton from "./AmythicalButton";

it("AmythicalButton", () => {
  mount(
    <AmythicalButton
      buttonText="This is a button"
      type="default"
      shape="round"
      style={{ width: "150px" }}
    />
  );

  cy.get("button").contains("This is a button").click();
});
