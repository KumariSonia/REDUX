import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h2>Deposit/Withdraw money</h2>
      {/* <button type="button" className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
      Update balance
      <button type="button" className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button> */}

      <button type="button" className="btn btn-primary mx-2" onClick={() => { withdrawMoney(100) }}>-</button>
      Update balance
      <button type="button" className="btn btn-primary mx-2" onClick={() => { depositMoney(100) }}>+</button>

    </div>
  )
}

export default Shop
