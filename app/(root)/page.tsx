import React from 'react'
import HeaderBox from '../../components/headerBox'
import TotalBalanceBox from '../../components/totalBalanceBox'
import RightSidebar from '../../components/rightSidebar'
import { getLoggedInUser } from '../../lib/actions/user.actions'

const Home = async () => {
  const user= await getLoggedInUser();
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome" 
            user={user?.name || 'Guest'} 
            subtext="Access and Manage your devices efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={user} transactions={[]} banks={[{currentBalance:123.50},{currentBalance:50}]}/>
    </section>
  )
}

export default Home