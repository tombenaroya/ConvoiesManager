import React from 'react';
import ConvoyProp from 'data/convoyProp.json';

const DetailedConvoy = ({ convoy, closeDetailsConvoy, updateConvoyStatus }) => {
  const CONVOY_PROP = ConvoyProp;

  const convoyArrived = () => updateConvoyStatus('isArrived', 'inMotion', convoy);
  const convoyInMotion = () => updateConvoyStatus('inMotion', 'isArrived', convoy);

  return (
    <>
      <button onClick={closeDetailsConvoy} type='button' className='btn-close' aria-label='Close' />
      <table dir='rtl' className='table table-striped text-center'>
        <thead>
          <tr>
            {CONVOY_PROP.map(({ displayName }, index) => (
              <th key={index}>{displayName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr
            style={{
              backgroundColor: convoy.inMotion ? 'yellow' : convoy.isArrived ? 'green' : ''
            }}
          >
            {CONVOY_PROP.map(({ realName }, index) => (
              <td key={index}>{convoy[realName]}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className='row justify-content-center' dir='rtl'>
        <div className='col col-1'>
          <button onClick={convoyArrived} className='btn btn-success'>
            סיים
          </button>
        </div>
        <div className='col col-1'>
          <button onClick={convoyInMotion} className='btn btn-warning'>
            בתנועה
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailedConvoy;
