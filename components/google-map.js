import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>
      <iframe width="1166" height="530"
        title="template google map"
        src="https://maps.google.com/maps?width=1166&amp;height=530&amp;hl=en&amp;q=Rossi%20Esplanada%20Business%20SCN%20Quadra%2001%2C%20Bloco%20G%2C%20Sala%20911%2C%209%C2%BA%20Andar%20%20-%20Asa%20Norte%2C%20Bras%C3%ADlia%20-%20DF%2C%2070711-000+(Balaio%20da%20cria%C3%A7%C3%A3o)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        className={`map__${extraClass}`}
        allowFullScreen
      </iframe>
    </div>
  );
};

export default GoogleMap;
