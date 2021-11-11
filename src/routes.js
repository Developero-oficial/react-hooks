import {WelcomePage} from './components/welcome-page';
import {UseStatePage} from './use-state';
import {UseEffectPage} from './use-effect';
import {UseCallbackPage} from './use-callback';
import {UseMemoPage} from './use-memo';
import {UseReducerPage} from './use-reducer';
import {UseContextPage} from './use-context';
import {UseRefPage} from './use-ref';

export const routes = [
  {
    path: '/',
    label: 'Bienvenida',
    Component: WelcomePage,
  },
  {
    path: '/use-state',
    label: 'useState',
    Component: UseStatePage,
  },
  {
    path: '/use-effect',
    label: 'useEffect',
    Component: UseEffectPage,
  },
  {
    path: '/use-callback',
    label: 'useCallback',
    Component: UseCallbackPage,
  },
  {
    path: '/use-memo',
    label: 'useMemo',
    Component: UseMemoPage,
  },
  {
    path: '/use-reducer',
    label: 'useReducer',
    Component: UseReducerPage,
  },
  {
    path: '/use-context',
    label: 'useContext',
    Component: UseContextPage,
  },
  {
    path: '/use-ref',
    label: 'useRef',
    Component: UseRefPage,
  },
];
