import { createContext } from 'react';
import { InterpreterFrom } from 'xstate';
import { mainMachine } from '../machines/main';

export const MainMachineContext = createContext(
  {} as InterpreterFrom<typeof mainMachine>,
);
