import React from 'react'
import HeaderBox from '../../components/headerBox'
import TotalBalanceBox from '../../components/totalBalanceBox'
import RightSidebar from '../../components/rightSidebar'

const Home = () => {
  const user={firstName:"TANIA", lastName: "BANERJEE", email:"taniaban2712@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome" 
            user={user?.firstName || 'Guest'} 
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