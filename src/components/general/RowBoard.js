import React from 'react';
import '../../styles/components/row-board.css';

const RowBoard = (props) => {

  return (
    <div className="container-row-board " >
      <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext1}</p>
              <p className="value-row-board" >{props.boddyText1}</p>
      </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext2}</p>
              <p className="value-row-board" >{props.boddyText2}</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext3}</p>
              <p className="value-row-board" >{props.boddyText3}</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext4}</p>
              <p className="value-row-board" >{props.boddyText4}</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext5}</p>
              <p className="value-row-board" >{props.boddyText5}</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext6}</p>
              <p className="value-row-board" >{props.boddyText6}</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext7}</p>
              <p className="value-row-board" >{props.boddyText7}</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext8}</p>
              <p className="value-row-board" >{props.boddyText8}</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext9}</p>
              <p className="value-row-board" >{props.boddyText9}</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext10}</p>
              <p className="value-row-board" >{props.boddyText10}</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext11}</p>
              <p className="value-row-board" >{props.boddyText11}</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext12}</p>
              <p className="value-row-board" >{props.boddyText12}</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext13}</p>
              <p className="value-row-board" >{props.boddyText13}</p>
          </div>
          <div className="container-text-row-board">
              <p className="itemes-row-board">{props.headtext14}</p>
              <p className="value-row-board" >{props.boddyText14}</p>
          </div>
          <div className="container-text-row-board">
            <p className="itemes-row-board">{props.headtext15}</p>
            <p className="value-row-board" >
                <div className="container-red-green">
                      <div className={props.boddyText15 === 'green' ? "green" : props.boddyText15 === 'red' ? "red" : null}></div>
                </div>
            </p>
        </div>

    </div>
  )
}
export default RowBoard
