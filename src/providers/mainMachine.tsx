import { useInterpret } from '@xstate/react';
import { FC } from 'react';
import { MainMachineContext } from '../contexts/mainMachine';
import { mainMachine } from '../machines/main';

const MainMachineProvider: FC = ({ children }) => {
  const value = useInterpret(mainMachine, {} as any);
  return (
    <MainMachineContext.Provider {...{ value }}>
      {children}
    </MainMachineContext.Provider>
  );
};

export default MainMachineProvider;
