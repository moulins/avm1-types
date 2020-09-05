import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface Modulo extends ActionBase {
  action: ActionType.Modulo;
}

export const $Modulo: RecordIoType<Modulo> = new RecordType<Modulo>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Modulo as ActionType.Modulo})},
  },
  changeCase: CaseStyle.SnakeCase,
});
