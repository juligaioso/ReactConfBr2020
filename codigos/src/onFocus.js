import React from 'react';

export default function onFocus() {
    return(
        <input
        onFocus={(e) => {
            console.log('Exibe o conteúdo quando está no foco');
        }}
        placeholder="onFocus é acionado quando você clica nesta entrada."
            onBlur={(e) => {
            console.log('Exibirá o conteúdo quando sair do foco');
            }}
        placeholder="onBlur é acionado quando você clica nesta entrada e clica fora dela."
      />
    )
}