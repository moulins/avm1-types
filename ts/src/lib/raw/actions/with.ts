import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";

export interface With extends ActionBase {
  action: ActionType.With;
  size: Uint16;
}

export const $With: RecordIoType<With> = new RecordType<With>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.With as ActionType.With})},
    size: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
}));
