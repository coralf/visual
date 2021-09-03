import React, { useEffect } from 'react';
import { Line as G2Line } from '@antv/g2plot';
import { chartSize } from '@/config/componentConfig';
interface Props {
  id: string;
}

const Line = (props: Props) => {
  const init = () => {
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
      { year: '1999', value: 8 },
    ];
    const linePlot = new G2Line(props.id, {
      data,
      xField: 'year',
      yField: 'value',
      stepType: 'vh',
    });

    linePlot.render();
  };

  useEffect(() => {
    init();
  }, []);
  return <div id={props.id}></div>;
};

export default Line;
