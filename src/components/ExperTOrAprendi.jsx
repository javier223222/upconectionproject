import React from 'react'


const ExperTOrAprendi = props => {
    const expertOrInterest=props.expertorinterest?props.expertorinterest.map(x=><div> {x.namefininteorexpert}</div>):<></>
  return (
    <div>
        <div>{props.expertorinterestti}</div>
        <div>
            {expertOrInterest}
        </div>
    </div>
  )
}



export default ExperTOrAprendi