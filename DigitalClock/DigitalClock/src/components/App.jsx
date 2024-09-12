import { useState, useEffect, Component } from 'react';
import Pescador from 'react-explode/Pescador';

import './css/App.css';

class ReactExplode extends Component {
  render() {
    return (
      <Pescador
        size="400"
        delay={0}
        repeatDelay={0}
        repeat={5}
      />
    );
  }
}
export default function App() {
  const [time, setTime] = useState(3);

  useEffect(() => {
    const myinterval = setInterval(() => {
      if (time == 0) {
        setTimeout(() => {
          setTime(3);
        }, 600);
      } else {
        setTime(time - 1);
      }
    }, 1000);

    return () => clearInterval(myinterval);
  }, [time]);

  return <>{time == 0 ? <ReactExplode /> : <p>{time}</p>}</>;
}
