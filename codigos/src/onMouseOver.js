import React from 'react';

mouseOut() {
    console.log("Conteúdo exibido quando o mouse sai do foco");
    this.setState({flipped: false});
  }
  
  mouseOver() {
    console.log("Conteúdo exibido quando o mouse está no foco");
    this.setState({flipped: true});
  }

export default function onMouseOver() {
    return(
        <div  onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
        	{label(this.state.flipped)}
    	</div>
    )
}