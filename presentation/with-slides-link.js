import React from 'react';


export default function (Presentation) {
  const slidesUrl = 'Muthuks';
  return (props) => (
      <div>
      <div style={{
        position: 'absolute',
        zIndex: '1',
        width: '100%',
        padding: 5,
        textAlign: 'center',
        fontSize: 20
      }}>
       
      </div>


      <Presentation {...props} />
    </div>

  );
}
