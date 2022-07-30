import React from 'react'
import moment from 'moment';

function TableItemOrder({order}) {
  return (
    <div role='tableitem' key={order.id} className='table-row'>
      <p className='table-col'>{order.order_key}</p>
      <div className='table-col table-gr'>
        <div><img src={`${order.image}`} alt={order.product_name} /></div>
        <div><p>{order.product_name}</p></div>
      </div>
      <p className='table-col'>{order.price} ₽</p>
      <p className='table-col'>{order.quantity}</p>
      <p className='table-col'>{moment(order.order_date).locale('ru').format('D MMM')}</p>
      {order.order_status === 'Пришло' 
      ? <p className='table-col table-status delivered'><span>{order.order_status}</span></p>
      : order.order_status === 'В пути' 
      ? <p className='table-col table-status coming'><span>{order.order_status}</span></p>
      : order.order_status === 'Ожидает оплаты' 
      ? <p className='table-col table-status pending'><span>{order.order_status}</span></p>
      : <p className='table-col table-status rejected'><span>{order.order_status}</span></p>
      }
    </div>
  )
}

export default TableItemOrder;