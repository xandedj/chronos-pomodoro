import Heading from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <div>
     <Heading>
        Olá mundo! 1
        <button>
            <TimerIcon />
        </button>
        </Heading>
      <p>Os Estados Unidos procuraram a China para negociar as tarifas de 145% impostas pelo presidente Donald Trump, informou uma conta de mídia social ligada à mídia estatal chinesa, sinalizando uma possível abertura de Pequim às negociações.</p>
    </div>
  );
}
