import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum ActionType {
  Raw = 0x100,
  Error = 0x101,
  End = 0x00,
  Add = 0x0a,
  Add2 = 0x47,
  And = 0x10,
  AsciiToChar = 0x33,
  BitAnd = 0x60,
  BitLShift = 0x63,
  BitOr = 0x61,
  BitRShift = 0x64,
  BitURShift = 0x65,
  BitXor = 0x62,
  Call = 0x9e,
  CallFunction = 0x3d,
  CallMethod = 0x52,
  CastOp = 0x2b,
  CharToAscii = 0x32,
  CloneSprite = 0x24,
  ConstantPool = 0x88,
  Decrement = 0x51,
  DefineFunction = 0x9b,
  DefineFunction2 = 0x8e,
  DefineLocal = 0x3c,
  DefineLocal2 = 0x41,
  Delete = 0x3a,
  Delete2 = 0x3b,
  Divide = 0x0d,
  EndDrag = 0x28,
  Enumerate = 0x46,
  Enumerate2 = 0x55,
  Equals = 0x0e,
  Equals2 = 0x49,
  Extends = 0x69,
  FsCommand2 = 0x2d,
  GetMember = 0x4e,
  GetProperty = 0x22,
  GetTime = 0x34,
  GetUrl = 0x83,
  GetUrl2 = 0x9a,
  GetVariable = 0x1c,
  GotoFrame = 0x81,
  GotoFrame2 = 0x9f,
  GotoLabel = 0x8c,
  Greater = 0x67,
  If = 0x9d,
  ImplementsOp = 0x2c,
  Increment = 0x50,
  InitArray = 0x42,
  InitObject = 0x43,
  InstanceOf = 0x54,
  Jump = 0x99,
  Less = 0x0f,
  Less2 = 0x48,
  MbAsciiToChar = 0x37,
  MbCharToAscii = 0x36,
  MbStringExtract = 0x35,
  MbStringLength = 0x31,
  Modulo = 0x3f,
  Multiply = 0x0c,
  NewMethod = 0x53,
  NewObject = 0x40,
  NextFrame = 0x04,
  Not = 0x12,
  Or = 0x11,
  Play = 0x06,
  Pop = 0x17,
  PreviousFrame = 0x05,
  Push = 0x96,
  PushDuplicate = 0x4c,
  RandomNumber = 0x30,
  Return = 0x3e,
  RemoveSprite = 0x25,
  SetMember = 0x4f,
  SetProperty = 0x23,
  SetTarget = 0x8b,
  SetTarget2 = 0x20,
  SetVariable = 0x1d,
  StackSwap = 0x4d,
  StartDrag = 0x27,
  Stop = 0x07,
  StopSounds = 0x09,
  StoreRegister = 0x87,
  StrictEquals = 0x66,
  StrictMode = 0x89,
  StringAdd = 0x21,
  StringEquals = 0x13,
  StringExtract = 0x15,
  StringGreater = 0x68,
  StringLength = 0x14,
  StringLess = 0x29,
  Subtract = 0x0b,
  TargetPath = 0x45,
  Throw = 0x2a,
  ToInteger = 0x18,
  ToNumber = 0x4a,
  ToString = 0x4b,
  ToggleQuality = 0x08,
  Trace = 0x26,
  Try = 0x8f,
  TypeOf = 0x44,
  WaitForFrame = 0x8a,
  WaitForFrame2 = 0x8d,
  With = 0x94,
}

export const $ActionType: TsEnumType<ActionType> = new TsEnumType<ActionType>({
  enum: ActionType,
  changeCase: CaseStyle.PascalCase,
});
