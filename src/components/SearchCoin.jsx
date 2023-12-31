import React, { useState } from 'react'

import CoinItems from './CoinItems'
const SearchCoin = ({ coins }) => {

    const [searchCoins, setSearchCoins] = useState('')

    return (
        <div className='rounded my-4 px-5 bg-primary text-primary'>
            <div className='flex flex-col justify-between pt-4 pb-6 text-center  mb-4 md:mb-8 '>
                <h1 className='text-2xl font-bold my-2 text-primary'> Search Coins</h1>
                <form>
                    <input onChange={(e) => setSearchCoins(e.target.value)} type='text' placeholder="Search"
                        className='w-1/2 bg-primary border-input border-[0.5px]  py-1  text-center rounded-2xl shadow-xl'>
                    </input>
                </form>
            </div>

            <table className='  w-full border-collapse text-center'>
                <thead>
                    <tr className='border-b'>
                        <th ></th>
                        <th className='px-4'>#</th>
                        <th className='text-left'>Coin</th>
                        <th></th>
                        <th>Price</th>
                        <th>24hr</th>
                        <th className='hidden md:table-cell'>24 Volume</th>
                        <th className='hidden sm:table-cell'> Mkt</th>
                        <th>Last 7days</th>


                    </tr>
                </thead>
                <tbody>
                    {coins.filter((value) => {
                        if (searchCoins === '') {
                            return value;
                        } else if (
                            value.name.toLowerCase().includes(searchCoins.toLowerCase())
                        ) {
                            return value
                        }
                    })
                        .map((coin) => (
                            <CoinItems coin={coin} key={coin.id} />
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchCoin