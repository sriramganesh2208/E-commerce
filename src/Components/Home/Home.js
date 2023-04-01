import React from 'react'
import items from '../../Data/items.json'
import Itemlist from '../Itemlist/Itemlist'
import Orders from '../Orders/Orders'
import Itemdetail from '../Itemdetail/Itemdetail'

function Home() {
  return (
    <div>
        <Itemlist items={items}/>
        <Orders items={items}/>
        <Itemdetail items={items}/>
    </div>
  )
}

export default Home