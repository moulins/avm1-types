import chai from "chai";

import { ActionType } from "../lib/action-type.mjs";
import * as actions from "../lib/raw/actions/index.mjs";

describe("Actions", () => {
  it("should test a valid Play action", async () => {
    chai.assert.isTrue(actions.$Play.test({action: ActionType.Play}));
  });
});
